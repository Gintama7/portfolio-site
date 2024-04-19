import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Main.css';

const Main = () => {
  return (
    <div className='w-full h-screen text-center '>   
    <div className='max-w-[1000px] w-full h-full mx-auto p-4 flex justify-center items-center'>
        <div>
            <p className='text-6xl md:text-8xl py-2 '>Abhishek Kumar</p>
            <p className='py-2 md:text-xl'>Passionate about changing the world with technology</p>
        
      <div className='flex items-center justify-evenly max-w-[330px] mt-8 m-auto py-4'>
        
            <FaLinkedin size={45} className="icon"/>
            <FaFacebookSquare size={45} className="icon"/>
            <FaInstagram size={45} className="icon"/>
            <FaGithub size={45} className="icon"/>       
</div>
<button className="more-btn mt-10">More about me</button>
      </div>
    </div>
    
     </div>
  )
}

export default Main
