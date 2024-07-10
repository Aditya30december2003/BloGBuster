import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Card = ({key , item}) => {
  return (
    <Link href={`/posts/${item.slug}`} className='mt-[0.8rem] flex flex-col lg:flex-row w-full gap-5' key={key}>
      <div>{!item.img?<></>:<Image className='w-[40rem] h-[25rem] object-cover' src={item.img} alt='scene' width={1050} height={1050}/>}</div>
      <div className='flex flex-col gap-3 items-start'>
        <div className='text-[0.8rem] text-gray-600'>{item.createdAt.slice(0,10)}<span className='text-red-500 ml-3'>{item.cat}</span></div>
       <div>{item.title?<div className='font-bold text-[1.25rem]'>{item.title}</div>:<div>No title</div>}</div> 
        <div className='text-[0.9rem] text-gray-600'>{item.desc}</div>
        <div  className='border-b-2 border-red-500'>Read More</div>
      </div>
    </Link>
  )
}

export default Card
