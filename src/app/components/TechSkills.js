"use client";
import ProgressBar from "@ramonak/react-progress-bar";

const TechSkills = () => {
  return (
    <div className="grid md:grid-cols-2 gap-2">
      <div className="mx-2 my-2">
        <p className="float-left">React</p>
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
        <p className="float-left">HTML/CSS</p>
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
        <p className="float-left">JavaScript</p>
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
        <p className="float-left">DataStructures</p>
        <ProgressBar
          completed={65}
          customLabel=" "
          animateOnRender="true"
          borderRadius="5px"
          bgColor="#5755fe"
          height="15px"
        />
      </div>
      <div className="mx-2 my-2">
        <p className="float-left">Firebase</p>
        <ProgressBar
          completed={60}
          customLabel=" "
          animateOnRender="true"
          borderRadius="5px"
          bgColor="#5755fe"
          height="15px"
        />
      </div>
      <div className="mx-2 my-2">
        <p className="float-left">Next</p>
        <ProgressBar
          completed={70}
          customLabel=" "
          animateOnRender="true"
          borderRadius="5px"
          bgColor="#5755fe"
          height="15px"
        />
      </div>

      
    </div>
  );
}

export default TechSkills
