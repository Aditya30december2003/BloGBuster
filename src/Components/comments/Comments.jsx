"use client"
import React , {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'

const fetcher = async(url)=>{

  const res = await fetch(url)

  const data = await res.json()

  if(!res.ok){
   throw  new Error(data.message)
   throw error
  }
   
  return data;
}

const Comments = ({postSlug}) => {
  const API_URL = process.env.NEXTAUTH_URL || ''

  const {data ,mutate , isLoading} = useSWR(`${NEXTAUTH_URL}/api/comments?postSlug=${postSlug}` ,
    fetcher
  )
  const {status} = useSession()
  const [description , setDescription] = useState("")

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ description, postSlug }),
    });
    mutate();
  };
  
  return (
    <div>
      <div className='text-[1.7rem] font-bold mb-3'>Comments</div>
     <div>{status === "authenticated" ? (
        <>
        <div className='w-full flex gap-3'>
        <input onChange={(e)=>setDescription(e.target.value)} className='p-4 outline-none w-[85%] text-black border-2 border-black' placeholder='write a comment....' type="text" />
        <button onClick={handleSubmit} className='text-white bg-green-900 py-2 px-6  item-center'>Send</button>
        </div>
        </>): (
            <>
            <Link href='/signup'>Login to write a commment </Link>
            </>
        ) }</div> 

        <div className='mt-[2rem] flex flex-col gap-10'>

          {isLoading?'Loading...': data?.map((item)=>(
            <div key={item._id} className='flex flex-col gap-3'>
            <div className='flex gap-5 items-center'>
             <Image className='rounded-[100%] w-[2.5rem] h-[2.5rem]' src={item.user.image} alt='/scene2' width={30} height={20}/>
             <div className='flex flex-col  text-[0.7rem] font-bold'>
             <p className="name">{item.user.name}</p>
             <p className="date">{item.createdAt.slice(0,10)}</p>
             </div>
             </div>
             <div className='text-[0.8rem]'>{item.description}</div>
            </div>
          ))} 

        </div>
    </div>
  )
}

export default Comments
