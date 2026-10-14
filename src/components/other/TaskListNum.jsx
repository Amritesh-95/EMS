import React from "react";

const TaskListNum = ({ data }) => {
  return (
    <div className="flex screen justify-between gap-5">
      <div className="rounded-xl px-9 py-6 w-[45%] bg-blue-400">
        <h2 className="text-white text-2xl font-bold">
          {data.taskNumbers.newTask}
        </h2>
        <h3 className="text-white text-lg">New Task</h3>
      </div>

      <div className="rounded-xl px-9 py-6 w-[45%] bg-green-300">
        <h2 className="text-white text-2xl font-bold">
          {data.taskNumbers.completed}
        </h2>
        <h3 className="text-white text-lg">Completed</h3>
      </div>

      <div className="rounded-xl px-9 py-6 w-[45%] bg-yellow-300">
        <h2 className="text-white text-2xl font-bold">
          {data.taskNumbers.active}
        </h2>
        <h3 className="text-white text-lg">Active</h3>
      </div>

      <div className="rounded-xl px-9 py-6 w-[45%] bg-red-400">
        <h2 className="text-white text-2xl font-bold">
          {data.taskNumbers.failed}
        </h2>
        <h3 className="text-white text-lg">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNum;
