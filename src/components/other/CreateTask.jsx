import React, { useState, useContext } from "react";
import NewTask from "../../TaskList/NewTask";
import { AuthContext } from "../../context/AuthProvider";
const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const { addTask } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const newTaskObj = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const ok = addTask(assignTo, newTaskObj);
    if (!ok) {
      alert("Employee not found");
      return;
    }

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setCategory("");
    setAssignTo("");
  };
  const options = [
    // {}
    { value: "design", label: "Design" },
    { value: "development", label: "Development" },
    { value: "testing", label: "Testing" },
  ];
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded-xl ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full p-2 items-start justify-between"
      >
        <div className="bg-gray-700 mb-7 px-5 py-3 w-full flex justify-between items-end rounded-xl">
          <div>
            <h2>Create a task</h2>
            <h3>Give your team a clear next step.</h3>
          </div>
          <h3 className="text-white text-xl">
            <span className="bg-blue-500 px-2 py-1 rounded-l">New</span>
            <span className="bg-yellow-500 px-2 py-1 rounded-r">Task</span>
          </h3>
        </div>

        <div className="w-200 grid grid-cols-2 gap-8">
          <div>
            <h3 required type="text" className="text-white text-sm mb-0.5">
              Task Title
            </h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              type="text"
              placeholder="Enter Task Title"
              className="text-sm px-2 py-5 w-full rounded text-white outline-none bg-transparent border border-gray-400 mb-4"
            />
          </div>

          <div>
            <h3 className="text-white text-sm mb-0.5"> Deadline </h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              type="date"
              className="text-sm px-2 py-5 w-full rounded text-white outline-none bg-transparent border border-gray-400 mb-4"
            />
          </div>

          <div>
            <h3 className="text-white text-sm mb-0.5">Assign To</h3>
            <input
              required
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              type="text"
              placeholder="Enter Employee Name"
              className="text-sm px-2 py-5 w-full rounded  text-white outline-none bg-transparent border border-gray-400 mb-4"
            />
          </div>

          <div>
            <h3 className="text-white text-sm mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              placeholder="Select Category"
              className="text-sm px-2 py-5 w-full rounded  text-white outline-none bg-white-100 border border-gray-400 mb-4"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-gray-400 text-sm mb-0.5">Task Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            placeholder="Enter Task Description"
            className="w-full h-48 text-sm px-4 py-2 rounded text-white outline-none bg-transparent border border-gray-400"
          />
          <button className="bg-blue-600 px-5 py-3 rounded text-sm mt-5 w-full active:scale-99">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
