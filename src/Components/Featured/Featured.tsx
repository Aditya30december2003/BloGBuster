"use client"
import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
const Featured = () => {
  const {data:session , status} = useSession()

  if(status === "unauthenticated" || !session){
    return <Link href='/login' className='text-black py-2 px-3'>Loading....</Link> 
   }
  return (
    <div>
      <h1 className='text-[1.9rem] lg:text-[2.8rem]'><b>Hey!! {session.user.name} here!</b> Welcome to BloG<span className='font-bold'>Buster</span>, where you can share your coding journey, tips and tutorials!!!</h1>

      <div className='flex items-center w-full gap-7'>
        <div className='hidden lg:block mt-8 w-[45%]'><Image src='./scene.jpg' alt='' width={535} height={525}/></div>
        <div className='flex flex-col items-start gap-2  w-full lg:w-[55%] mt-[2rem]'>
          <h1 className='font-bold text-[2rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit repellendus repellat veritatis mollitia sunt! Vel facere pariatur ipsam rem laborum!um quam temporibus, minima rem cupiditate.</p>
          <button className='bg-black text-white p-3 rounded-md'>Read More</button>
        </div>
      </div>

    </div>
  )
}

export default Featured
