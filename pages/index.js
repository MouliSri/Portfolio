import Head from "next/head";
import Image from "next/image";
import mouli1 from "../public/mouli1.png"
import html from "../public/html.png"
import css from "../public/css.png"
import js from "../public/js.png"
import node1 from "../public/node1.png"
import login from "../public/login.png"
import notes from "../public/notes.png"
import clothes from "../public/clothes.png"
import calendar from "../public/calendar.png"
import mysql1 from "../public/mysql1.png"
import dog from "../public/dog.png"
import mongodb1 from "../public/mongodb1.png"
import r from "../public/r.png"
import s from "../public/s.png"
import tailwind from "../public/tailwind.png"
import j from "../public/j.png"
import {BsFillMoonStarsFill}from "react-icons/bs";
import {AiFillGithub, AiFillLinkedin , AiFillTwitterCircle,AiOutlineMail,AiOutlinePhone} from "react-icons/ai"
import useColorMode from "../hooks/useColorMode";
import cartoon from "../public/webpage.png";
import blog from "../public/blog.png";
import college from "../public/college.png";
import management from "../public/management.png";
import gif from "../public/document.gif"
import school from "../public/school.png"
import rocket from "../public/rocket.gif"
import  Image2 from "../public/image2.jpg"
import { useState } from "react";
import {motion,AnimatePresence} from "framer-motion"
import { FiDownload } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";


const imageAnimate={
  offscreen:{x:-100, opacity:0},
  onscreen:{
  x:0,
  opacity:1,
  rotate:[0,10,0],
  transition: {type:"spring",
  bounce:0.8,
  duration:1}
}

}

const textAnimate={
  offscreen:{y:100, opacity:0},
  onscreen:{y:0,
  opacity:1,
  transition: {type:"spring",
  bounce:0.4,
  duration:1}
}
}

const items = [
  {
    id:1,
    name: "Old Portfolio Website",
    description:"",
    gitLink:"https://github.com/MouliSri/mysite",
    link: "https://moulisri.github.io/mysite/",
    imageUrl: cartoon,
    technologies: "Html,Css "
  },
  {
    id:2,
    name: "Dogs Website",
    description:["Front-End Development","Developed a responsive, multi-section website using HTML, Bootstrap, and CSS."
      ,"User Interface Design: Created an intuitive and visually appealing interface for an application.",
      "Integration of Libraries: Implemented Font Awesome icons and Bootstrap for styling and functionality."
      ,"Sectional Organization: Structured the website into distinct sections for easy navigation and information display."],
    gitLink:"https://github.com/MouliSri/dog",
    link: "https://moulisri.github.io/dog/",
    imageUrl: dog,
    technologies: "Html,Css,JavaScript"
  },
  {
    id:3,
    name: "Notes App using React",
    description:["Developed a responsive and interactive To-Do List application utilizing React, emphasizing the reusability aspect of the useState hook for managing component-level state."
  ,"Implemented reusable components to optimize the application structure and enhance maintainability.",
  "Utilized useState hook within multiple components, ensuring each instance manages its own state independently.",
  "Modularized components for adding, displaying, and deleting tasks, facilitating seamless integration across the application."
  
  ],
    gitLink:"https://github.com/MouliSri/Kepperapp-React",
    link: "",
    imageUrl: notes,
    technologies: "React, JavaScript, HTML, CSS",
  },
  {
    id:4,
    name: "TravelPlanner",
    description:["Implemented Tailwind CSS for streamlined styling, offering a modern and consistent design across the application.","Integrated Redux for centralized state management, enabling the storage and retrieval of travel details and destination data.",
    "Utilized Redux actions and reducers to facilitate smooth data flow, ensuring a single source of truth for managing application-wide state.","Designed functionalities for adding and deleting travel plans, allowing users to seamlessly organize and modify their travel itineraries.",
    "Implemented features for storing destination details, including location, date, and additional notes, ensuring comprehensive travel management"],
    gitLink:"https://github.com/MouliSri/TravelPlanner",
    link: "https://travelplanning.netlify.app",
    imageUrl: calendar,
    technologies: "React, Redux,TailwindCss",
  },
  {
    id:5,
    name: "LoginPage",
    description:["Integrated JWT-based authentication to securely manage user sessions and verify user identity during login.",
  "Implemented Google Sign-In functionality as an additional authentication method, enhancing user convenience and security.",
  "Utilized Google OAuth for seamless and secure authentication, allowing users to sign in with their Google accounts.",
"Configured protected routes that require user authentication, redirecting unauthorized users to the login page."],
    gitLink:"https://github.com/MouliSri/Login-Page-Authentication-and-Authorization",
    link: "",
    imageUrl: login,
    technologies: "Frontend-Html,Css,EJS & Backend-NodeJs,ExpressJs,mongoDb",
  },
  {
    id:6,
    name: "TodoList",
    description:["Frontend Development",

    "Utilized HTML for structuring the web pages and CSS for styling, creating an intuitive and user-friendly interface for managing tasks.",
    "Designed responsive and visually appealing UI components to enhance the user experience across various devices.",
    "Backend Implementation",
    "Implemented a robust backend using Node.js and Express.js to handle API requests and business logic."
    ,"Leveraged MongoDB, a NoSQL database, to store and manage todo items, providing flexibility and scalability for data storage."
  ],
    gitLink:"https://github.com/MouliSri/Todolist",
    link: "",
    imageUrl: gif,
    technologies: "Frontend-Html,Css & Backend-NodeJs,ExpressJs,mongoDb",
  },
  {
    id:7,
    name: "Full stack Blog Website",
    description:["Frontend Development",

    "Utilized HTML, CSS, and JavaScript to create an engaging and responsive user interface.",
    "Leveraged EJS templating for dynamic content generation, enabling the rendering of blog posts and pages.","Backend Implementation",
    "Developed a robust backend using Node.js and Express.js, establishing RESTful APIs for managing blog content and user interactions.",
    "Integrated MongoDB, a NoSQL database, to store blog posts, user information, ensuring efficient data storage and retrieval"],
    gitLink:"https://github.com/MouliSri/Blog-Api",
    link: "",
    imageUrl: blog,
    technologies: "Frontend-Html,Css,JavaScript,Ejs  & Backend-NodeJs,ExpressJs,mongoDb"
  },
  
  
  
  
  {
    id:8,
    name: "Clothing Website",
    frontenddescription:["Implemented category-specific sections for Men, Women, and Kids, allowing users to browse and explore clothing options based on their preferences.","Implemented responsive and visually appealing UI components using Tailwind CSS for streamlined styling and flexibility.","Utilized Next.js to dynamically render category-specific product listings, providing an enhanced shopping experience."],
    backenddescription:["Backend Microservices Establishment:","API Gateway: Designed and implemented for routing and proxying requests to various microservices, ensuring a unified entry point for clients.","Orders Microservice: Developed for efficient management and processing of purchase orders, handling order-related functionalities",
    "Registry (Eureka Server): Established a service registry using Eureka Server for service registration and discovery within the microservices ecosystem.","Product Microservice: Engineered for inventory management, facilitating product-related operations such as retrieval, addition, or update of inventory details","Payment Microservice: Created for secure and streamlined transaction handling, ensuring seamless payment processing within the system."],
   
    gitLinkFrontend:"https://github.com/MouliSri/Tafos-Clothing-Website",
    gitLinkBackend:"https://github.com/MouliSri/Tafos-Clothing-Backend",
    link: "",
    imageUrl: clothes,
    technologies:"Frontend-Nextjs,TailwindCss & Backend-SpringBoot MicroServices, Mysql",
  },
  {
    id:9,
    name: "MERN stack Air Conditioner",
    frontenddescription:["React Responsive Design: Designed and implemented a responsive user interface using React.js, ensuring optimal user experience across various devices and screen sizes.",
    "State Hook and useEffect: Utilized React's State Hook for managing component-level state and useEffect for handling side effects like data fetching and updating."],
    backenddescription:["Product Routes: Created endpoints for managing product details, including retrieval, addition, and modification.",
    "Order Routes: Implemented routes to handle order processing, facilitating seamless transaction management.",
    "Cart Routes: Engineered routes for managing shopping cart functionalities, enabling users to add, remove, or modify items in their cart.",
    "User Routes with JWT Authentication: Developed routes for user functionalities with secure JWT token-based authentication and cookie sessions, ensuring authenticated access and authorization. based on the role admin or user certain can be accessed"],
    
    gitLinkFrontend:"https://github.com/MouliSri/Mern-Stack-Air-Conditioner-Frontend",
    gitLinkBackend:"https://github.com/MouliSri/Mern-Stack-Air-Conditioner-Backend",
    link: "https://advancedairconditioner.netlify.app/",
    imageUrl: Image2,
    technologies: "MERN Stack(MongoDB, Express.js, React.js, Node.js)"
  }
];




export default function Home() {
  const [colorMode, setColorMode] = useColorMode();

  const [selectedId, setSelectedId] = useState(null);

  // Parent container to handle staggered children
const containerVariants = {
  onscreen: {
    transition: {
      staggerChildren: 0.25, // delay between each card
    },
  },
};

// Each card animation
const cardVariants = {
  offscreen: { opacity: 0, y: 80 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 0.9, // smoother entry
    },
  },
};

// Unique container animation for skills section
const skillsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // delay between each skill card
    },
  },
};

// Each skill card animation
const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

  const skills = [
    { src: html, alt: "HTML" },
    { src: css, alt: "CSS" },
    { src: js, alt: "JavaScript" },
    { src: r, alt: "React" },
    { src: tailwind, alt: "Tailwind CSS" },
    { src: j, alt: "Java" },
    { src: s, alt: "Spring Boot" },
    { src: node1, alt: "Node.js" },
    { src: mysql1, alt: "MySQL" },
    { src: mongodb1, alt: "MongoDB" },
  ];

  return (
   
      <div>
       
      <Head>
        <title>portfolio Website</title>
        <meta name="description" content="Generated by the next js" />
        
      </Head>
      <main className=" dark:bg-black scroll-behavior:smooth">
      <section className="min-h-screen px-10">
    
        <nav className="py-10 mb-12 flex justify-between">
          <div className="flex flex-row">
          <h1 className="text-2xl font-burtons dark:text-white">Portfolio</h1>
          <Image src={rocket}  className="h-7 w-7 dark:hidden"/>
          </div>
          <ul className="flex items-center">
            <li className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md px-4 py-2 ml-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"><BsFillMoonStarsFill  onClick={() =>  setColorMode(colorMode === "light" ? "dark" : "light")} className="cursor-pointer text-2xl dark:text-white "/></li>
           <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
      <a
        href="https://drive.google.com/file/d/1K4eqLPp4yHAOjMzAkFB9Nwc7d4Pn8gDm/view?usp=sharing"
        download="resume.pdf"
        className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md px-4 py-2 ml-3 flex items-center justify-center"
      >
        {/* Desktop Text */}
        <span className="hidden sm:inline text-white font-medium">Resume</span>

        {/* Mobile Icon */}
        <span className="sm:hidden text-white text-xl">
          <FiDownload />
        </span>
      </a>
    </li>
     </ul>
        </nav>
        <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1 }}
      className="text-center p-3"
    >
      <h2 className="text-5xl py-3 dark:text-white">
        Hi, I'm{" "}
        <span className="text-teal-500">
          <Typewriter
            words={["Mouli S"]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={120}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h2>

      <h3 className="text-3xl py-3 dark:text-white">
        Web Developer and Designer
      </h3>

      <p className="text-medium py-3 dark:text-gray-300">
        Freelancer providing programming and design content needs. Join me down below and let's get cracking!
      </p>
    </motion.div>
        <div className="text-4xl flex justify-center gap-5 py-3 text-gray-700 dark:text-gray-400">
         <a href="https://github.com/MouliSri"><AiFillGithub className="hover:text-teal-500" /></a> 
         <a href="https://www.linkedin.com/in/mouli-s/" ><AiFillLinkedin className="hover:text-teal-500"/></a>
          <a href="https://twitter.com/MouliSrii" ><AiFillTwitterCircle className="hover:text-teal-500"/></a>

        </div>

        <motion.div  initial={"offscreen"}
        whileInView={"onscreen"} viewport={{once:false}} variants={imageAnimate}  className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full h-80 w-80 overflow-hidden mt-20 ">
          <Image  className="hover:animate-pulse hover:-translate-y-6" src={mouli1} />

        </motion.div>
      
      
      
      </section>


   <div className="px-10">
      <h1 className="text-3xl py-3 mt-20 text-center dark:text-white font-bold">
        Experience & Education
      </h1>
      <hr className="h-1 w-24 mx-auto border-none bg-teal-500 mb-20" />

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {/* School */}
        <motion.div
          variants={cardVariants}
          className="text-center dark:bg-gradient-to-r dark:from-cyan-500 dark:to-teal-500 
                     shadow-xl p-10 rounded-2xl my-10 
                     hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 
                     transition-all duration-500 flex flex-col items-center justify-center"
        >
          <Image
            className="bg-white h-16 w-16 rounded-lg shadow-md"
            src={school}
            alt="School Logo"
          />
          <h3 className="text-2xl pt-8 pb-2 font-semibold">
            Platos Academy Higher Secondary School
          </h3>
          <h4 className="text-lg font-medium py-2">
            Specialization: Computer Science & Mathematics
          </h4>
          <p className="text-gray-800 dark:text-gray-200 font-medium py-2">
            2018 – 2019
          </p>
        </motion.div>

        {/* College */}
        <motion.div
          variants={cardVariants}
          className="text-center dark:bg-gradient-to-r dark:from-cyan-500 dark:to-teal-500 
                     shadow-xl p-10 rounded-2xl my-10 
                     hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 
                     transition-all duration-500 flex flex-col items-center justify-center"
        >
          <Image
            className="bg-white h-16 w-16 rounded-lg"
            src={college}
            alt="College Logo"
          />
          <h3 className="text-2xl pt-8 pb-2 font-semibold">
            Kumaraguru College of Technology
          </h3>
          <h4 className="text-lg font-medium py-2">
            Bachelor of Engineering in Mechatronics
          </h4>
          <p className="text-gray-800 dark:text-gray-200 font-medium py-2">
            2019 – 2023
          </p>
        </motion.div>

        {/* Work */}
        <motion.div
          variants={cardVariants}
          className="text-center dark:bg-gradient-to-r dark:from-cyan-500 dark:to-teal-500 
                     shadow-xl p-10 rounded-2xl my-10 
                     hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 
                     transition-all duration-500 flex flex-col items-center justify-center"
        >
          <Image
            className="bg-white h-16 w-16 rounded-lg"
            src={management}
            alt="Company Logo"
          />
          <h3 className="text-2xl pt-8 pb-2 font-semibold">Aspire Systems</h3>
          <h4 className="text-lg font-medium py-2">Software Developer</h4>
          <p className="text-gray-800 dark:text-gray-200 font-medium py-2">
            Jan 2024 – Present
          </p>
        </motion.div>
      </motion.div>
    </div>


      <div className="px-10">
      <h1 className="text-3xl py-3 mt-20 text-center dark:text-white font-bold">
        Technical Skills
      </h1>
      <hr className="h-1 w-24 text-center mx-auto border-none bg-teal-500 mb-20" />

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center py-10 px-5"
        variants={skillsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={skillItemVariants}
            whileHover={{
              scale: 1.15,
              rotate: 6,
              transition: { type: "spring", stiffness: 200 },
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 shadow-lg rounded-xl cursor-pointer"
          >
            <Image
              src={skill.src}
              alt={skill.alt}
              className="h-20 w-20 object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
      



      <div className="   mt-10">
       <h1 className="text-4xl  py-3 mt-20  text-center dark:text-white">Projects</h1>
       <hr  className=" h-1 w-24  text-center mx-auto border-none bg-teal-500 mb-20"/>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 m-20  ">

   
      {items.map((item) => (
        // <a href={item.link} key={item.id}>
          <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)} className="shadow-md  w-64 rounded-lg flex flex-col items-center justify-center text-center hover:shadow-teal-900 dark:hover:shadow-teal-400 dark:shadow-md">
            <motion.div className="overflow-hidden">
              <Image
                className="bg-white h-44 w-44 hover:scale-75 duration-1000 rounded-md"
                src={item.imageUrl}
                alt={item.name}
                height={200}
                width={200}
              />
            </motion.div>
            <motion.h3 className="py-2 text-xl text-teal-500">{item.name}</motion.h3>
            <motion.p className="text-md text-gray-600 dark:text-gray-200">Technology used - <br />{item.technologies}</motion.p>
          </motion.div>
        
      ))}
      <AnimatePresence>
  {selectedId && (
    <motion.div layoutId={selectedId} className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
      <motion.div className="bg-white p-8 rounded-md shadow-md">
     
      <motion.div className="overflow-hidden">
      <motion.button onClick={() => setSelectedId(null)} className="absolute top-2 right-2 bg-transparent border-none outline-none focus:outline-none z-10">
          <span className="text-gray-900 dark:text-teal-500 text-xl">✕</span>
        </motion.button>
              <Image
                className="bg-white h-44 w-44 hover:scale-75 duration-1000 rounded-md"
                src={items[selectedId - 1].imageUrl}
                alt={items[selectedId - 1].name}
                height={200}
                width={200}
              />
          </motion.div>
         
        <motion.h5 className="text-lg font-semibold mt-3">{items[selectedId - 1].name}</motion.h5>
        <motion.h2 className="text-sm text-gray-600 mt-2">Technology used : {items[selectedId - 1].technologies}</motion.h2>
        {items[selectedId-1].gitLink ?<motion.p className="text-sm text-gray-600 flex flex-row mt-1">Github : <motion.a  className="text-sm text-gray-600 flex flex-col hover:text-blue-400" href={items[selectedId - 1].gitLink}> {items[selectedId - 1].gitLink}</motion.a></motion.p> :<></>} 
        {items[selectedId-1].gitLinkFrontend ?  <motion.p className="text-sm text-gray-600 flex flex-row mt-1">Github Frontend Link : <motion.a  className="text-sm text-gray-600 flex flex-col hover:text-blue-400" href={items[selectedId - 1].gitLinkFrontend}> {items[selectedId - 1].gitLinkFrontend}</motion.a></motion.p>:<></>}
        {items[selectedId-1].gitLinkBackend ?  <motion.p className="text-sm text-gray-600 flex flex-row mt-1">Github Backend Link : <motion.a  className="text-sm text-gray-600 flex flex-col hover:text-blue-400" href={items[selectedId - 1].gitLinkBackend}> {items[selectedId - 1].gitLinkBackend}</motion.a></motion.p>:<></>}
        {items[selectedId - 1].link ? <motion.p className="text-sm text-gray-600 flex flex-row  mt-2">Website :  
        <motion.a  className="text-sm text-gray-600 flex flex-col hover:text-blue-400" href={items[selectedId - 1].link}> {items[selectedId - 1].link}</motion.a> </motion.p> :<></> }

        {items[selectedId - 1].description && <motion.p className="mt-3">Project Description</motion.p>}
        
         {items[selectedId - 1].description && items[selectedId - 1].description.map((desc, index) => (
          <motion.p key={index} className="text-sm text-gray-600">•{desc}</motion.p>
        ))}

       {items[selectedId - 1].frontenddescription && <motion.p className="mt-3">Project Description Frontend</motion.p>}
     {items[selectedId - 1].frontenddescription && items[selectedId - 1].frontenddescription.map((desc, index) => (
          <motion.p key={index} className="text-sm text-gray-600">•{desc}</motion.p>
        ))}

{items[selectedId - 1].backenddescription && <motion.p className="mt-3">Project Description Backend</motion.p>}
{items[selectedId - 1].backenddescription && items[selectedId - 1].backenddescription.map((desc, index) => (
          <motion.p key={index} className="text-sm text-gray-600">•{desc}</motion.p>
        ))}

        
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    

     {/* <a href="https://moulisri.github.io/mysite/">
       <div className=" shadow-md rounded-lg flex flex-col items-center justify-center text-center hover:shadow-teal-900  dark:hover:shadow-teal-400 dark:shadow-md">
        <div className="overflow-hidden">
        <Image  className="bg-white  h-44 w-44 hover:scale-75 duration-1000 rounded-md"src={cartoon}  height={200} width={200}/>
        </div>
        <h3 className="py-2 text-xl text-teal-500">Old Portfolio Website</h3>
       
        <p className=" text-md text-gray-600 dark:text-gray-200">Technology used- <br/>Html, Css</p>
       </div>
       </a>

      
     <a href="https://moulisri.github.io/dog/">
       <div className=" shadow-md rounded-lg flex flex-col items-center justify-center text-center hover:shadow-teal-900  dark:hover:shadow-teal-400 dark:shadow-md">
        <div className="overflow-hidden">
        <Image  className="bg-white  h-44 w-44 hover:scale-75 duration-1000 rounded-md"src={dog}  height={200} width={200}/>
        </div>
        <h3 className="py-2 text-xl text-teal-500">Dogs Website</h3>
       
        <p className=" text-md text-gray-600 dark:text-gray-200">Technology used- <br/>Html, Css, JavaScript</p>
       </div>
       </a>

       <a href="https://github.com/MouliSri/DailyjournalBlog">
       <div className=" shadow-md rounded-lg flex flex-col items-center justify-center text-center hover:shadow-teal-900  dark:hover:shadow-teal-400 dark:shadow-md">
        <div className="overflow-hidden">
        <Image  className="bg-white  h-44 w-44 hover:scale-75 duration-1000 rounded-md"src={blog}  height={200} width={200}/>
        </div>
        <h3 className="py-2 text-xl text-teal-500">DailyjournalBlog</h3>
       
        <p className=" text-md text-gray-600 dark:text-gray-200">Technology used- <br/>Html, Css, JavaScript, Ejs</p>
       </div>
       </a>

       <a href="https://github.com/MouliSri/Todolist">
       <div className=" shadow-md rounded-lg flex flex-col items-center justify-center text-center hover:shadow-teal-900  dark:hover:shadow-teal-400 dark:shadow-md">
        <div className="overflow-hidden">
        <Image  className="bg-white h-44 w-44 hover:scale-75 duration-1000 rounded-md" src={gif}/>
        </div>
        <h3 className="py-2 text-xl text-teal-500">TodoList</h3>
        <p className=" text-md text-gray-600 dark:text-gray-200">Technology used<br/>Frontend-Html,Css <br/>Backend-NodeJs, ExpressJs, mongoDb</p>
       </div>
       </a>


      <a href="https://facepreparation.netlify.app/">
       <div className="  shadow-md rounded-lg flex flex-col items-center justify-center text-center hover:shadow-teal-900  dark:hover:shadow-teal-400 dark:shadow-md">
        <div className="overflow-hidden">
          
        <Image  className="bg-white h-44 w-44 hover:scale-75 duration-1000 rounded-md"src={login}/>
        </div>
        <h3 className="py-2 text-xl text-teal-500">Login Page</h3>
        <p className=" text-md text-gray-600 dark:text-gray-200">Technology Used-React</p>
        
      
       </div>
       </a>
     
      
      <a href="https://github.com/MouliSri/NotesApp">
       <div className=" shadow-md rounded-lg flex flex-col items-center justify-center text-center hover:shadow-teal-900  dark:hover:shadow-teal-400 dark:shadow-md">
        <div className="overflow-hidden">
        <Image  className="bg-white h-44  w-44 hover:scale-75 duration-1000 rounded-md"src={notes} rounded-md height={150} width={150}/>
        </div>
        <h3 className="py-2 text-xl text-teal-500">Notes App</h3>
        <p className=" text-md text-gray-600 dark:text-gray-200">Technology Used-React</p>
       </div>
       </a>

       <a href="https://travelplanning.netlify.app">
       <div className=" shadow-md rounded-lg flex flex-col items-center justify-center text-center hover:shadow-teal-900  dark:hover:shadow-teal-400 dark:shadow-md">
        <div className="overflow-hidden">
        <Image  className="bg-white h-44 w-44 hover:scale-75 duration-1000 rounded-md" src={calendar}/>
        </div>
        <h3 className="py-2 text-xl text-teal-500">TravelPlanner</h3>
        <p className=" text-md text-gray-600 dark:text-gray-200">Technology used-<br/>React, Redux, TailwindCss</p>
       </div>
       </a>


      
     

       
       <a href="https://github.com/MouliSri/Tafos-Clothing-Website">
       <div className="  rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-teal-900  dark:hover:shadow-teal-400 dark:shadow-md">
        <div className="overflow-hidden">
        <Image  className="bg-white h-44 w-44 hover:scale-75 duration-1000 rounded-md" src={clothes}/>
        </div>
        <h3 className="py-2 text-xl text-teal-500">Clothing Website</h3>
        <p className=" text-md text-gray-600 dark:text-gray-200">Technology used<br /> Frontend-Nextjs, TailwindCss <br /> Backend- SpringBoot, Mysql</p>
       </div>
       </a>
      
       
        */}

       </div>

    
      
      
       
      </div>

      {/* {items.map(item => (
  <motion.div
    key={item.id}
    layoutId={item.id}
    onClick={() => setSelectedId(item.id)}
    className="border rounded-md p-4 shadow-md cursor-pointer m-2"
  >
    <Image src={item.imageUrl} alt={item.name} height={28} width={28} />
    <motion.h5 className="text-lg font-semibold">{item.name}</motion.h5>
    <motion.h2 className="text-sm text-gray-600">{item.technologies}</motion.h2>
  </motion.div>
))}

<AnimatePresence>
  {selectedId && (
    <motion.div layoutId={selectedId} className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
      <motion.div className="bg-white p-8 rounded-md shadow-md">
        
        <motion.h5 className="text-lg font-semibold">{items[selectedId - 1].name}</motion.h5>
        <motion.h2 className="text-sm text-gray-600">{items[selectedId - 1].technologies}</motion.h2>
        <motion.button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={() => setSelectedId(null)}>Close</motion.button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence> */}

    

      <footer className="text-center font-[Poppins] text-gray-800 dark:text-white dark:bg-black  border-black border-y-0  shadow-inner  py-5">
        <h2 className="text-lg py-2 ">Thanks For Visiting The Page❤</h2>
        <h3 className="text-lg py-2">Contact</h3>
        <div className="md:flex flex-row   items-center justify-center md:gap-7">
        <a href='tel:7825010293'><p className="py-2 "><AiOutlinePhone  className="mx-auto text-xl hover:text-teal-900 hover:animate-bounce"/>Mobile-<span className=" hover:text-teal-900">7825010293</span></p></a>
        <a href='mailto:moulisunderaj66@gmail.com?subject=Contact&body=Hello!'><p className="py-2"><AiOutlineMail className="mx-auto text-xl hover:text-teal-900 hover:animate-bounce "/><span className=" hover:text-teal-900">moulisunderaj66@gmail.com</span></p></a>
        </div>
      </footer>

      </main>
      </div>
  )
}
