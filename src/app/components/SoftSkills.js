"use client";
import ProgressBar from "@ramonak/react-progress-bar";

import React from 'react'

const SoftSkills = () => {
  return (
    <div className="grid md:grid-cols-2 gap-2">
      <div className="mx-2 my-2">
        <p className="float-left">Goal-Oriented</p>
        <ProgressBar
          completed={80}
          customLabel=" "
          animateOnRender="true"
          borderRadius="5px"
          bgColor="#5755fe"
          height="15px"
        />
      </div>
      <div className="mx-2 my-2">
        <p className="float-left">Problem Solving</p>
        <ProgressBar
          completed={75}
          customLabel=" "
          animateOnRender="true"
          borderRadius="5px"
          bgColor="#5755fe"
          height="15px"
        />
      </div>
      <div className="mx-2 my-2">
        <p className="float-left">Collaboration</p>
        <ProgressBar
          completed={90}
          customLabel=" "
          animateOnRender="true"
          borderRadius="5px"
          bgColor="#5755fe"
          height="15px"
        />
      </div>
      <div className="mx-2 my-2">
        <p className="float-left">Empathy</p>
        <ProgressBar
          completed={90}
          customLabel=" "
          animateOnRender="true"
          borderRadius="5px"
          bgColor="#5755fe"
          height="15px"
        />
      </div>
      <div className="mx-2 my-2">
        <p className="float-left">Positivity</p>
        <ProgressBar
          completed={75}
          customLabel=" "
          animateOnRender="true"
          borderRadius="5px"
          bgColor="#5755fe"
          height="15px"
        />
      </div>
      <div className="mx-2 my-2">
        <p className="float-left">Organization</p>
        <ProgressBar
          completed={70}
          customLabel=" "
          animateOnRender="true"
          borderRadius="5px"
          bgColor="#5755fe"
          height="15px"
        />
      </div>

      <div className="mx-2 my-2">
        <p className="float-left">Adaptability</p>
        <ProgressBar
          completed={85}
          customLabel=" "
          animateOnRender="true"
          borderRadius="5px"
          bgColor="#5755fe"
          height="15px"
        />
      </div>
      <div className="mx-2 my-2">
        <p className="float-left">Creativity</p>
        <ProgressBar
          completed={90}
          customLabel=" "
          animateOnRender="true"
          borderRadius="5px"
          bgColor="#5755fe"
          height="15px"
        />
      </div>
    </div>
  )
}

export default SoftSkills
