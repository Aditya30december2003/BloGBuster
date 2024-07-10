import CardList from '@/Components/CardList/CardList'
import Menu from '@/Components/Menu/Menu'
import React from 'react'

interface BlogProps {
  searchParams: {
    page?: number;
    cat?: string;
  };
}

const Blog: React.FC<BlogProps> = ({ searchParams }) => {
  const { page = 1, cat } = searchParams || {};
  
  function capitalize(string: string | undefined) {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : '';
  }

  return (
    <div>
      <div className='bg-orange-500 text-white text-[1.2rem] font-bold text-center p-2'>
        {cat ? capitalize(cat) + ' Blog' : 'Blog'}
      </div>
      <div className="flex flex-col lg:flex-row gap-[50px] mt-[1.2rem] w-full">
        <div className="w-full lg:w-[75%]">
          <CardList page={page} cat={cat} />
        </div>
        <div className="w-full lg:w-[25%]">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Blog;

