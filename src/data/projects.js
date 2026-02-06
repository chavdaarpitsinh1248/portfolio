const projects = [
  {
    title: "Student Performance Predictor",
    description:
      "End-to-end machine learning project that predicts student exam scores using custom-built linear and multivariate regression models without high-level ML libraries.",
    tech: ["Python", "NumPy", "Pandas", "Matplotlib"],
    github: "https://github.com/chavdaarpitsinh1248/student-performance-predictor",
    demo: "",
  },
  {
    title: "House Price Predictor",
    description:
      "Machine learning model trained on real-world housing data to predict prices based on multiple features, including full data preprocessing and evaluation.",
    tech: ["Python", "NumPy", "Pandas"],
    github: "https://github.com/chavdaarpitsinh1248/house-price-prediction",
    demo: "",
  },
  {
    title: "ReadForge",
    description:
      "A Django-based web application for managing and exploring reading content with authentication, CRUD operations, and clean backend architecture.",
    tech: ["Django", "Python", "React"],
    github: "https://github.com/chavdaarpitsinh1248/readforge-backend",
    demo: "",
  },
  {
    title: "AI-First CRM – HCP Interaction Module",
    type: "ai-full-stack",
    description:
        "An AI-first yet human-controlled CRM system for logging and managing healthcare professional (HCP) interactions, designed to reflect real-world enterprise CRM workflows.",
    highlights: [
        "Designed a human-in-the-loop AI workflow where structured form input remains authoritative",
        "AI-assisted interaction logging via conversational input without silent overwrites",
        "Partial AI-based corrections using explicit human confirmation",
        "Stateful AI agent orchestration using LangGraph (not single-shot LLM calls)",
        "Crash-safe and explainable AI behavior with defensive parsing and normalization",
        "Clear separation of responsibility between user input, backend logic, and AI assistance"
    ],
    tech: [
        "Python",
        "FastAPI",
        "React",
        "Redux Toolkit",
        "LangGraph",
        "LangChain",
        "MySQL",
        "SQLAlchemy"
    ],
    github: "https://github.com/chavdaarpitsinh1248/ai-first-crm-hcp",
    demo: ""
    },
  {
  title: "BudgetIQ",
  type: "full-stack",
  description:
    "A full-stack personal finance management application that helps users track income and expenses, analyze spending patterns, and stay within monthly budgets.",
  highlights: [
    "Income and expense tracking with category-based organization",
    "Monthly summaries and spending analysis",
    "Budget limits with alerting logic when thresholds are exceeded",
    "Interactive charts for financial insights",
    "Frontend state management with React",
    "Backend business logic implemented in Django"
  ],
  tech: ["Python", "Django", "React", "SQLite"],
  github: "https://github.com/chavdaarpitsinh1248/budgetIQ---Django",
  demo: ""
},
{
  title: "URL Shortener",
  type: "backend",
  description:
    "A production-ready URL Shortener service similar to bit.ly that converts long URLs into short, shareable links and redirects users while tracking click analytics.",
  highlights: [
    "Short URL generation using Base62 encoding of database IDs",
    "Collision-free and deterministic short code generation",
    "HTTP redirection with click count tracking",
    "Input URL validation and duplicate URL handling",
    "REST API support alongside a simple HTML frontend",
    "Clean backend architecture with refactored service and data layers",
    "Deployed in production using Gunicorn"
  ],
  tech: [
    "Python",
    "Flask",
    "SQLite",
    "Gunicorn",
    "HTML",
    "CSS"
  ],
  github: "https://github.com/chavdaarpitsinh1248/url-shortener",
  demo: "https://url-shortener-0i16.onrender.com/"
},

];

export default projects;
