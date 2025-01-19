import React from 'react'
import { BlogType } from '../types/blog.type'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';


export const BlogCard = ({ blog } : {
  blog: BlogType;
}) => {
  const imgUrl = blog.image ?? "";
  return (
    <Link href={blog.url} rel="noopener noreferrer" target="_blank">
      <div
        className='animate-in slide-in-from-top-8 fade-in duration-500 cursor-pointer rounded-xl text-left p-4 relative group hover:bg-zinc-50 hover:dark:bg-zinc-800 '
      >
        <div className='z-30'>
          <div className='md:h-60 h-60 mb-4 relative'>
            <Image src={imgUrl} alt={blog.title}
              className='object-cover w-full h-full rounded-lg'
              sizes="100vw"
              width={0}
              height={0}
            />
          </div>

          <p className='font-semibold text-base'>{blog.title}</p>
          <p className='text-xs text-zinc-600 dark:text-zinc-400'>{blog.date}</p>
          <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-2'>{blog.subtitle}</p>

          <div className='my-2 flex gap-x-2'>
            {blog.topics.map((o) => (
              <Badge variant='secondary' className='cursor-default disabled:pointer-events-none disabled:cursor-default' key={o}>
                <p className='text-xs text-background text-zinc-600 dark:text-white'>{o}</p>
              </Badge>
            ))}
          </div>

          <div className='text-devPrimary mt-4 text-sm flex-row flex gap-x-2 items-center'>
            <p className=''>Read blog</p>
            <span className=''><ChevronRight size={14}/></span>
          </div>
        </div>
      </div>
    </Link>
  )
}
