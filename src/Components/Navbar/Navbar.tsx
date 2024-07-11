"use client"
import React , {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import UserProfile from "@/Components/UserProfile/UserProfile"
const Navbar = () => {
    const [mode , setMode] = useState(true);
    const [nav , setNav] = useState(false);
    const onNav = ()=>{
        {mode ? (document.body.style.backgroundColor = "#01072b" ,document.body.style.color = "white"  ) : (document.body.style.backgroundColor = "white" , document.body.style.color = "black" ) }
        setMode(!mode);
    }
  return (
    <>
    <div className='flex justify-between p-2 lg:p-4 items-center w-full'>

      <div className='hidden lg:block'>
        <ul className='flex gap-3'>
            <li className='cursor-pointer'>
                <Image src='./facebook.png' alt='facebook' width={24} height={24}/>
            </li>
            <li className='cursor-pointer'>
                <Image src='./instagram.png' alt='instagram' width={24} height={24}/>
            </li>
            <li className='cursor-pointer'>
                <Image src='./tiktok.png' alt='tiktok' width={24} height={24}/>
            </li>
            <li className='cursor-pointer'>
                <Image src='./youtube.png' alt='youtube' width={24} height={24}/>
            </li>
        </ul>
      </div>

      <div>
        <h1 className='font-bold text-[1.3rem]'>Blo<span>G</span>Buster</h1>
      </div>

      <div className=''>
       <ul className='flex items-center gap-3 text-[0.83rem] font-bold'>
        <li onClick={onNav} className='cursor-pointer p-2'>
          {!mode ? (<LiaToggleOnSolid size={27} className='duration-700'/>) : (<LiaToggleOffSolid size={27} className='duration-700'/>)}  
        </li>
        <div className='lg:flex items-center gap-3 hidden'>
        <Link href='/' className='cursor-pointer '>HomePage</Link>
        <Link href='/contact' className='cursor-pointer '>Contact</Link>
        <Link href='/about' className='cursor-pointer '>About</Link>
        <li><UserProfile /></li>
        </div>
        <li className='lg:hidden'><GiHamburgerMenu onClick={()=>setNav(!nav)} className='cursor-pointer' size={25}/></li>
       </ul>
      </div>

    </div>
   
    <div className={nav ?'text-center w-full h-full absolute top-0 left-0 bg-white font-bold duration-700 text-black' : 'text-center bg-white text-black w-full h-full absolute left-[-100%]   font-bold duration-700'}>
      <div><ImCross onClick={()=>setNav(!nav)} className='cursor-pointer ml-[92%] mt-[2%]' size={23}/></div>
      <ul className='mt-[2rem] flex flex-col gap-4 text-[1.7rem]'>
        <Link href='/' className='cursor-pointer '>HomePage</Link>
        <Link href='/contact' className='cursor-pointer '>Contact</Link>
        <Link href='/about' className='cursor-pointer '>About</Link>
        <li><UserProfile/></li>
      </ul>
    </div>

    </>
  )
}

export default Navbar
