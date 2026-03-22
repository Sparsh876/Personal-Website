// src/data/resume.ts
export const RESUME_DATA = {
  name: "Alex Dev",
  initials: "AD",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/San+Francisco",
  about:
    "Full Stack Engineer focused on building accessible, pixel-perfect user interfaces with modern tools.",
  summary:
    "Incoming Software Engineer with a passion for React ecosystems and system design. Experienced in building scalable web apps and optimizing frontend performance.",
  avatarUrl: "https://avatars.githubusercontent.com/u/123456?v=4", // Use your GitHub avatar
  personalWebsiteUrl: "https://alexdev.com",
  contact: {
    email: "alex@example.com",
    tel: "+123456789",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/alexdev",
        icon: "Github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alexdev/",
        icon: "Linkedin",
      },
    ],
  },
  education: [
    {
      school: "University of Tech",
      degree: "Bachelor's Degree in Computer Science",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Tech Corp",
      link: "https://techcorp.com",
      badges: ["Internship"],
      title: "Software Engineer Intern",
      start: "2023",
      end: "2023",
      description:
        "Implemented a new feature for the dashboard using Next.js and TypeScript. Improved load times by 20%.",
    },
    {
      company: "StartUp Inc",
      link: "https://startup.com",
      badges: [],
      title: "Frontend Developer",
      start: "2021",
      end: "2022",
      description:
        "Built the marketing site using Astro. Collaborated with designers to implement a new design system.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "AWS",
  ],
} as const;