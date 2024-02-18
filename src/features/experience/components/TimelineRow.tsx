import React from 'react'
import { ExperienceType } from '../types/experience.type'
import { TimelinePoint } from './TimelinePoint';

type Props = {
  experience: ExperienceType;
  isConcise: boolean;
}

export const TimelineRow = (props: Props) => {
  const exp = props.experience;
  return (
    <div className='flex flex-row gap-x-3 pr-6'>
      <div>
        <TimelinePoint image={exp.logo}/>
      </div>
      <div className='w-full'>
        <div className='flex flex-row justify-between w-full items-center'>
          <h1 className='font-semibold text-lg text-devPrimary'>{exp.role}</h1>
          <p className='font-medium text-zinc-600 dark:text-zinc-400 text-xs'>{exp.period}</p>
         
        </div>
        
        <h2 className='font-medium'>{exp.company}</h2>
        {props.isConcise ? (
          <p className='text-zinc-600 dark:text-zinc-400 animate-in slide-in-from-top-4 duration-200 fade-in'>{exp.concise}</p>
        ):(
          <ul className='list-disc list-inside space-y-2 animate-in slide-in-from-top-4 duration-200 fade-in'>
            {exp.points.map((o,i) => (
              <li key={i} className='text-zinc-600 dark:text-zinc-400 leading-5' >{o}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
