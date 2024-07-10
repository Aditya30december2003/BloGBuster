import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const getData=async()=>{
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`,{
    cache:"no-store",
  })

  if(!res){
    throw new Error("Failed")
  }
  return res.json()
}

const CategoryList = async() => {
  const category=[
    {
      img:'style',
      color:'bg-red-300'
    },
    {
      img:'fashion',
      color:'bg-yellow-300'
    },
    {
      img:'food',
      color:'bg-pink-300'
    },
    {
      img:'travel',
      color : 'bg-orange-300'
    },
    {
      img:'culture',
      color:'bg-purple-300'
    },
    {
      img:'coding',
      color : 'bg-blue-300'
    },
  ]
  
  const data = await getData();
  
  function Capitalize (string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  return (
    <div className='mt-[2rem]'>
      <h1 className='text-[1.6rem] font-bold'>Popular Categories</h1>
      <div className='grid grid-cols-2 p-2 md:grid-cols-4 lg:flex items-center w-full gap-7 py-5'>
        {data.map((item)=>(
          <>
          <Link key={item._id} href={`/blog?cat=${item.title}`} className={`bg-pink-400 flex px-8 py-3 rounded-sm  gap-4`}>
          <Image className='rounded-[100%] object-cover' src={item.img} alt='' width={20} height={25}/>
          <p>{Capitalize(item.title)}</p>
          </Link>
          </>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
