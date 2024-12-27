"use client";

import React from 'react'
import { BlogCard } from './BlogCard';
import { BlogType } from '../types/blog.type';

type Props = {
  data: BlogType[];
}

export const BlogGrid = (props: Props) => {
  return (
    props.data.length > 0 ? (
      <div className='grid grid-cols-1 gap-4 md:w-2/3 w-full self-center'>
        {props.data.map((o) => (
          <BlogCard blog={o} key={o.title} />
        ))}
      </div>
    ) : (
      <div className='w-full items-start'>
        <p className='text-zinc-600 dark:text-zinc-400'>Work in progress...</p>
      </div>
    )
  )
}
