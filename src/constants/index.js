import {
  carrent, ezwifi, fast, funavry, jobit, quest, tripguide
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  

  
  const experiences = [
    {
      title: "Junior Software Engineer",
      company_name: "EzWifi",
      icon: ezwifi,
      iconBg: "#383E56",
      date: "March 2023 - Present",
      points: [
        "Implementing Redis caching to optimize dashboard load times and improve overall system performance",
        "Developing and maintaining NodeJS backend codebase for EzWifi's ad-based free hotspot provider platform",
        "Collaborating with the design team to develop and improve the user interface using VueJS and TailwindCSS",
        "Creating and managing API endpoints for various features of the platform",
        "Researching and implementing new technologies to improve system efficiency and user experience.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Quest Lab",
      icon: quest,
      iconBg: "#E6DEDD",
      date: "Jul 2022 - Present",
      points: [
        "Collaborated with a team members to create a real-time video conferencing app that translates sign language into speech using React, Flask, and Tensorflow",
        "Designed and developed features for the web application, including real-time chat, meeting controls, and ASL translation",
        "Conducted unit and integration testing to ensure the stability and scalability of the application",
        "Worked with both NoSQL databases, i.e. MongoDB, to store and manage application data",
        "Implemented authentication and authorization features to ensure secure access to the application",
      ],
    },
    {
      title: "Teaching Assistant",
      company_name: "FAST NUCES",
      icon: fast,
      iconBg: "#383E56",
      date: "Aug 2022 - Jan 2023",
      points: [
        "Teaching assistant for operating systems course",
        "Assisted students in gaining a better understanding of the fundamental concepts",
        "Provided one-on-one guidance to students, assisting them with assignments and projects",
        "Graded assignments and projects, providing feedback to students to help them improve their understanding of the subject",
      ],
    },
    {
      title: "Backend Developer Intern",
      company_name: "Funavry Technologies",
      icon: funavry,
      iconBg: "#E6DEDD",
      date: "Jul 2021 - Aug 2021",
      points: [
        "Designing and implementing server-side logic for web applications",
        "Deploying server-side code to production environments",
        "Creating robust application programming interfaces (APIs)",
        "Working with both SQL and NoSQL databases, including MongoDB and MySQL",
        "Learning about best practices for Authorization and Authentication in web applications",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { experiences, projects };

