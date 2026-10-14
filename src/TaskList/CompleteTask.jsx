import { motion } from "framer-motion";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const CompleteTask = ({ data, employeeEmail, updateLocalUser }) => {
  const { updateTaskStatus } = useContext(AuthContext);

  // button only shows until the end of the due date
  const canReopen =
    data.taskDate &&
    Date.now() <= new Date(data.taskDate).setHours(23, 59, 59, 999);

  const handleReopen = () => {
    const updatedEmployee = updateTaskStatus(
      employeeEmail,
      data.taskTitle,
      "reopen",
    );

    if (updatedEmployee) {
      updateLocalUser(updatedEmployee);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className="shrink-0 flex flex-col h-full py-5 px-3 w-[calc(25%-15px)] bg-green-300 rounded-xl"
    >
      <div className="flex gap-3 justify-between items-center px-3 py-1">
        <h3 className="bg-green-700 text-sm px-2 py-1 rounded truncate min-w-0">
          {data.category}
        </h3>
        <h4 className="text-xs whitespace-nowrap shrink-0">Due: {data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="mt-auto">
        {canReopen && (
          <button
            onClick={handleReopen}
            className="bg-green-500 py-1 px-2 text-sm w-full rounded-xl active:scale-90"
          >
            Reopen
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default CompleteTask;
