import React from "react";
import { FaGithub } from "react-icons/fa";
import ProjectBox from "./ProjectBox";

const RecentProjects = () => {
  return (
    <div id="projects" className="w-full bg-[#f4efef] text-black opacity-90">
      <div className="max-w-[1240px] mx-auto px-2 py-16 text-center">
        <p className="text-4xl tracking-widest md:text-5xl mb-4">Recent Projects</p>
        <div className="grid md:grid-cols-2 gap-8 justify-around">
         <ProjectBox name="portfolio-site" date="April 20,2024"
          />
          <ProjectBox name="ecom-site" date=" January 17, 2024"
          desc="Created a simple platform to buy and sell products using ReactJs"/>
          <ProjectBox name="todo-list" date="Updated on December 5, 2023"
          desc=" Simple Todo list app made on NextJs and MongoDB as database"/>
          <ProjectBox name="gmail-clone" date="Updated on October 27, 2023" 
          desc=" Created a dummy mail box where user can send and receive mails."/>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
