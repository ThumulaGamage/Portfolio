export interface Project {
  id: number;
  title: string;
  role: string;
  status: string;
  statusColor: string;
  technologies: string[];
  description: string;
  features: string[];
  contributions: string[];
  categories: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "STRIVIO - Fitness Mobile App",
    role: "Developer (Group Project)",
    status: "Completed",
    statusColor: "bg-green-500/20 text-green-400",
    technologies: ["Flutter", "Firebase", "Gemini AI", "fl_chart"],
    description: "Comprehensive fitness tracking app with body metrics monitoring, data visualization, and AI-powered recommendations.",
    features: [
      "User progress tracking with real-time metrics",
      "Interactive data visualization dashboards",
      "Calorie balance tracking and analytics",
      "AI-powered meal planning",
    ],
    contributions: [
      "Built complete user progress tracking module",
      "Developed interactive charts with fl_chart",
      "Implemented Firebase real-time integration",
      "Created body composition analysis system",
    ],
    categories: ["Mobile"],
  },
  {
    id: 2,
    title: "CarMinder - Vehicle Maintenance App",
    role: "Team Leader & Project Manager",
    status: "Completed",
    statusColor: "bg-green-500/20 text-green-400",
    technologies: ["React Native", "Firebase", "Cloud Functions", "FCM"],
    description: "Smart vehicle maintenance management app with automated reminders and service tracking.",
    features: [
      "Multi-vehicle profile management",
      "Automated maintenance reminders",
      "Service history logging",
      "Push notifications",
    ],
    contributions: [
      "Led team of 3 developers",
      "Architected system design",
      "Implemented authentication system",
      "Managed project timeline and code reviews",
    ],
    categories: ["Mobile", "Team"],
  },
  {
    id: 3,
    title: "Smart Water Bottle - IoT System",
    role: "Team Leader & System Architect",
    status: "Completed",
    statusColor: "bg-green-500/20 text-green-400",
    technologies: ["React Native", "ESP32", "Firebase", "BLE", "Sensors"],
    description: "IoT hydration monitoring system combining hardware sensors with mobile app.",
    features: [
      "ESP32-based sensor system",
      "BLE wireless communication",
      "Real-time mobile app sync",
      "Customizable hydration goals",
      "Support both healthy and people with deseases like kidney failure",
      "Hydration tracking and reminders",
    ],
    contributions: [
      "Designed complete IoT architecture",
      "Built hardware with ESP32 and sensors",
      "Implemented BLE protocol",
      "Developed Firebase backend",
    ],
    categories: ["IoT", "Mobile", "Team"],
  },
  {
    id: 4,
    title: "University Gym Booking System",
    role: "Full-Stack Developer (Individual)",
    status: "Completed",
    statusColor: "bg-green-500/20 text-green-400",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    description: "Full-stack web app for managing university gym resources with QR-based attendance.",
    features: [
      "Real-time booking system",
      "Role-based access control",
      "QR code attendance verification",
      "Admin dashboard with analytics",
    ],
    contributions: [
      "Built complete MERN stack application",
      "Designed database schema",
      "Implemented conflict prevention logic",
      "Created responsive React frontend",
    ],
    categories: ["Web"],
  },
  {
    id: 5,
    title: "AboutSL - Tourism Discovery Platform",
    role: "Full-Stack Developer (Individual)",
    status: "Deployed & Live",
    statusColor: "bg-accent/20 text-accent",
    technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    description: "Complete tourism platform showcasing Sri Lanka's destinations, hotels, and restaurants.",
    features: [
      "Destination discovery with detailed information",
      "Hotel and restaurant directories",
      "Interactive maps and galleries",
      "Admin content management system",
    ],
    contributions: [
      "Designed MySQL database schema",
      "Built RESTful API with Express",
      "Created responsive React frontend",
      "Deployed to production on Viukon",
    ],
    liveUrl: "http://aboutsl.viukon.com/",
    categories: ["Web"],
  },
  {
    id: 6,
    title: "Student-Teacher Platform",
    role: "Full-Stack Developer (Individual)",
    status: "In Development",
    statusColor: "bg-yellow-500/20 text-yellow-400",
    technologies: ["MERN Stack", "TypeScript"],
    description: "Educational platform for student-teacher interaction and course management.",
    features: [
      "Course enrollment system",
      "Assignment submission",
      "Grading interface",
      "Real-time notifications",
    ],
    contributions: [
      "Building TypeScript backend API",
      "Designing modern React frontend",
      "Implementing authentication system",
    ],
    categories: ["Web"],
  },
];
