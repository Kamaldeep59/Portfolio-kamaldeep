import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Kamaldeep Sokhal",
    stack: ["Front-End Developer","Software Developer", "Java Developer"],
    bio: "Enthusiastic and detail-oriented frontend developer with 6 months of internship experience in React.js, focused on building responsive and user-centric web applications. Seeking an entry-level role to apply my skills in JavaScript, React, and modern UI design to create impactful digital solutions."
}



const ProjectInfo = [

    {
        title: "Electronic Store",
        desc: "Electronic Store is a modern, fully responsive e-commerce platform built using React, TailwindCSS, and HeadlessUI, offering a seamless shopping experience across all Electronic devices. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. Electronic Store combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
        image: "store.png",
        live: true,
        technologies: ["React", "Tailwind", "Redux", "SpringBoot","MYSQL"],
        link: "",
        github: ""
    },
    {
        title: "Smart Contact Manager(SCM)",
        desc: "Developed a responsive React-based UI for contact management.Implemented login/signup forms, contact dashboard, and CRUD interfaces.Used Axios to connect with backend APIs and manage user authentication flow.",
        image: "scm.png",
        live: false,
        technologies: ["React", "Springboot", "MYSQL", "Tailwind"],
        link: "",
        github: ""
    },
    {
        title: "E-Comm",
        desc: "E-Comm is a full-stack web application that replicates the core features of ecom,Built the user interface for an electronic products store with filtering and sorting features.Integrated product listings, categories, and cart UI using functional components.Implemented routing, dynamic UI updates, and state management using hooks.",
        image: "Ekart.png",
        live: false,
        technologies: ["React", "Spring?Boot", "Tailwind",  "MYSQL",],
        link: "",
        github: ""
     },
    // {
    //     title: "Blog-App.",
    //     desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
    //     image: "Travel.png",
    //     live: false,
    //     technologies: ["React", "SpringBoot", "MYSQL", ],
    //     link: "",
    //     github: ""
    // },
    
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS","JavaScript", "React JS", "Tailwind CSS", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Springboot", "Node JS", "Express JS", "MySQL", "MongoDB",]
    },
    {
        title: "Languages",
        skills: ["Java", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code","IntelliJ IDEA", "Postman", "Spring Tool Suite"]
    }
]
const socialLinks = [
    { link: "https://github.com/Kamaldeep59", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/kamaldeep-sokhal-a2a278190/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/kamal__059", icon: IconBrandInstagram }, 
    { link: "https://www.youtube.com/@kamalsokhal9329", icon: IconBrandYoutube },
    { link: "https://leetcode.com/u/Kamal_deep_sokhal/", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Software Programmer",
        company: "Natural Group(NSCSPL)",
        date: "July 2023 - December 2023",
        desc: "I led software development with Spring Boot, React, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["React JS","SpringBoot","Hibernate","JPA", "MYSQL","QA", "Microservices"]
    }
    // ,
    // {
    //     role: "System Engineer",
    //     company: "Infosys",
    //     date: "Nov 2022 - Sep 2023",
    //     desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
    //     skills: ["Java", "MySQL", "Hibernate", "Selenium", "Jenkins", "JIRA", "Automation Testing"]
    // }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "testinglibrary",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "IntelliJ IDEA"
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };