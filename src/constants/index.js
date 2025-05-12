
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import serv from "../assets/company/serv.webp";
import dyna from "../assets/company/dyna.png";
import xcon from "../assets/company/xcon.png";


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
    title: "React Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Next.js Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Serv Tree Solutions",
    icon: serv,
    iconBg: "#383E56",
    date: "03/2023 - 06/2023",
    points: [
      "Created a fully functional E-commerce store from scratch.",
      "Utilized PHP to build and implement various features.",
      "Built a comprehensive buy-and-sell platform.",
    ],
  },
  {
    title: "Junior Web Developer",
    company_name: "Dynatunners",
    icon: dyna,
    iconBg: "#383E56",
    date: "07/2023 - 11/2023",
    points: [
      "Uploaded blogs on WordPress.",
      "Managed the attendance system of the company.",
      "Transitioned from PHP development to React.js development.",
      "Designed and developed interactive user interfaces using React.js.",
    ],
  },
  {
    title: "FrontEnd Developer",
    company_name: "XCon Technologies",
    icon: xcon,
    iconBg: "#383E56",
    date: "07/2024 - Present",
    points: [
      "Developed Xcon Technology's official website using Next.js, collaborating with a team to ensure a responsive and dynamic user experience.",
      "Built a project management tool using Next.js, aimed at enhancing task tracking and team collaboration.",
      "Working on a Weather website using Next.js, integrating real-time weather data APIs and implementing a modern UI for seamless user interaction.",
      "Actively bidding on Upwork, seeking Next.js frontend development projects to expand expertise and gain more freelance experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Shehroz proved me wrong.",
    name: "Xcon Technologies",
    designation: "Service Website",
    company: "Xcon Technologies",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Shehroz does.",
    name: "Sangwin Kim",
    designation: "Shift Calendar App",
    company: "Korea",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Shehroz optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Ryo",
    designation: "Social Media Tool",
    company: "Zen Solutions",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "XCon Technologies",
    description:
      "XCon Technologies is a leading digital solutions company offering a wide range of services including web development, app development, software solutions, digital marketing, UI/UX design, and IT consulting — all tailored to meet modern business needs.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://www.xcontechnologies.com/",
  },
  {
    name: "Shift Calendar App",
    description:
      "Developed a responsive web-based calendar application to manage employee shifts using Next.js.Use Tailwind CSS to ensure a clean, modern interface across all devices. Designed the calendar with day/week/month views for better shift visualization and planning",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
    
    ],
    image: gearXpert,
    source_code_link: "https://shift-calendar-indol.vercel.app/",
  },
  {
    name: "Weather App",
    description:
      "Developed using Next.js,Integrated real-time weather APIs,Built UI using Figma-to-Next.js conversion with Tailwind CSS & Material UI.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
     
    ],
    image: project3,
    source_code_link: "https://weather-website-ochre-nine.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
