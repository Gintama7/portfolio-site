"use client";
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import MenuOverlay from './MenuOverlay';

const Navbar = () => {

    const [showNav,setShowNav] = useState(false);

    const handleNav=()=>{
        setShowNav(!showNav);
    }

  return (
    <div className="fixed w-full h-20 z-[100]">
        <div className="flex justify-between items-center md:justify-normal w-full h-full px-2 2xl:px-16">
<h2>{`<Abhi/>`}</h2>
        <div>
            <ul className="hidden md:flex">
                <Link href='/'>
                    <li className='ml-10 text-md hover:border-b'>Home</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-md hover:border-b'>Projects</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-md hover:border-b'>Resume</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-md hover:border-b'>About</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-md hover:border-b'>Skills</li>
                </Link>
            </ul>
            <div className='md:hidden float-right hover:border-black' onClick={handleNav}>
                <AiOutlineMenu size={30}/>
            </div>
        </div>
        </div>
       { showNav && <div className="fixed transition-1 md:hidden">
        <MenuOverlay/></div>}
      
    </div>
  )
}

export default Navbar
