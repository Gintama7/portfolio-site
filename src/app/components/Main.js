"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Main.css';
import {ReactTyped} from "react-typed";
import Link from "next/link";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center ">
      <div className="max-w-[1000px] w-full h-full mx-auto p-4 flex justify-center items-center">
        <div>
          <p className="text-6xl md:text-8xl py-2 ">Abhishek Kumar</p>
          <p className="py-2 md:text-xl">
           <ReactTyped strings={["Passionate about changing the world with technology."]}
           typeSpeed={40}   showCursor={false}     
           />
          </p>

          <div className="flex items-center justify-evenly max-w-[330px] mt-8 m-auto py-4">
          <Link href="https://www.linkedin.com/in/abhishek-kumar-549a8b15b/">  <FaLinkedin size={45} className="icon" /></Link>
            <FaFacebookSquare size={45} className="icon" />
            <FaInstagram size={45} className="icon" />
           <Link href="https://github.com/Gintama7"> <FaGithub size={45} className="icon" /></Link>
          </div>
          <button className="more-btn mt-10"><Link href="/#about">More about me</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Main
