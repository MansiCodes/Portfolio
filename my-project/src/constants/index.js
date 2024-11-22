import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import post1 from "../assets/Post/post-1.png";
import post2 from "../assets/Post/post-2.jpeg";
import post3 from "../assets/Post/post-3.jpeg";
import post4 from "../assets/Post/post-4.jpeg";
import post5 from "../assets/Post/post-5.jpeg";
import post6 from "../assets/Post/post-6.jpeg";

export const Photo_CONTENT = `Proactive Full-Stack Web Developer with practical experience gained during an internship. 
Skilled in building user-friendly applications and optimizing system performance. Eager to leverage my skills in web development to 
create impactful solutions.`;


 export const ABOUT_TEXT = `I am a motivated and eager full stack developer, recently graduated with a strong foundation in web development. 
I gained practical experience in developing and working with web applications using technologies such as 
 React, Next.js, Node.js, MySQL, PostgreSQL,MongoDB, TypeScript. My journey in web development began with a deep curiosity about how things work, 
 and it has grown into a career where I am excited to learn, adapt, and tackle new challenges. I thrive in collaborative environments and 
 enjoy solving problems to deliver high-quality solutions. Outside of coding, I am passionate about staying active, 
 exploring emerging technologies, and contributing to open-source projects.`;


export const EXPERIENCES = [
  {
    year: "January 2022 - February 2022",
    role: "Web Developer Intern",
    company: "Tech Innovators Hub",
    description: `Contributed to the creation of a dynamic inventory management system for a small e-commerce startup, improving stock tracking efficiency by 25% and streamlining order processing.
    Collaborated with a team to enhance the system's UI, boosting user engagement by 15%.`,
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "CSS", "API"],
  },
  
  
];

export const PROJECTS = [

  {
    title: "Portfolio Website",
    image: project1,
    description:"A personal portfolio website showcasing projects, skills, experience and contact information.",
    technologies:["React", "Tailwind CSS", "Aceternity UI", "JavaScript","CSS","Framer Motion"],
    category: "Full Stack",  
    gitUrl: "https://your-Github-URL", 
    previewUrl: "https://your-live-site.com", 
  },

  {
    title: "Bookstore",
    description: "An e-commerce platform for books where you can see the variety of books",
    image: project2,
    technologies: ["HTML", "CSS", "Javascript", "Reactjs"],
    category: "Cone",   
    gitUrl: "https://your-Github-URL", 
    previewUrl: "https://your-live-site.com", 
  },

  {
    title: "Medium-Blog",
    description: "A blog where people share their stories, experiences, etc. Others can connect with that person.",
    image: project3,
    technologies: [
      "React.js","Tailwind CSS","Vite","Hono (TypeScript)","PostgreSQL (with pooling via Prisma)","Aiven.io API","TypeScript","Framer Motion"
    ],

    category: "Full Stack",   
    gitUrl: "https://your-Github-URL", 
    previewUrl: "https://your-live-site.com",  
  },

  {
    title: "News System",
    description: "A news website where people can see their choice of news",
    image: project4,
    technologies: ["HTML", "CSS", "Javascript", "Reactjs","PostgreSQL"],
    category: "Clone",   
    gitUrl: "https://your-Github-URL", 
    previewUrl: "https://your-live-site.com", 
  },
  
  {
    title: "Paytm",
    description: "An e-commerce platform for books",
    image: project5,
    technologies: ["HTML", "CSS", "Javascript", "Reactjs","Expressjs"],
    category: "Full Stack",   
    gitUrl: "https://your-Github-URL", 
    previewUrl: "https://your-live-site.com",  
  },

];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Engineering",
    university: "Your College Name .",
    graduation: "Graduation: Year",
  },
  {
    degree: "Intermediate",
    school: "School.",
    year: "Year | Percentage:",
  },
  {
    degree: "High School",
    school: " School.",
    year: "2018 | Percentage: ",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Fundamentals of Artificial Intelligence and Data Science",
    issuedBy: "Name",
    year: "2023",
  },
  {
    title: "Python for Beginners",
    issuedBy: "Organisation name",
    year: "2021",
  },
  {
    title: "Programming Beginner to Advanced",
    issuedBy: "organisation name",
    year: "2021",
  },
];

export const POST = [
  {
    id: 1,
    image: post1,
  },
  {
    id: 2,
    image: post2,
  },
  {
    id: 3,
    image: post3,
  },
  {
    id: 4,
    image: post4,
    title: "Cohort2",
    description: "I'm diving into Full-Stack Development with Cohort2 by Harkirat Singh! 🌟 If you're interested in learning from industry experts, check out the resources below.👇",
    follow: {
      twitter: " https://x.com/kirat_tw", 
      linkedin: "https://www.linkedin.com/in/kirat-li/",
      Cohort:"https://harkirat.classx.co.in"
    },
  },
  
  {
    id: 5,
    image: post5,
    title: "Learning DSA By Striver",
    description: "I'm currently learning Data Structures & Algorithms with Striver's comprehensive DSA Sheets! 📚 These resources (A2Z DSA Sheets & SDE DSA Sheets) are helping me build a strong foundation. If you want to get started too, check out the links below.👇",
    hashtags: ["dsa", "striver_79"],
    follow: {
      course: "https://takeuforward.org/",
      linkdln: "https://www.linkedin.com/in/rajstriver/",
      x: "https://x.com/striver_79"
    }
  }
  ,
  
  {
    id: 6,
    image: post6,
    title: "Udemy",
    description: "I've learned React and JavaScript through top-rated Udemy courses! 💻 If you're looking to dive into these technologies, check out the course link below.👇",
    follow: {
      course: "https://www.udemy.com/"
    }
  }  
  
];

export const contactInfo = {
  phoneNumber: '+91234567989',
  email: 'random@gmail.com',
  github: 'https://Your-Github-Url',
  linkedin: 'https://www.Your-Linkedln-Url/',
  twitter: 'https://Your-twitter-Url',
};
