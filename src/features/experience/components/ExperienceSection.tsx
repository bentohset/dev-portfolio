import React, { useState } from 'react'
import { ArrowDown, Maximize, Minimize } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { userData, experiencesData } from '@/lib/data';
import { ExperienceType, TimelineRow } from '@/features/experience';
import { AchievementRow } from '@/features/experience/components/AchievementRow';

type Props = {}

export const ExperienceSection = (props: Props) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const exps:ExperienceType[] = experiencesData;
  return (
    <div className='space-y-12 py-24 w-full' id="experience">
      <section className='w-full space-y-4'>
        <div className='flex md:flex-row flex-col space-y-4 md:space-y-0 justify-between w-full'>
          <h1 className='font-bold text-4xl'>My Journey</h1>
          <div className='flex flex-row gap-x-2'>
            <Button 
              className='bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-xs pl-4' 
              size="sm"
            >
              <a
                href={userData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className='flex flex-row'
              >
                Download CV <span className='ml-2'><ArrowDown size={16}/></span>
              </a>
            </Button>
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                <Button 
                  className='bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600' 
                  size="sm" 
                  onClick={() => setIsMinimized(prev => !prev)}
                >
                  {!isMinimized ? <Minimize size={16}/> : <Maximize size={16}/>}
                </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isMinimized ? "Expand" : "Minimize"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className='rounded-lg border border-zinc-100 p-6 dark:border-zinc-700/40 animate-in slide-in-from-top-8 fade-in duration-500'>
          <div className='space-y-8'>
            {experiencesData.map((o,i) => (
              <TimelineRow key={i} experience={o} isConcise={isMinimized} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
