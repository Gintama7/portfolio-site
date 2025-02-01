import Link from "next/link";
import { FaCode,FaHeart, FaReact } from "react-icons/fa";

const PageFooter = () => {
  return (
    <div className="w-full bg-[#f5f5f5] text-black opacity-90">
      <div className="max-w-[1240px] mx-auto px-4 xl:px-0 py-12 lg:py-16 text-center">
        <p className="text-5xl my-4">Get In Touch</p>
        <p className="text-md my-4">
          {`I'm currently looking for full-time React Developer/Frontend Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at,`}
          <a
            href="https://www.gmail.com"
            target="_blank"
            className="text-blue-600"
          >
            abhi28535@gmail.com
          </a>
        </p>
        <div className="flex justify-center gap-2 items-center">
          <FaCode /> with <FaHeart /> by 
          <button className="bg-black text-white normal-case text-sm px-2"> <Link href="https://github.com/Gintama7">Abhishek Kumar</Link></button> 
          using <FaReact />
        </div>
      </div>
    </div>
  );
}

export default PageFooter
