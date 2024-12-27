import GoogleLogo from "../assets/images/google.png";
import GithubLogo from "../assets/images/github.png";

const joblist = [
  {
    id: 1,
    path: "job1",
    logo: GoogleLogo,
    companyName: "Google",
    position: "Junior Web Developer",
    jobType: "Intern",
    city: "Dearborn",
    country: "USA",
    workStyle: "Remote",
    datePosted: "1d",
    deadline: "30 April, 2024",
    salary: "$1200",
    about:
      "We are seeking skilled and motivated individuals with minimum 3-5 years of experience for multiple positions as Software Engineers and Developers. This is your opportunity to secure an evolutive career path with a SMART salary scheme, tailored to your relevant experience and aligned with the wider market.",
    responsibilities: [
      "Develop and maintain web applications using HTML, CSS, and JavaScript.",
      "Collaborate with the design team to implement user interfaces.",
      "Write clean, maintainable, and efficient code.",
      "Participate in code reviews and provide constructive feedback.",
      "Troubleshoot and debug issues in a timely manner.",
      "Stay up-to-date with the latest industry trends and technologies.",
    ],
    skills: [
      "Proficiency in HTML and CSS for building responsive web pages",
      "Experience with React for building dynamic user interfaces",
      "Knowledge of SQL for database management",
      "Familiarity with Laravel for backend development",
      "Experience with Tailwind CSS for styling",
      "Understanding of cloud technologies and services",
    ],
  },
  {
    id: 2,
    path: "job2",
    logo: GithubLogo,
    companyName: "Github",
    position: "Senior Backend Developer",
    jobType: "Full-time",
    city: "San Francisco",
    country: "USA",
    workStyle: "Hybrid",
    datePosted: "2d",
    deadline: "15 May, 2024",
    salary: "$5000",
    about:
      "We are looking for an experienced Senior Backend Developer to join our team. The ideal candidate will have a strong background in backend development and a passion for building scalable and efficient systems.",
    responsibilities: [
      "Design, develop, and maintain backend services and APIs.",
      "Collaborate with frontend developers to integrate user-facing elements with server-side logic.",
      "Optimize applications for maximum speed and scalability.",
      "Implement security and data protection measures.",
      "Write clean, maintainable, and efficient code.",
      "Participate in code reviews and provide constructive feedback.",
    ],
    skills: [
      "Strong proficiency in Node.js and Express.js",
      "Experience with database systems such as PostgreSQL and MongoDB",
      "Knowledge of RESTful APIs and GraphQL",
      "Familiarity with Docker and Kubernetes for containerization",
      "Understanding of CI/CD pipelines and tools like Jenkins",
      "Experience with cloud platforms such as AWS or Azure",
    ],
  },
  // Add more job entries as needed
];

export default joblist;
