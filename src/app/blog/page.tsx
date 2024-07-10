import CardList from '@/Components/CardList/CardList'
import Menu from '@/Components/Menu/Menu'
import React from 'react'

const blog = ({searchParams}) => {
  const page = parseInt(searchParams)||1;
  const {cat} = searchParams;
  function Capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  return (
    <div>
    <div className='bg-orange-500 text-white text-[1.2rem] font-bold text-center p-2'>{cat ?  Capitalize(cat)  : <></> }blog</div>
    <div className="flex flex-col lg:flex-row  gap-[50px] mt-[1.2rem] w-full">
    <div className="w-[100%] lg:w-[75%]"><CardList page={page} cat={cat}/></div>
    <div className="w-[100%] lg:w-[25%]"><Menu /></div>
    </div>
    </div>
  )
}

export default blog
