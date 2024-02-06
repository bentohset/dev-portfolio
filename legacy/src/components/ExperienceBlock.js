import React from 'react'
import Section from './Section'

function ExperienceBlock({ exp, isConcise, delay }) {
  const Tag = ({ tag }) => {

    return (
      <div className={`dark:bg-sky-900 bg-gray-300 dark:text-[#a2d2fb] text-gray-900 w-fit h-fit rounded-md px-1 text-sm`}>
        <p className='font-bold'>{tag}</p>
      </div>
    )
  }

  return (
    <Section delay={delay}>
      <div className='flex flex-col items-start'>

        <div className='flex flex-col w-full justify-start'>
          <div className='flex md:flex-row w-full flex-col justify-between md:items-center items-start'>
            <p className='font-bold sm:text-xl text-lg'>{exp.role}</p>
            <p className='font-bold sm:text-xl text-lg'>{exp.period}</p>
          </div>
          
          <p className='dark:text-[#a2d2fb] font-bold sm:text-xl text-lg mb-2'>{exp.company}</p>
          <ul className='space-y-2'>
            {isConcise ? (
              <p>{exp.concise}</p>
            ) : (
              exp.points.map((elem, index) => (
                <li key={index} className=''><span className='font-bold text-[#89929b] pr-2'>{`>`}</span> {elem}</li>
              ))
            )}
          </ul>
        </div>
        <div className='flex flex-row gap-x-2 mt-2 flex-wrap gap-y-2'>
          {
            exp.skills.map((skill, i) => (
              <Tag tag={skill} key={i} color='blue'/>
            ))
          }
        </div>
      </div>
    </Section>
  )
}

export default ExperienceBlock