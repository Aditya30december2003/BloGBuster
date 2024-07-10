import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className=' bg-gray-200 w-full text-black py-10 mb-[1%] bottom-0 right-0 left-0 mt-[90px]'>
  
  <div className='w-[80%] lg:w-[80%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10'>

      <div className='w-[100%] lg:w-[50%] px-3 py-7'>
        <h1 className='font-bold text-[1.2rem]'>BloGBuster</h1>
        <p className='text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam et delectus tenetur, reprehenderit nostrum praesentium voluptatum ab sint asperiores autem.</p>
        <ul className='flex gap-3 mt-4'>
            <li className='cursor-pointer'>
                <Image src='./facebook.png' alt='facebook' width={20} height={20}/>
            </li>
            <li className='cursor-pointer'>
                <Image src='./instagram.png' alt='instagram' width={20} height={20}/>
            </li>
            <li className='cursor-pointer'>
                <Image src='./tiktok.png' alt='tiktok' width={20} height={20}/>
            </li>
            <li className='cursor-pointer'>
                <Image src='./youtube.png' alt='youtube' width={20} height={20}/>
            </li>
        </ul>
      </div>

      <div className='w-[50%] flex items-center justify-center gap-20'>

        <div className='text-[0.76rem] flex flex-col gap-2'>
          <h1 className='font-bold cursor-pointer'>Links</h1>
          <p className='cursor-pointer'>HomePage</p>
          <p className='cursor-pointer'>Blog</p>
          <p className='cursor-pointer'>About </p>
          <p className='cursor-pointer'>Contact</p>
        </div>

        <div className='text-[0.76rem] flex flex-col gap-2'>
          <h1 className='font-bold cursor-pointer'>Tags</h1>
          <p className='cursor-pointer'>Style</p>
          <p className='cursor-pointer'>Fashion</p>
          <p className='cursor-pointer'>Coding</p>
          <p className='cursor-pointer'>Travel</p>
        </div>

        <div className='text-[0.76rem] flex flex-col gap-2'>
          <h1 className='font-bold cursor-pointer'>Social</h1>
          <p className='cursor-pointer'>Facebook</p>
          <p className='cursor-pointer'>Instagram</p>
          <p className='cursor-pointer'>TikTok</p>
          <p className='cursor-pointer'>Youtube</p>
        </div>

      </div>

      </div>

    </div>
  )
}

export default Footer
