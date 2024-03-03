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
        <div className='flex md:flex-row flex-col md:justify-between justify-start w-full md:items-center items-start'>
          <h1 className='font-semibold md:text-lg text-md text-devPrimary'>{exp.role}</h1>
          <p className='font-medium text-zinc-600 dark:text-zinc-400 text-xs'>{exp.period}</p>
         
        </div>
        
        <h2 className='font-medium'>{exp.company}</h2>
        {props.isConcise ? (
          <p className='text-zinc-600 dark:text-zinc-400 animate-in slide-in-from-top-4 duration-200 fade-in md:text-md text-sm md:text-left text-justify'>{exp.concise}</p>
        ):(
          <ul className='list-disc list-inside space-y-2 animate-in slide-in-from-top-4 duration-200 fade-in md:text-md text-sm md:text-left text-justify'>
            {exp.points.map((o,i) => (
              <li key={i} className='text-zinc-600 dark:text-zinc-400 leading-5' >{o}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
