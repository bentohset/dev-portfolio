import Image from 'next/image';
import React from 'react'

type Props = {
  image: string;
}

export const TimelinePoint = (props: Props) => {
  return (
    <div className='rounded-full border border-zinc-100 p-1 dark:border-zinc-700/40 dark:bg-zinc-800'>
      <Image src={props.image} alt="pointimg" width={30} height={30} className='rounded-full object-contain'/>
    </div>
  )
}
