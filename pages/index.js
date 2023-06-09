import Head from "next/head";
import Image from "next/image";
import mouli1 from "../public/mouli1.png"
import html from "../public/html.png"
import css from "../public/css.png"
import js from "../public/js.png"
import node1 from "../public/node1.png"
import design from "../public/design.png"
import notes from "../public/notes.jpeg"
import consulting from "../public/consulting.png"
import mysql1 from "../public/mysql1.png"
import dog from "../public/dog.jpg"
import mongodb1 from "../public/mongodb1.png"
import r from "../public/r.png"
import A from "../public/A.png"
import code from "../public/code.png"
import s from "../public/s.png"
import tailwind from "../public/tailwind.png"
import j from "../public/j.png"
import {BsFillMoonStarsFill}from "react-icons/bs";
import {AiFillGithub, AiFillLinkedin , AiFillTwitterCircle,AiOutlineMail,AiOutlinePhone} from "react-icons/ai"
import useColorMode from "../hooks/useColorMode";






export default function Home() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div>
      <Head>
        <title>portfolio Website</title>
        <meta name="description" content="Generated by the next js" />
        
      </Head>
      <main className="px-10 dark:bg-black">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-2xl font-burtons dark:text-white">Portfolio</h1>
          <ul className="flex items-center">
            <li className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md px-4 py-2 ml-3"><BsFillMoonStarsFill  onClick={() =>  setColorMode(colorMode === "light" ? "dark" : "light")} className="cursor-pointer text-2xl "/></li>
            <li><a  href="../public/OverleafResume.pdf"  download="resume.pdf" className=" bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md px-4 py-2 ml-3 ">Resume</a></li>
          </ul>
        </nav>
        <div className="text-center p-3">
          
        <span
      className="inline-flex  pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
    >
      <h2 className="text-5xl py-3 dark:text-white">hi, I'm  </h2>
      <br/>
       <h2 className="text-5xl text-teal-500 py-3 px-2 ">Mouli S</h2>
    </span>
          
          <h3 className="text-5xl  py-3 dark:text-white">Web Developer and Designer</h3>
       
 

          <p className="text-medium  py-3 dark:text-gray-300">
            Freelancer providing for programming and design content needs.Join me down below and let's get cracking!
          </p>
         
        </div>
        <div className="text-4xl flex justify-center gap-5 py-3 text-gray-700 dark:text-gray-400">
         <a href="https://github.com/MouliSri"><AiFillGithub className="hover:text-teal-500" /></a> 
         <a href="https://www.linkedin.com/in/mouli-s/" ><AiFillLinkedin className="hover:text-teal-500"/></a>
          <a href="https://twitter.com/MouliSrii" ><AiFillTwitterCircle className="hover:text-teal-500"/></a>

        </div>

        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full h-80 w-80 overflow-hidden mt-20 ">
          <Image  className="hover:animate-pulse" src={mouli1} />

        </div>
      
      
      
      </section>
      <div>
        <h1 className="text-4xl  py-3 mt-20  text-center dark:text-white"> My Skills</h1>
        <hr  className=" h-1 w-24  text-center mx-auto border-none bg-teal-500 mb-20"/>

        <div className=" grid grid-cols-4 gap-5 justify-center py-10 hover:grid-cols-6 ">
          <div>
           <Image src={html} className="h-30 w-40 rounded-md overflow-hidden hover:animate-pulse "/>
          </div>
          <div>
            <Image src={css} className="h-30 w-40 rounded-md overflow-hidden hover:animate-pulse "/>
          </div>
          <div>
            <Image  src={js} className="h-30 w-40 rounded-md overflow-hidden hover:animate-pulse "/>
          </div>
      
          
          <div>
            <Image src={r} className="h-30 w-40 rounded-md overflow-hidden  hover:animate-pulse "/>
          </div>
          <div>
            <Image  src={A} className="h-30 w-40 rounded-md overflow-hidden hover:animate-pulse "/>
          </div>
          <div>
            <Image  src={tailwind} className="h-30 w-40 rounded-md overflow-hidden hover:animate-pulse "/>
          </div>
          <div>
            <Image  src={j} className="h-30 w-40 rounded-md overflow-hidden hover:animate-pulse "/>
          </div>
          <div>
            <Image  src={s} className="h-30 w-40 rounded-md overflow-hidden  hover:animate-pulse "/>
          </div>
          <div>
            <Image  src={node1} className="h-30 w-40 rounded-md overflow-hidden bg-white hover:animate-pulse "/>
          </div>
          <div>
            <Image  src={mysql1} className="h-30 w-40 rounded-md overflow-hidden  bg-white hover:animate-pulse "/>
          </div>
          <div>
            <Image  src={mongodb1} className="h-30 w-40 rounded-md overflow-hidden  bg-white hover:animate-pulse "/>
          </div>
         
          
         

        </div>
       
      </div>
      <div>
      <h1 className="text-4xl  py-3 mt-20  text-center dark:text-white">Experience & Education</h1>
      <hr  className=" h-1 w-24  text-center mx-auto border-none bg-teal-500 mb-20"/>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">

      
       
       <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-teal-500 hover:animate-bounce hover:opacity-60">

          <h3 className="text-2xl pt-8 pb-2">Platos Academy Higher Secondary School</h3>
         <h4 className=" text-lg font-medium py-2">Computer Science & Maths</h4>
            <p className="text-gray-300 py-2">year-2018 to 2019</p>
       </div>

<div className="text-center shadow-lg p-10 rounded-xl my-10 bg-teal-500 hover:animate-bounce hover:opacity-60">

<h3 className="text-2xl pt-8 pb-2">Kumaraguru College Of Technology</h3>
<h4 className=" text-lg font-medium py-2">BE Mechatronics Engineering</h4>
<p className="text-gray-300 py-2">year-2019 to 2023</p>
</div> 

<div className="text-center shadow-lg p-10 rounded-xl my-10 bg-teal-500 hover:animate-bounce hover:opacity-60">

<h3 className="text-2xl pt-8 pb-2">Aspire System</h3>
<h4 className=" text-lg font-medium py-2">Software Analyst Intern</h4>
<p className="text-gray-300 py-2">year-2023 Jan to March</p>
</div>


       </div>

      </div>




      <div className="   mt-10  ">
       <h1 className="text-4xl  py-3 mt-20  text-center dark:text-white">Projects</h1>
       <hr  className=" h-1 w-24  text-center mx-auto border-none bg-teal-500 mb-20"/>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-20  ">
      <a href="https://facepreparation.netlify.app/">
       <div className="  shadow-lg ">
        <div className="overflow-hidden">
          
        <Image  className="bg-white hover:scale-125 duration-1000 rounded-md"src={design}/>
        </div>
        <h3 className="py-2 text-xl text-teal-500">Login Page</h3>
        <p className="py-2 text-md text-gray-600 dark:text-gray-200">Technology Used-React</p>
        
      
       </div>
       </a>
      
      <a href="https://github.com/MouliSri/NotesApp">
       <div className=" shadow-lg">
        <div className="overflow-hidden">
        <Image  className="bg-white hover:scale-125 duration-1000 rounded-md"src={notes} rounded-md height={150} width={150}/>
        </div>
        <h3 className="py-2 text-xl text-teal-500">Notes App</h3>
        <p className="py-2 text-md text-gray-600 dark:text-gray-200">Technology Used-React</p>
       </div>
       </a>

      <a href="https://moulisri.github.io/dog/">
       <div className=" shadow-lg">
        <div className="overflow-hidden">
        <Image  className="bg-white hover:scale-125 duration-1000 rounded-md"src={dog}  height={200} width={200}/>
        </div>
        <h3 className="py-2 text-xl text-teal-500">Dogs Website</h3>
        <p className="py-2 text-md text-gray-600 dark:text-gray-200">Technology used-Html, Css, JavaScript</p>
       </div>
       </a>

       <a href="https://github.com/MouliSri/Todolist">
       <div className=" shadow-lg  ">
        <div className="overflow-hidden">
        <Image  className="bg-white hover:scale-125 duration-1000 rounded-md" src={code}/>
        </div>
        <h3 className="py-2 text-xl text-teal-500">TodoList</h3>
        <p className="py-2 text-md text-gray-600 dark:text-gray-200">Technology used-Nodejs,Express,mongoDb</p>
       </div>
       </a>
      
       
       </div>

    
      
      
       
      </div>

      <footer className="text-center dark:text-white ">
        <h2 className="text-xl py-2">Thanks For Visiting The Page❤</h2>
        <h3 className="text-lg py-2">Contact Us</h3>
        <p className="py-2 "><AiOutlinePhone className="mx-auto hover:text-teal-500"/>Mobile Number-<span className=" hover:text-teal-500">7825010293</span></p>
        <p className="py-2"><AiOutlineMail className="mx-auto  hover:text-teal-500"/><span className=" hover:text-teal-500">moulisunderaj66@gmail.com</span></p>
      </footer>

      </main>
    </div>
  )
}
