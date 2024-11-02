import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    cii,
    axisbank,
    lrit,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
  
  const services = [
    {
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "DSA",
      icon: backend,
    },
    {
      title: "Competitve Programming",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "typescript",
      icon: typescript,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "React JS",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Data Analyst Intern",
      company_name: "Axis Bank",
      icon: axisbank,
      iconBg: "#E6DEDD",
      date: "May 2024 - July 2024",
      points: [
        "Produced a robust automated risk report that enhanced real-time risk assessment using SQL, which led to reduction in financial risks, eventually reducing losses.",
        "Analyzed databases handling data of over 50 million users, identifying key trends and insights to support strategic decisions.",
        "Created business snapshots for over 20 loan programs, that analyzes 25% of the company’s total risks. ",
        //"Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Development Intern",
      company_name: "LeopardRuns Innovation and Technology",
      icon: lrit,
      iconBg: "#0e2d4a",
      date: "June 2024 - August 2022",
      points: [
        "Created 2 web apps using Node.js, optimized performance and reduced script execution time by 25%.",
        "Designed and implemented RESTful APIs that facilitated smooth data exchange between frontend and backend, reducing latency by 20%.",
        "Collaborated and worked with cross-functional teams, improving the quality of software solutions delivered.",
        "Participated in multiple code reviews.",
      ],
    },
    {
      title: "General Manager",
      company_name: "Centre for Innovation and Incubation",
      icon: cii,
      iconBg: "#E6DEDD",
      date: "August 2023 - September 2024",
      points: [
        "Startup Incubation: Mentored and supported 13 startups in early revenue stage. Notable startups received support from IIM-B, WE-HUB, Accel Ventures, Antler and T-HUB.",
        "Boosted CII NIT-W's national ranking by 1.5 points by improving the performance of the incubator, outreach by 2x, and research-to-product conversions by 4x within a year.",
        "Spearheaded operations of a 50-member team, orchestrating 30+ events and workshops to promote research, design thinking, and innovation, impacting 3000+ students.",
        "Established 10+ strategic relationships with E-Cells, Salesforce, Mahindra, Bank Of Baroda, and T-HUB.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      list: [
        {c : "Node.js"},{c : "Express.js"},{c : "Three.js"},{c : "React"},{c : "PHP"},
      ],
      head: "FrameWorks",
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      list: [
        {c : "C++"},{c : "Python"},{c : "JavaScript"},{c : "R"},{c : "TypeScript"}
      ],
      head: "Languages",
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      list: [
        {c : "GitHub"},{c : "CI/CD"},{c : "Postman"},{c : "SDLC"},{c : "JIRA"},
      ],
      head: "DevOps",
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      list: [
        {c : "Mongo DB"},{c : "My SQL"},{c : "Oracle SQL Developer"},
      ],
      head: "Databases",
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "E-Commerce API",
      description:
        "E-Commerce API that allows sellers to create and list products and allows consumers to browse, search and order products listed by the sellers.",
      tags: [
        {
          name: "node.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express.js",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/devavratapatel/E-Commerce-API",
    },
    {
      name: "Portfolio Website",
      description:
        "3D interactive website visualizing my personal portfolio. Helping clients and recruiters bteer understand my professional journey.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind-css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };