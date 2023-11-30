import {
  carrent, ezwifi, fast, funavry, jobit, quest, tripguide
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Skills",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  

  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "EzWifi",
      icon: ezwifi,
      iconBg: "#383E56",
      date: "March 2023 - Present",
      points: [
        "Developed a VueJS dashboard to effectively manage and analyze customer statistics, providing valuable insights for optimizing business strategies.",
        "Developing and maintaining NodeJS backend codebase for EzWifi's ad-based free hotspot provider platform",
        "Collaborated on building a Flutter app that enables customers to connect to free hotspots and earn money through ad displays, enhancing user engagement and revenue generation",
        "Currently involved in the migration process from NodeJS to NestJS, leveraging the power of NestJS's modular and scalable architecture for improved performance and maintainability",
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
      title: "Project 1",
      description: "This is a description of the project",
      image: "https://mhmz.dev/images/projects/quran.png",
      links: [
        { name: "Website", url: "https://project-website.com" },
        { name: "Github", url: "https://github.com/project" }
      ]
    },
    {
      title: "Project 1",
      description: "This is a description of the project",
      image: "https://mhmz.dev/images/projects/quran.png",
      links: [
        { name: "Website", url: "https://project-website.com" },
        { name: "Github", url: "https://github.com/project" }
      ]
    },
  ];
  
  export { experiences, projects };

