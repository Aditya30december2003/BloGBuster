import React from 'react'
import Link from "next/link"
import Logout from '../Logout/logout'
import { useSession } from 'next-auth/react'
const AuthLinks = () => {
  const {status} = useSession();
  return (
    <div>
      { status === "unauthenticated" ? 
      (
      <Link href='/login' className='text-white bg-black py-2 px-3'>Login</Link> 
    )
      :(
      <div className='flex items-center gap-2'>
      <Link href='/write'>Write</Link>
      <span><Logout /></span>
      </div>
      ) }
    </div>
  )
}

export default AuthLinks
