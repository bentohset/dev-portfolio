import ContainerBlock from '@/components/ContainerBlock'
import ExperienceBlock from '@/components/ExperienceBlock'
import userData from '@/constants/data'
import React, { useState } from 'react'

function experiences() {
  const [concise, setConcise] = useState(false)
  const handleConciseToggle = () => {
    setConcise(prev => !prev)
  }

  return (
    <section className='md:pt-32 pt-40 gap-y-8 flex flex-col h-screen'>
      <div className="">
        <div className='flex flex-row gap-x-8 items-center'>
          <h1 className='text-4xl text-[#89929b]'>self.<span className='text-[#77bdfb]'>experiences</span></h1>
          <button onClick={handleConciseToggle} className='bg-[#77bdfb] dark:text-[#21262d] rounded-md px-2 text-xl font-bold hover:text-[#21262d] dark:hover:text-[#ecf2f8] text-[#ecf2f8]'>
            {concise ? "Full" : "Concise"}
          </button>
        </div>
        
        <p className='mt-2'>I'm looking for a job! If you see me as a good fit, check my <a href='/Resume.pdf' target='__blank' className='underline font-bold hover:text-[#7ce38b]'>CV</a> :)</p>
      </div>
      <div>
        {userData.experiences.map(obj => (
          <ExperienceBlock key={obj.company} exp={obj} isConcise={concise}/>
        ))}
      </div>

    </section>
  )
}

export default experiences