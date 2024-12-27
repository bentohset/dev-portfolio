import React from 'react'

import { blogsData } from '@/lib/data';
import { BlogGrid, BlogType } from '@/features/blogs';

type Props = {}

export const BlogSection = (props: Props) => {
  const blogs: BlogType[] = blogsData;
  console.log(blogsData)
  return (
    <div className='w-full'>
      <h1 className='font-bold text-4xl'>My Blogs</h1>
      <div className='flex flex-col items-center justify-center w-full h-full py-8'>
        <BlogGrid data={blogs} />
      </div>
    </div>
  )
}
