const employees = [
  {
    id: 1,
    firstName: "Alex",
    email: "alex.smith@company.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update User Authentication",
        taskDescription:
          "Implement JWT-based authentication for the new API endpoints.",
        taskDate: "2026-10-10",
        category: "Backend Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Schema Migration",
        taskDescription:
          "Migrate the existing PostgreSQL database to include the new user roles.",
        taskDate: "2026-10-01",
        category: "Database",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription:
          "Investigate and resolve the timeout error occurring on the login screen.",
        taskDate: "2026-10-06",
        category: "Bug Fix",
      },
    ],
  },
  {
    id: 2,
    firstName: "Jordan",
    email: "jordan.lee@company.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Home Page",
        taskDescription:
          "Create Figma mockups for the new marketing campaign landing page.",
        taskDate: "2026-10-12",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription:
          "Create Figma mockups for the new marketing campaign landing page.",
        taskDate: "2026-10-12",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Feedback Meeting",
        taskDescription:
          "Review the latest design iterations with the client and gather feedback.",
        taskDate: "2026-10-07",
        category: "Meeting",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Prototype Animation",
        taskDescription:
          "Build a framer motion prototype for the hero section.",
        taskDate: "2026-09-28",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Brand Guidelines",
        taskDescription:
          "Incorporate the new secondary color palette into the official brand docs.",
        taskDate: "2026-09-15",
        category: "Documentation",
      },
    ],
  },
  {
    id: 3,
    firstName: "Casey",
    email: "casey.jones@company.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Optimize React Renders",
        taskDescription:
          "Use useMemo and useCallback to prevent unnecessary re-renders on the dashboard.",
        taskDate: "2026-10-08",
        category: "Frontend Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Integrate Payment Gateway",
        taskDescription:
          "Connect the Stripe API to handle frontend checkout sessions.",
        taskDate: "2026-10-15",
        category: "Integration",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Responsive Navbar",
        taskDescription:
          "Ensure the navigation menu collapses correctly on mobile viewports.",
        taskDate: "2026-10-02",
        category: "Frontend Development",
      },
    ],
  },
  {
    id: 4,
    firstName: "Taylor",
    email: "taylor.brown@company.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription:
          "Achieve 80% code coverage for the newly created billing service.",
        taskDate: "2026-10-11",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy Staging Environment",
        taskDescription:
          "Push the latest release branch to the Vercel staging URL.",
        taskDate: "2026-10-05",
        category: "DevOps",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "E2E Testing Script",
        taskDescription:
          "Create Cypress scripts for the user registration flow.",
        taskDate: "2026-10-01",
        category: "Testing",
      },
    ],
  },
  {
    id: 5,
    firstName: "Morgan",
    email: "morgan.davis@company.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Draft Financial Report",
        taskDescription:
          "Compile the quarterly performance metrics into a presentation.",
        taskDate: "2026-10-14",
        category: "Management",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Draft Q3 Report",
        taskDescription:
          "Compile the quarterly performance metrics into a presentation.",
        taskDate: "2026-10-14",
        category: "Management",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Server Dependencies",
        taskDescription:
          "Update all Spring Boot dependencies to their latest stable versions.",
        taskDate: "2026-10-09",
        category: "Maintenance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Onboard New Developer",
        taskDescription:
          "Setup accounts and walk through the codebase with the new hire.",
        taskDate: "2026-09-20",
        category: "HR",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Security Audit",
        taskDescription:
          "Run automated vulnerability scans on the production server.",
        taskDate: "2026-09-25",
        category: "Security",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@company.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  // console.log('Employees from localStorage:', employees);
  // console.log('Admin from localStorage:', admin);
  return { employees, admin };
};
