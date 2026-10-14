import { motion } from "framer-motion";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const FailedTask = ({ data, employeeEmail, updateLocalUser }) => {


  const { updateTaskStatus } = useContext(AuthContext);
  
    const handleRetry = () => {
      // 1. Tell Context to update the database
      const updatedEmployee = updateTaskStatus(
        employeeEmail,
        data.taskTitle,
        "retry",
      );
  
      // 2. Tell App.jsx to instantly re-render the screen
      if (updatedEmployee) {
        updateLocalUser(updatedEmployee);
      }
    };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -2 }} // Starts slightly small and tilted
      animate={{ opacity: 1, scale: 1, rotate: 0 }} // Snaps into full size and straightens
      transition={{ type: "spring", stiffness: 200, damping: 12 }} // Gives it a slight bounce
      className="shrink-0 flex flex-col h-full py-5 px-3 w-[calc(25%-15px)] bg-red-400 rounded-xl"
    >
      <div className="flex gap-3 justify-between items-center px-3 py-1">
        <h3 className="bg-red-700 text-sm px-2 py-1 rounded truncate min-w-0">
          {data.category}
        </h3>
        <h4 className="text-xs whitespace-nowrap">Due: {data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="flex justify-between items-center mt-auto">
        <button onClick={handleRetry} className="bg-yellow-300 py-1 px-2 text-sm w-full rounded-xl active:scale-90">
          Retry
        </button>
        {/* <button className="bg-red-500 py-1 px-2 text-sm w-full rounded-xl active:scale-90">
          Failed
        </button> */}
      </div>
    </motion.div>
  );
};

export default FailedTask;
