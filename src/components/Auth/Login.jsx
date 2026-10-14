import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center px-4 bg-black text-white">
      <h1 className="text-4xl font-bold">
        <span className="text-white">Task</span>{" "}
        <span className="text-yellow-400">Manager</span>
      </h1>
      <p className="text-sm text-gray-400 mt-2">Sign in to view your tasks.</p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 w-full max-w-md bg-[#1c1c1c] rounded-xl p-8 flex flex-col"
      >
        <label className="text-sm font-semibold">Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
          className="mt-2 mb-6 bg-transparent border border-gray-500 focus:border-white outline-none rounded px-4 py-3 text-sm"
        />

        <label className="text-sm font-semibold">Password</label>
        <div className="relative mt-2">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type={showPassword ? "text" : "password"}
            className="w-full bg-transparent border border-gray-500 focus:border-white outline-none rounded px-4 py-3 pr-16 text-sm"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button
          type="submit"
          className="mt-8 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-3 rounded active:scale-95 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
