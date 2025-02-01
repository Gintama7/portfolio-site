import React from 'react'

const About = () => {
  return (
    <div id='about' className="w-full mid:h-screen px-4 xl:px-2 flex flex-col items-center py-12 lg:py-16 bg-[#f9dddd] text-black opacity-80">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8 mt-3">
        <div className="hidden md:flex max-h-[500px] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="col-span-1 text-center justify-self-center mt-10">
          <p
            style={{ fontSize: "3rem" }}
            className="text-xl tracking-widest mb-5"
          >
            About
          </p>
          <p className="px-5 mt-5 max-h-full text-l tracking-widest">
            {`My name is Abhishek Kumar. I'm a under-graduate of 2020 from Lovely
          Professional University at Phagwara, Punjab with a degree in Bachelors
          of Computer Application . I'm most passionate about giving back to the
          community, and my goal is to pursue this passion within the field of
          software engineering. In my free time I like working on open source
          projects.`}
          </p>
          <button
            className="text-black mt-10 border-solid border-2 border-black p-2 hover:bg-black hover:text-white"
            style={{ boxShadow: "none", textTransform: "none" }}
          >
           <a href="./abhishek-resume.pdf"
            download>
            Resume</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About
