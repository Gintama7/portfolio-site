import Link from 'next/link'
import React from 'react'

const MenuOverlay = (props) => {
  return (
   <ul className='flex flex-col mt-0 items-start bg-opacity-10 transition delay-1000 text-black'>
    <Link onClick={()=>props.show(false)}   href='/#main'>
                    <li className='block py-2 pl-3 pr-4 m:text-xl rounded md:p-0'>Home</li>
                </Link>
                <Link onClick={()=>props.show(false)} href='/#projects'>
                    <li className='block py-2 pl-3 pr-4 m:text-xl rounded md:p-0' >Projects</li>
                </Link>
                <p onClick={()=>props.show(false)} href='/'>
                    <li className='block py-2 pl-3 pr-4 m:text-xl rounded md:p-0'><a href="./abhishek-resume.pdf"
            download>Resume</a></li>
                </p>
                <Link onClick={()=>props.show(false)} href='/#about'>
                    <li className='block py-2 pl-3 pr-4 m:text-xl rounded md:p-0'>About</li>
                </Link>
                <Link onClick={()=>props.show(false)} href='/#skills'>
                    <li className='block py-2 pl-3 pr-4 m:text-xl rounded md:p-0'>Skills</li>
                </Link>
   </ul>
  )
}

export default MenuOverlay
