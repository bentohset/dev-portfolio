import React from 'react'

function ExperienceBlock({ exp }) {
  return (
    <div className='flex sm:flex-col md:flex-col lg:flex-row flex-col'>
        <div className='flex md:w-full sm:w-full lg:w-1/6 w-full'>
            <p className=''>{exp.period}</p>
        </div>
        <div className='flex flex-col sm:w-full md:w-full lg:w-5/6 w-full justify-start'>
            <p className='dark:text-[#a2d2fb] font-bold text-lg mb-2'>{exp.role} at {exp.company}</p>
            <ul className='space-y-2'>
            {exp.points.map((elem, index) => (
                <li key={index} className=''><span className='font-bold text-[#89929b] pr-2'>{`>`}</span> {elem}</li>
            ))}
            </ul>
        </div>

    </div>
  )
}

export default ExperienceBlock