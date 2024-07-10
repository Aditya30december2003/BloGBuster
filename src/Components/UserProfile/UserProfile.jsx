import React from 'react'
import Image from 'next/image'
import AuthLinks from "@/Components/AuthLinks/AuthLinks"
import { useSession } from 'next-auth/react'
import Link from 'next/link'
const UserProfile = () => {
    const { data: session, status } = useSession()
   if(status === "loading"){
    return(
        <>
        <div>Loading....</div>
        </>
    )
   }
   if(status === "unauthenticated" || !session){
    return <Link href='/login' className='text-white bg-black py-2 px-3'>Login</Link> 
   }
  return (
    <div className='flex items-center gap-4'>
      <div><div><AuthLinks /></div></div>
      <Image className='rounded-[100%] cursor-pointer' src={session.user.image} width={32} height={32} alt='user-image'/>
      </div>
  )
}

export default UserProfile
