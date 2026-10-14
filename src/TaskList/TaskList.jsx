import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data, employeeEmail, updateLocalUser }) => {
  // console.log(data)
  return (
    <div
      id="task-list"
      className="h-[55%] overflow-x-auto bg-gray-800 border flex items-center justify-start gap-5 flex-nowrap w-full rounded-xl p-10"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return (
            <AcceptTask
              key={idx}
              data={elem}
              employeeEmail={employeeEmail}
              updateLocalUser={updateLocalUser}
            />
          );
        }
        if (elem.newTask) {
          return (
            <NewTask
              key={idx}
              data={elem}
              employeeEmail={employeeEmail}
              updateLocalUser={updateLocalUser}
            />
          );
        }
        if (elem.completed) {
          return (
            <CompleteTask
              key={idx}
              data={elem}
              employeeEmail={employeeEmail}
              updateLocalUser={updateLocalUser}
            />
          );
        }
        if (elem.failed) {
          return (
            <FailedTask
              key={idx}
              data={elem}
              employeeEmail={employeeEmail}
              updateLocalUser={updateLocalUser}
            />
          );
        }
      })}

      {/* <div className="shrink-0 h-full py-5 px-3 w-[calc(25%-15px)] bg-[#e32178] rounded-xl">
        <div className="flex justify-between items-center px-3 py-1">
          <h3 className="bg-blue-700 text-sm px-3 py-1 rounded">Medium</h3>
          <h4 className="text-sm">05 Oct 2026</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Learn React Hooks</h2>
        <p className='text-sm mt-2'>This is a sample task for learning React Hooks.</p>
      </div>

      <div className="shrink-0 h-full py-5 px-3 w-[calc(25%-15px)] bg-[#efde21] rounded-xl">
        <div className="flex justify-between items-center px-3 py-1">
          <h3 className="bg-red-700 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">04 Oct 2026</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a React/Next Project</h2>
        <p className='text-sm mt-2'>This is a sample task for the React/Next project.</p>
      </div>

      <div className="shrink-0 h-full py-5 px-3 w-[calc(25%-15px)] bg-[#e32178] rounded-xl">
        <div className="flex justify-between items-center px-3 py-1">
          <h3 className="bg-blue-700 text-sm px-3 py-1 rounded">Medium</h3>
          <h4 className="text-sm">05 Oct 2026</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Learn React Hooks</h2>
        <p className='text-sm mt-2'>This is a sample task for learning React Hooks.</p>
      </div> */}
    </div>
  );
};

export default TaskList;
