"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Pagination = ({page , hasPrev , hasNext}) => {
  const route = useRouter();
  const Next=()=>{

  }
  return (
    <div className='flex items-center gap-5 text-center w-[100%] lg:w-[58%] justify-between mt-10 p-2'>
      {hasPrev?<button className='text-center bg-red-700 text-white py-3 px-5 text-[0.8rem]' onClick={()=>route.push(`?page=${page-1}`)}>Previous</button> :<></>}
      {hasNext?<button className='text-center bg-red-700 text-white py-3 px-5 text-[0.8rem]' disabled={!hasNext} onClick={()=>route.push(`?page=${page+1}`)}>Next</button>:<></>}
    </div>
  )
}

export default Pagination
