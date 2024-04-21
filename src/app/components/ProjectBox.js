
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

const ProjectBox = ({name,date,desc,repo}) => {
  return (
    <div className="bg-white relative flex flex-col items-center justify-center h-auto w-[500px] md:w-[350px] lg:w-[500px] shadow-lg shadow-gray-400 border-solid border-2 border-gray-300 p-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300">
    <h4>{name}</h4>
    <p>{desc}</p>
    <button
      className="w-full mx-2 text-gray-400 border-solid border-2 p-1 border-gray-400 hover:bg-gray-500 hover:text-white flex items-center justify-center gap-1 mb-2 mt-2"
      style={{ textTransform: "none",boxShadow:"none" }}
    >
      <FaGithub className="icon" /><Link href={repo}>Clone Project</Link>
    </button>
    <button
      className="w-full mx-2 text-gray-400 border-solid border-2 p-1 border-gray-400 hover:bg-gray-500 hover:text-white flex items-center justify-center gap-1"
      style={{ textTransform: "none",boxShadow:"none" }}
    >
      <FaGithub className="icon" />
     <Link href={repo}>Repo</Link>
    </button>
    <div className='mt-3 border-t-2 border-gray-300 p-2'>
        <p className='text-sm gap-10'>Languages : <span className='font-bold bg-gray-200'>Javascript:51.5%</span>  <span className='font-bold bg-gray-200'>SCSS:45.3%</span>   <span className='font-bold bg-gray-200'>HTML:3%</span> </p>
    </div>
    <div className="mt-2 flex items-center self-start gap-2 ">
        <FaGithub/>Stars
        <p className='text-sm ml-4 text-gray-400'>Updated on {date}</p>
    </div>
  </div>
  )
}

export default ProjectBox
