import { BlogSection } from '@/features/blogs'
import React from 'react'

type Props = {}

const page = async (props: Props) => {
  return (
    <div className='h-full flex w-full'>
      <BlogSection />
    </div>
  )
}

export default page
