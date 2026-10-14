import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({ handleLogout }) => {
  return (
    <div className="w-full h-screen p-10">
      <Header handleLogout={handleLogout} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
