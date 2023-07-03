import ContainerBlock from '@/components/ContainerBlock'
import ExperienceBlock from '@/components/ExperienceBlock'
import userData from '@/constants/data'
import React, { useState } from 'react'

function experiences() {
  const [concise, setConcise] = useState()

  return (
    <section className='md:pt-32 pt-40 gap-y-8 flex flex-col h-full pb-20'>
      <div className="">
        <h1 className='text-4xl text-[#89929b]'>self.<span className='text-[#77bdfb]'>experiences</span></h1>
        <p>concise button</p>
        <p>print resume</p>
      </div>
      <div>
        {userData.experiences.map(obj => (
          <ExperienceBlock key={obj.company} exp={obj}/>
        ))}
      </div>

    </section>
  )
}

export default experiences