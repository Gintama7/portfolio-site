
"use client";
import './Skills.css';
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";
import TechSkills from "./TechSkills";
import SoftSkills from "./SoftSkills";


const Skills = () => {

  const [activeTab,setActiveTab] = useState('technical');


  return (
    <div id="skills" className="w-full bg-[#fff] text-black opacity-90">
      <div className="max-w-[1240px] mx-auto px-2 py-16 text-center">
        <p className="text-4xl mt-8 mb-4">Skills</p>
        <div className="tabs">
          <div
            className={
              activeTab === "technical" ? "tech-skills-active" : "tech-skills"
            }
            onClick={() => setActiveTab("technical")}
          >
            Technical Skills
          </div>
          <div className={
              activeTab === "soft" ? "soft-skills-active" : "soft-skills"
            }
          onClick={() => setActiveTab("soft")}>
            Soft Skills{" "}
          </div>
        </div>

        {activeTab === "technical" ? <TechSkills /> : <SoftSkills />}
      </div>
    </div>
  );
}

export default Skills
