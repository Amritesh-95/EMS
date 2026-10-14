# EMS - Employee Management System

A role-based task management app built with React. Admins create and assign tasks to employees, and employees track and update their progress in real time.

**Live Demo:** (https://ems-shadow.vercel.app)

## Features

**Admin**
- Create tasks with title, description, deadline, category and assignee
- View every employee's task counts (New, Active, Completed, Failed) in one table
- Dashboard updates instantly after a task is created

**Employee**
- Personal dashboard with task counters
- Accept, complete or fail assigned tasks
- Retry failed tasks and reopen completed ones (blocked after the deadline)

**General**
- Login with role-based access (Admin / Employee)
- Persistent data using `localStorage`
- Responsive, dark-themed UI

## Tech Stack

- React (Vite)
- Tailwind CSS
- Context API for global state
- localStorage for data persistence

## Getting Started

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Demo Credentials

Sample profiles are seeded into `localStorage` on first load.

### Admin

| Email | Password |
| --- | --- |
| admin@company.com | 123 |

### Employees

| Name | Email | Password |
| --- | --- | --- |
| Alex | alex.smith@company.com | 123 |
| Jordan | jordan.lee@company.com | 123 |
| Casey | casey.jones@company.com | 123 |
| Taylor | taylor.brown@company.com | 123 |
| Morgan | morgan.davis@company.com | 123 |

> These are demo accounts for testing only.

## Project Structure

```
src/
├── components/     # Dashboards, CreateTask, AllTask, TaskList, etc.
├── context/        # AuthProvider (global state + task actions)
├── utils/          # localStorage helpers and seed data
├── App.jsx
└── main.jsx
```

## How It Works

Global state lives in `AuthProvider`. Actions such as `addTask` and `updateTaskStatus` update both React state and `localStorage`, so every component re-renders immediately without a page reload.

## Resetting Data

To restore the demo data, run this in the browser console and refresh:

```js
localStorage.clear();
```

## Author

**Amritesh Kumar**
[GitHub](https://github.com/Amritesh-95)
