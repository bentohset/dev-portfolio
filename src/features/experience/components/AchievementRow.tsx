import React from 'react'
import { AchievementType, ExperienceType } from '../types/experience.type'
import { TimelinePoint } from './TimelinePoint';

type Props = {
  achievement: AchievementType;
}

export const AchievementRow = (props: Props) => {
  const o = props.achievement;
  return (
    <div className='flex flex-row gap-x-3 pr-6'>
      <div>
        <TimelinePoint image={o.image || "/grey.jpg"}/>
      </div>
      <div className='w-full'>
        <div className='flex flex-row justify-between w-full items-center'>
          <h1 className='font-semibold text-lg text-devPrimary'>{o.title}</h1>
          <p className='font-medium text-zinc-600 dark:text-zinc-400 text-xs'>{o.period}</p>
         
        </div>
        
        <h2 className='font-medium'>{o.award}</h2>
        <p className='text-zinc-600 dark:text-zinc-400'>{o.desc}</p>
        
      </div>
    </div>
  )
}
