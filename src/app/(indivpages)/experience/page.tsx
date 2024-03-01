"use client";

// import { Button } from '@/components/ui/button'
// import { ArrowDown, Maximize, Minimize } from 'lucide-react'
import React from 'react'
// import { achievementsData, experiencesData } from '@/lib/data';
// import { ExperienceType, TimelineRow } from '@/features/experience';
// import { AchievementRow } from '@/features/experience/components/AchievementRow';

type Props = {}

const page = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [isMinimized, setIsMinimized] = useState(false);
  // const exps:ExperienceType[] = experiencesData;

  return (
    <div className='space-y-12 pb-12 w-full'>
      {/* <section className='w-full space-y-4'>
        <div className='flex flex-row justify-between w-full'>
          <h1 className='font-bold text-2xl'>My Journey</h1>
          <div className='flex flex-row gap-x-2'>
            <Button 
              className='bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-xs pl-4' 
              size="sm"
            >
              Download CV <span className='ml-2'><ArrowDown size={16}/></span>
            </Button>
            <Button 
              className='bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600' 
              size="sm" 
              onClick={() => setIsMinimized(prev => !prev)}
            >
              {!isMinimized ? <Minimize size={16}/> : <Maximize size={16}/>}
            </Button>
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

      <section className='w-full space-y-4'>
        <h1 className='font-bold text-2xl'>My Achievements</h1>
        <div className='rounded-lg border border-zinc-100 p-6 dark:border-zinc-700/40 animate-in slide-in-from-top-8 fade-in duration-500'>
          <div className='space-y-8'>
            {achievementsData.map((o,i) => (
              <AchievementRow key={i} achievement={o} />
            ))}
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default page