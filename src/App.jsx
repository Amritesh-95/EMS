import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/localStorage";
import { getLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  useEffect(() => {
    // Only set the default data if the database doesn't exist yet
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }

    // Always run this to sync your app with whatever is in storage
    getLocalStorage();

    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  //how to not login everytime 02:37:00

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@company.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.userData.employees.find(
        (e) => email == e.email && e.password == password,
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee }),
        );
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    // console.log("logout")
    setUser(null);
    setLoggedInUserData(null);
  };

  //updating UI after updating the localStorage
  const updateLocalUser = (updatedEmployee) => {
    setLoggedInUserData(updatedEmployee);
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {/* {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard data={loggedInUserData} />} */}
      {user === "admin" && <AdminDashboard handleLogout={handleLogout} />}
      {user === "employee" && (
        <EmployeeDashboard
          handleLogout={handleLogout}
          data={loggedInUserData}
          updateLocalUser={updateLocalUser}
        />
      )}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  );
};

export default App;
