import React from 'react'

import { userData } from '@/lib/data'
import { SkillCard } from '@/features/about'

type Props = {}

const page = async (props: Props) => {
  return (
    <div className='space-y-12 pb-12'>
      <section className='space-y-4'>
        <h1 className='font-bold text-4xl'>Benjamin Toh</h1>
        <h2 className='font-semibold'>{userData.about.title}</h2>
        <p className='text-base text-justify text-zinc-600 dark:text-zinc-400'>{userData.about.bio}</p>
      </section>

      <section className='space-y-4'>
        <h1 className='font-semibold text-3xl'>Skills</h1>
        <h2 className='font-semibold'>Languages</h2>
        <div className='flex flex-row gap-4 flex-wrap'>
          {userData.skills.languages.map((o) => (
            <SkillCard skill={o} key={o}/>
          ))}
        </div>


        <h2 className='font-semibold'>Frameworks</h2>
        <div className='flex flex-row gap-4 flex-wrap'>
          {userData.skills.frameworks.map((o) => (
            <SkillCard skill={o} key={o}/>
          ))}
        </div>

        <h2 className='font-semibold'>Database / Cloud</h2>
        <div className='flex flex-row gap-4 flex-wrap'>
          {userData.skills.database.map((o) => (
            <SkillCard skill={o} key={o}/>
          ))}
        </div>

        <h2 className='font-semibold'>Tools</h2>
        <div className='flex flex-row gap-4 flex-wrap'>
          {userData.skills.tools.map((o) => (
            <SkillCard skill={o} key={o}/>
          ))}
        </div>

      </section>
    </div>
  )
}

export default page