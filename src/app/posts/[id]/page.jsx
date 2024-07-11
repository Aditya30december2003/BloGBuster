import React from 'react'
import Image from 'next/image'
import Menu from '@/Components/Menu/Menu'
import Comments from '@/Components/comments/Comments'

const getData = async (id) => {
  
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data. Status: ${res.status}`);
  }

  const data = await res.json();
  console.log("Fetched data:", data);
  return data;
};

const Page = async({params}) => {
  const {id}=  params

  
    const data = await getData(id);
    console.log("Fetched data:", data);
 
  return (
    <>
    <div className='flex items-center gap-6 w-full justify-between'>

      <div className='w-[100%] lg:w-[50%] flex flex-col gap-10'>
      <div className="title text-[2.2rem] font-bold w-[100%] lg:w-[86%]">
        {data?.title}
      </div>
      <div className="name flex gap-3 items-center">
        <Image  className='rounded-[100%] object-cover w-[2.2rem] h-[2.2rem]' src={data.user.image} alt='scene2' width={30} height={20}/>
        <div className='flex flex-col gap-1 text-[0.7rem] font-bold'>
        <p className="name">{data?.userEmail}</p>
        <p className="date">{data?.createdAt.slice(0,10)}</p>
        </div>
      </div>
      </div>

      <div className="image w-[50%] hidden lg:block">
      <Image className='rounded-md' src={data.img} alt='scene2' width={400} height={300}/>
      </div>

    </div>

    <div className='mt-[2rem] flex flex-col lg:flex-row w-full gap-10 text-[0.86rem]'>
    <div className='w-[100%] lg:w-[70%] flex flex-col gap-5 mt-5'>
      <div className='w-[100%] lg:w-[70%] flex flex-col gap-5 mt-5' />
        

        <div>
          <Comments postSlug={id}/>
        </div>
   </div>   
   

      <div className='w-[100%] lg:w-[30%]'>
      <Menu />
      </div>

    </div>

    </>

    
  )
}

export default Page
