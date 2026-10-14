import React, { useState } from "react";

const Header = ({ data, handleLogout }) => {
  const username = data ? data.firstName : "Admin";

  return (
    <div className="bg-gray-800 p-4 flex justify-between items-end rounded-xl">
      <h1 className="text-white text-2xl font-bold">
        Hello <br /> <span className="text-yellow-400">{username}</span>{" "}
        🐺
      </h1>
      <button
        onClick={handleLogout}
        className="bg-blue-500 text-white px-5 py-3 rounded hover:bg-blue-600 transition duration-300 active:scale-85"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
