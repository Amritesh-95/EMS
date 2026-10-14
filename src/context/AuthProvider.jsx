import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear()

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  const updateTaskStatus = (employeeEmail, taskTitle, status) => {
    const updatedData = { ...userData };

    const employee = updatedData.employees.find(
      (e) => e.email === employeeEmail,
    );

    if (employee) {
      const task = employee.tasks.find((t) => t.taskTitle === taskTitle);

      if (task) {
        if (
          status === "reopen" &&
          (!task.taskDate ||
            Date.now() > new Date(task.taskDate).setHours(23, 59, 59, 999))
        ) {
          return;
        }

        task.newTask = false;
        task.active =
          status === "active" || status === "retry" || status === "reopen";
        task.completed = status === "completed";
        task.failed = status === "failed";
      }

      employee.taskNumbers = {
        newTask: employee.tasks.filter((t) => t.newTask).length,
        active: employee.tasks.filter((t) => t.active).length,
        completed: employee.tasks.filter((t) => t.completed).length,
        failed: employee.tasks.filter((t) => t.failed).length,
      };

      setUserData(updatedData);

      localStorage.setItem("employees", JSON.stringify(updatedData.employees));
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee }),
      );

      return { ...employee };
    }
  };

  const addTask = (assignTo, newTaskObj) => {
  let found = false;

  const employees = userData.employees.map((emp) => {
    if (emp.firstName.toLowerCase() !== assignTo.trim().toLowerCase()) {
      return emp;
    }
    found = true;
    return {
      ...emp,
      tasks: [...emp.tasks, newTaskObj],
      taskNumbers: {
        ...emp.taskNumbers,
        newTask: emp.taskNumbers.newTask + 1,
      },
    };
  });

  if (!found) return false;

  setUserData({ ...userData, employees });
  localStorage.setItem("employees", JSON.stringify(employees));
  return true;
};



  return (
    <div>
      <AuthContext.Provider value={{ userData, updateTaskStatus, addTask}}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
