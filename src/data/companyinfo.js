import GoogleLogo from "../assets/images/google.png";
import GithubLogo from "../assets/images/github.png";

const companyinfo = [
  {
    id: 1,
    logo: GoogleLogo,
    name: "Google",
    founded: "1998",
    employees: "170,000+",
    headquarters: "Mountain View, California, USA",
    industry: "Technology",
    companyType: "Enterprise",
    isHiring: true,
    openPositions: 20,
    jobCategories: ["Engineering", "Marketing", "AI Research"],
    averageSalary: "$100,000 - $150,000",
    rating: 4.7,
    culture: ["Innovative", "Inclusive", "Flexible Work Environment"],
    benefits: [
      "Remote Work",
      "Health Insurance",
      "Gym Membership",
      "Stock Options",
    ],
    achievements: [
      "Best Place to Work 2023",
      "Top 100 Innovative Companies 2022",
    ],
    techStack: ["React", "Node.js", "Python", "BigQuery"],
    locations: ["San Francisco, USA", "Berlin, Germany", "Remote"],
    website: "https://www.google.com",
    socialLinks: {
      linkedin: "https://linkedin.com/company/google",
      twitter: "https://twitter.com/google",
    },
    about:
      "Google is a multinational technology company specializing in internet-related services and products, including online advertising, search engines, cloud computing, software, and hardware.",
    mission:
      "To organize the world's information and make it universally accessible and useful.",
    applicationProcess: [
      "1. Online Application",
      "2. Technical Interview",
      "3. HR Interview",
      "4. Offer",
    ],
    testimonials: [
      {
        employee: "Jane Doe",
        position: "Software Engineer",
        quote: "An innovative and exciting place to work!",
      },
    ],
  },
  {
    id: 2,
    logo: GoogleLogo,
    name: "Microsoft",
    founded: "1975",
    employees: "220,000+",
    headquarters: "Redmond, Washington, USA",
    industry: "Technology",
    companyType: "Enterprise",
    isHiring: true,
    openPositions: 15,
    jobCategories: ["Cloud Solutions", "AI Development", "Cybersecurity"],
    averageSalary: "$90,000 - $140,000",
    rating: 4.6,
    culture: ["Diverse", "Collaborative", "Future-Oriented"],
    benefits: [
      "Hybrid Work",
      "Parental Leave",
      "Retirement Plans",
      "Wellness Programs",
    ],
    achievements: ["Fortune 500 Company", "Leader in Cloud Solutions"],
    techStack: ["C#", "Azure", "Python", "Power BI"],
    locations: ["Redmond, USA", "Dublin, Ireland", "Remote"],
    website: "https://www.microsoft.com",
    socialLinks: {
      linkedin: "https://linkedin.com/company/microsoft",
      twitter: "https://twitter.com/microsoft",
    },
    about:
      "Microsoft is a global leader in software, services, devices, and solutions that help people and businesses realize their full potential.",
    mission:
      "To empower every person and every organization on the planet to achieve more.",
    applicationProcess:
      "1. Application > 2. Phone Screening > 3. Technical Assessment > 4. Offer",
    testimonials: [
      {
        employee: "John Smith",
        position: "Cloud Engineer",
        quote:
          "Microsoft is a great place to grow and work on cutting-edge technologies.",
      },
    ],
  },
  {
    id: 3,
    logo: GithubLogo,
    name: "Amazon",
    founded: "1994",
    employees: "1,540,000+",
    headquarters: "Seattle, Washington, USA",
    industry: "E-commerce, Cloud Computing, AI",
    companyType: "Enterprise",
    isHiring: true,
    openPositions: 50,
    jobCategories: ["Logistics", "Software Development", "AWS Solutions"],
    averageSalary: "$85,000 - $130,000",
    rating: 4.5,
    culture: ["Customer-Centric", "Fast-Paced", "Inventive"],
    benefits: ["Health Insurance", "Stock Options", "Employee Discounts"],
    achievements: ["Fastest Growing Company", "Leader in E-Commerce"],
    techStack: ["AWS", "Java", "Kubernetes", "React"],
    locations: ["Seattle, USA", "London, UK", "Global"],
    website: "https://www.amazon.com",
    socialLinks: {
      linkedin: "https://linkedin.com/company/amazon",
      twitter: "https://twitter.com/amazon",
    },
    about:
      "Amazon is a multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    mission:
      "To be Earth's most customer-centric company, where customers can find and discover anything they might want to buy online.",
    applicationProcess:
      "1. Online Application > 2. Interview Rounds > 3. Onboarding",
    testimonials: [
      {
        employee: "Sara Lee",
        position: "Product Manager",
        quote: "Amazon pushes boundaries and delivers impact every day.",
      },
    ],
  },
  {
    id: 4,
    logo: GoogleLogo,
    name: "Apple",
    founded: "1976",
    employees: "154,000+",
    headquarters: "Cupertino, California, USA",
    industry: "Technology, Consumer Electronics",
    companyType: "Enterprise",
    isHiring: false,
    openPositions: 0,
    jobCategories: ["Hardware Engineering", "iOS Development"],
    averageSalary: "$110,000 - $150,000",
    rating: 4.8,
    culture: ["Innovative", "Quality-Driven", "Design-Focused"],
    benefits: ["Product Discounts", "Health Programs", "Stock Grants"],
    achievements: ["Most Valuable Company", "Leader in Consumer Electronics"],
    techStack: ["Swift", "Objective-C", "Metal", "Machine Learning"],
    locations: ["Cupertino, USA", "Singapore", "Remote"],
    website: "https://www.apple.com",
    socialLinks: {
      linkedin: "https://linkedin.com/company/apple",
      twitter: "https://twitter.com/apple",
    },
    about:
      "Apple designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories, as well as a range of related services.",
    mission:
      "To bring the best user experience to customers through innovative hardware and software.",
    applicationProcess:
      "1. Application Submission > 2. Portfolio Review > 3. Interviews",
    testimonials: [
      {
        employee: "Lisa Wong",
        position: "UX Designer",
        quote: "Apple is all about creating products that change the world.",
      },
    ],
  },
  {
    id: 5,
    logo: GoogleLogo,
    name: "Tesla",
    founded: "2003",
    employees: "127,000+",
    headquarters: "Austin, Texas, USA",
    industry: "Automotive, Energy, Technology",
    companyType: "Enterprise",
    isHiring: true,
    openPositions: 25,
    jobCategories: [
      "Mechanical Engineering",
      "AI & Robotics",
      "Battery Research",
    ],
    averageSalary: "$95,000 - $140,000",
    rating: 4.6,
    culture: ["Innovative", "Mission-Driven", "Fast-Paced"],
    benefits: ["Stock Options", "Innovation Incentives", "Flexible Hours"],
    achievements: ["Top EV Manufacturer", "Leader in Battery Tech"],
    techStack: ["Python", "TensorFlow", "Autopilot AI", "SolidWorks"],
    locations: ["Austin, USA", "Shanghai, China", "Berlin, Germany"],
    website: "https://www.tesla.com",
    socialLinks: {
      linkedin: "https://linkedin.com/company/tesla",
      twitter: "https://twitter.com/tesla",
    },
    about:
      "Tesla is an American electric vehicle and clean energy company that designs and manufactures electric cars, battery energy storage systems, and solar energy products.",
    mission: "To accelerate the world's transition to sustainable energy.",
    applicationProcess:
      "1. Online Application > 2. Technical Test > 3. Interviews",
    testimonials: [
      {
        employee: "Alex Johnson",
        position: "Autopilot Engineer",
        quote: "At Tesla, innovation drives every aspect of work.",
      },
    ],
  },
];

export default companyinfo;
