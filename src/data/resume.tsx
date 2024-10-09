import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kushagra Parasramka",
  initials: "KP",
  url: "https://kushagra.io",
  location: "INDIA",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Software Engineer. I love building things and helping people. Very active on LinkedIn.",
  summary:
    "As a software developer with a strong foundation in the MERN stack, I excel in building full-stack web applications using MongoDB, Express.js, React, and Node.js. My expertise extends to machine learning, where I leverage data processing techniques to develop intelligent systems and applications.",
  avatarUrl: "/me.png",
  skills: [
    "React",
  "Redux",
  "Next.js",
  "Typescript",
  "Node.js",
  "Python",
  "MongoDB",
  "SQL",
  "Machine Learning",
  "Scikit-Learn",
  "Tensorflow",
  "Postman",
  "AWS",
  "Azure",
  "Docker",
  "Git/Github",
  "Java",
  "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "parasramka.kushagra123@gmail.com",
    tel: "+919140811361",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/KushagraParasramka",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kushagra13019/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kushagra_2003",
        icon: Icons.x,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://x.com/kushagra_2003",
        icon: NotebookIcon,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Phemesoft IBM",
      href: "https://www.phemesoft.com/companywebsite/",
      badges: [],
      location: "Remote",
      title: "Machine Learning Intern",
      logoUrl: "/phemesoft.png",
      start: "June 2024",
      end: "July 2024",
      description:
        "Engineered a personalized course recommendation system using collaborative filtering and text vectorization, improving user engagement by tailoring content based on historical data and preferences. Applied advanced machine learning techniques, including collaborative filtering and feature engineering, to enhance recommendation accuracy, ensuring optimal performance across diverse user datasets.",
    },
  ],
  education: [
    {
      school: "UPES",
      href: "https://www.upes.ac.in/",
      degree: "B.Tech (Hons.) CSE",
      logoUrl: "/upes.jpeg",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
        title: "Chat Web-application",
        href: "",
        dates: "August 2024 - Present",
        active: true,
        description:
          "Engineered a real-time chat application with secure authentication and encryption, enabling safe, encrypted communication.",
        technologies: [
          "React",
          "Tailwind",
          "Express",
          "MongoDB",
          "Mongoose",
          "JWT",
          "AES Encryption"
        ],
        links: [
          {
            type: "Source",
            href: "",
            icon: <Icons.github className="size-3" />,
          }
        ],
        image: "/chatapp.jpeg",
        video: "",
      },

      {
        title: "Speech-Based Classification System for Autism Spectrum Disorder Detection in Children",
        href: "",
        dates: "November 2023 - April 2024",
        active: true,
        description:
          "Developed a robust machine learning model for early autism detection, leveraging Random Forest, Naive Bayes, SVM, and ANN to achieve a 90% accuracy rate.",
        technologies: [
          "Python",
          "Streamlit",
          "Random Forest",
          "Naive Bayes",
          "SVM",
          "ANN",
          "MFCC feature extraction"
        ],
        links: [
          {
            type: "Source",
            href: "",
            icon: <Icons.github className="size-3" />,
          }
        ],
        image: "/autism.png",
        video: "",
      },

      {
        title: "Uniclean - Campus Sanitation Management",
        href: "",
        dates: "August 2023 - November 2023",
        active: true,
        description:
          "Designed an automated task assignment tool in C++, integrating queue data structures and sorting algorithms to streamline scheduling for campus sanitation staff.",
        technologies: [
          "C++",
          "SQL",
          "Queue Data Structures",
          "Sorting Algorithms"
        ],
        links: [
          {
            type: "Source",
            href: "",
            icon: <Icons.github className="size-3" />,
          }
        ],
        image: "/uniclean.jpeg",
        video: "",
      },
  ],
  hackathons: [ ],
} as const;
