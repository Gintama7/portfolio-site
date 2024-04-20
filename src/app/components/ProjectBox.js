
import { FaGithub } from 'react-icons/fa'

const ProjectBox = ({name,date}) => {
  return (
    <div className="bg-white relative flex flex-col items-center justify-center h-auto w-[500px] shadow-lg shadow-gray-400 border-solid border-2 border-gray-300 p-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300">
    <h4>{name}</h4>
    <button
      className="w-full mx-2 text-gray-400 border-solid border-2 p-1 border-gray-400 hover:bg-gray-500 hover:text-white flex items-center justify-center gap-1 mb-2 mt-2"
      style={{ textTransform: "none",boxShadow:"none" }}
    >
      <FaGithub className="icon" />
      Clone Project
    </button>
    <button
      className="w-full mx-2 text-gray-400 border-solid border-2 p-1 border-gray-400 hover:bg-gray-500 hover:text-white flex items-center justify-center gap-1"
      style={{ textTransform: "none",boxShadow:"none" }}
    >
      <FaGithub className="icon" />
     Repo
    </button>
    <div className='mt-2 border-t-2 border-gray-300'>
        <p className='text-sm gap-10'>Languages : <span className='font-bold bg-gray-200'>Javascript:51.5%</span>  <span className='font-bold bg-gray-200'>SCSS:45.3%</span>   <span className='font-bold bg-gray-200'>HTML:3%</span> </p>
    </div>
    <div className="mt-2 flex items-center self-start gap-2">
        <FaGithub/>Stars
        <p className='text-sm ml-4'>Updated on {date}</p>
    </div>
  </div>
  )
}

export default ProjectBox
