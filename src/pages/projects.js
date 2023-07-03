import ContainerBlock from '@/components/ContainerBlock'
import ProjectCard from '@/components/ProjectCard'
import userData from '@/constants/data'
import React from 'react'

function projects() {
  return (

    <section className='md:pt-32 pt-40 gap-y-8 flex flex-col md:h-screen h-full pb-12'>
        <div className="">
            <h1 className='text-4xl text-[#89929b]'>self.<span className='text-[#faa356]'>projects</span></h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4'>
            {userData.projects.map(obj => (
                <ProjectCard project={obj} key={obj.title}/>
            ))}
            
        </div>
        
    </section>    
  )
}

export default projects