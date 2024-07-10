import React from 'react'

const Menu = () => {
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
  function Capitalize (string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  return (
    <div>
      <p className='text-[0.8rem] text-gray-400 font-bold'>Whats hot?</p>
      <h1 className='font-bold text-[1.4rem]'>Most Popular</h1>

      <div className='mt-5'>
        <h2 className='text-[0.7rem] font-bold bg-orange-500 text-white py-1 px-2 rounded-xl w-12'>Travel</h2>
        <p className='text-[0.85rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <div className='text-[0.7rem] flex items-center gap-2'><p className='font-bold'>John Doe</p><p>14.06.2024</p></div>
      </div>

      <div className='mt-5'>
        <h2 className='text-[0.7rem] font-bold bg-yellow-500 text-white py-1 px-2 rounded-xl w-14'>Culture</h2>
        <p className='text-[0.85rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <div className='text-[0.7rem] flex items-center gap-2'><p className='font-bold'>John Doe</p><p>14.06.2024</p></div>
      </div>

      <div className='mt-5'>
        <h2 className='text-[0.7rem] font-bold bg-blue-500 text-white py-1 px-2 rounded-xl w-14'>Coding</h2>
        <p className='text-[0.85rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <div className='text-[0.7rem] flex items-center gap-2'><p className='font-bold'>John Doe</p><p>14.06.2024</p></div>
      </div>

      <div className='mt-5'>
        <h2 className='text-[0.7rem] font-bold bg-pink-500 text-white py-1 px-2 rounded-xl w-14'>Fashion</h2>
        <p className='text-[0.85rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <div className='text-[0.7rem] flex items-center gap-2'><p className='font-bold'>John Doe</p><p>14.06.2024</p></div>
      </div>

      <div className='mt-[2rem]'>
      <p className='text-[0.8rem] text-gray-400 font-bold'>Discover by topic</p>
      <h1 className='text-[1.6rem] font-bold'>Categories</h1>
      <div className='grid grid-cols-3 p-2 items-center w-full gap-7 py-5'>
        {category.map((item)=>(
          <>
          <div href='' className={`flex ${item.color} px-2 py-1 text-[0.7rem] rounded-sm  gap-4 cursor-pointer`}>
          <p>{Capitalize(item.img)}</p>
          </div>
          </>
        ))}
      </div>
    </div>


    <div className='mt-[2rem]'>
      <p className='text-[0.8rem] text-gray-400 font-bold'>Chosen by the editor</p>
      <h1 className='text-[1.6rem] font-bold'>Editors Pick</h1>
      <div className='mt-5'>
        <h2 className='text-[0.7rem] font-bold bg-orange-500 text-white py-1 px-2 rounded-xl w-12'>Travel</h2>
        <p className='text-[0.85rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <div className='text-[0.7rem] flex items-center gap-2'><p className='font-bold'>John Doe</p><p>14.06.2024</p></div>
      </div>

      <div className='mt-5'>
        <h2 className='text-[0.7rem] font-bold bg-yellow-500 text-white py-1 px-2 rounded-xl w-14'>Culture</h2>
        <p className='text-[0.85rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <div className='text-[0.7rem] flex items-center gap-2'><p className='font-bold'>John Doe</p><p>14.06.2024</p></div>
      </div>

      <div className='mt-5'>
        <h2 className='text-[0.7rem] font-bold bg-blue-500 text-white py-1 px-2 rounded-xl w-14'>Coding</h2>
        <p className='text-[0.85rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <div className='text-[0.7rem] flex items-center gap-2'><p className='font-bold'>John Doe</p><p>14.06.2024</p></div>
      </div>

      <div className='mt-5'>
        <h2 className='text-[0.7rem] font-bold bg-pink-500 text-white py-1 px-2 rounded-xl w-14'>Fashion</h2>
        <p className='text-[0.85rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <div className='text-[0.7rem] flex items-center gap-2'><p className='font-bold'>John Doe</p><p>14.06.2024</p></div>
      </div>

    </div>

    </div>
  )
}

export default Menu
