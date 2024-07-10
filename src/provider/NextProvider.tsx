"use client"
import React from 'react'
import { SessionProvider } from 'next-auth/react'
interface Props{

    children?:React.ReactNode
}
const NextProvider = ({children}:Props) => {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  )
}

export default NextProvider
