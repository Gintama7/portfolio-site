"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import MenuOverlay from './MenuOverlay';

const Navbar = () => {

    const [showNav,setShowNav] = useState(false);
    const [shadow,setShadow] = useState(false);

    const handleNav=()=>{
        setShowNav(!showNav);
    }

    useEffect(()=>{
        const handleShadow=()=>{
            if(window.scrollY >= 90)
            {
                setShadow(true);
            }else setShadow(false);
        }

        window.addEventListener("scroll",handleShadow)
    },[])

  return (
    <div className={shadow && !showNav ? "fixed w-full h-20 z-[100] shadow-xl bg-[#f5f5f5] opacity-[50%]":"fixed w-full h-20 z-[100]"}>
        <div className="flex justify-between items-center md:justify-normal w-full h-full px-2 2xl:px-16 text-black">
<h2><Link href='/#main'>{`<Abhi/>`}</Link></h2>
        <div>
            <ul className="hidden md:flex ">
                <Link href='/#main'>
                    <li className='ml-10 text-md hover:border-b'>Home</li>
                </Link>
                <Link href='/#projects'>
                    <li className='ml-10 text-md hover:border-b'>Projects</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-md hover:border-b'>Resume</li>
                </Link>
                <Link href='/#about'>
                    <li className='ml-10 text-md hover:border-b'>About</li>
                </Link>
                <Link href='/#skills'>
                    <li className='ml-10 text-md hover:border-b'>Skills</li>
                </Link>
            </ul>
            <div className='md:hidden float-right hover:border-black' onClick={handleNav}>
                <AiOutlineMenu size={30}/>
            </div>
        </div>
        </div>
       { showNav && <div className={shadow?"fixed transition-1 md:hidden shadow-xl w-full" :"fixed transition-1 md:hidden w-full"}>
        <MenuOverlay show={setShowNav}/></div>}
      
    </div>
  )
}

export default Navbar
