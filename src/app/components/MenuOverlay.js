import Link from 'next/link'
import React from 'react'

const MenuOverlay = () => {
  return (
   <ul className='flex flex-col mt-0 items-center bg-opacity-10 transition delay-1000 '>
    <Link href='/'>
                    <li className='block py-2 pl-3 pr-4 m:text-xl rounded md:p-0'>Home</li>
                </Link>
                <Link href='/'>
                    <li className='block py-2 pl-3 pr-4 m:text-xl rounded md:p-0' >Projects</li>
                </Link>
                <Link href='/'>
                    <li className='block py-2 pl-3 pr-4 m:text-xl rounded md:p-0'>Resume</li>
                </Link>
                <Link href='/'>
                    <li className='block py-2 pl-3 pr-4 m:text-xl rounded md:p-0'>About</li>
                </Link>
                <Link href='/'>
                    <li className='block py-2 pl-3 pr-4 m:text-xl rounded md:p-0'>Skills</li>
                </Link>
   </ul>
  )
}

export default MenuOverlay
