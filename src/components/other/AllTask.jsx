import React, { useContext } from "react";
import { useState, useRef } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const lastScrollTop = useRef(0);

  const handleScroll = (e) => {
    const currentScrollTop = e.target.scrollTop;

    if (currentScrollTop > lastScrollTop.current) {
      // Scrolling DOWN
      setIsScrollingUp(false);
    } else if (currentScrollTop < lastScrollTop.current) {
      // Scrolling UP
      setIsScrollingUp(true);
    }

    lastScrollTop.current = currentScrollTop;
  };

  const { userData } = useContext(AuthContext);

  return (
    <div
      id="all-tasks"
      className={`bg-[#1c1c1c] p-6 mt-5 h-88  rounded-2xl  dynamic-scroller ${isScrollingUp ? "scrolling-up" : ""}`}
      onScroll={handleScroll}
    >
      <div className="bg-[#282a2b] mb-3 px-4 py-3 w-full flex justify-between rounded-xl">
        <h2 className="text-lg font-medium w-1/5 text-white">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5 text-white">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 text-white">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5 text-white">Completed</h5>
        <h5 className="text-lg font-medium w-1/5 text-white">Failed</h5>
      </div>

      <div
        className={`overflow-auto h-58 dynamic-scroller ${isScrollingUp ? "scrolling-up" : ""}`}
        onScroll={handleScroll}
      >
        {userData.employees.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="border-2 border-emerald-500 mb-3 px-4 py-3 w-full flex justify-between rounded-xl"
            >
              <h2 className="text-lg font-medium w-1/5 text-white">
                {elem.firstName}
              </h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-600">
                {elem.taskNumbers.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">
                {elem.taskNumbers.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-green-600">
                {elem.taskNumbers.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-400">
                {elem.taskNumbers.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
