import React from "react";
import Header from "../other/Header";
import TaskListNum from "../other/TaskListNum";
import TaskList from "../../TaskList/TaskList";

const EmployeeDashboard = ({ handleLogout, data, updateLocalUser }) => {
  return (
    <div className="p-10 bg-[#ICICIC] h-screen space-y-10">
      <Header handleLogout={handleLogout} data={data} />
      <TaskListNum data={data} />
      <TaskList
        data={data}
        employeeEmail={data.email}
        updateLocalUser={updateLocalUser}
      />
    </div>
  );
};

export default EmployeeDashboard;
