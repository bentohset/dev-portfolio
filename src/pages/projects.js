import ContainerBlock from '@/components/ContainerBlock'
import ProjectCard from '@/components/ProjectCard'
import ProjectModal from '@/components/ProjectModal'
import userData from '@/constants/data'
import React, { useState } from 'react'

function projects() {
  const [isOpen, setIsOpen] = useState(false)
  const [project, setProject] = useState({})

  const hanldeProject = (index) => {
    setProject(index)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = (obj) => {
    setProject(obj)
    setIsOpen(true)
  }

  

  return (

    <section className='md:pt-32 pt-40 gap-y-8 flex flex-col h-full pb-24'>
        <div className="">
            <h1 className='text-4xl text-[#89929b]'>self.<span className='text-[#faa356]'>projects</span></h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4 '>
            {userData.projects.map(obj => (
              <div className='overflow-hidden dark:hover:bg-gray-800 hover:bg-gray-200 rounded-md p-4 group w-94 cursor-pointer' onClick={()=>{openModal(obj)}}>
                <ProjectCard project={obj} key={obj.title}/>
              </div>
            ))}
            
        </div>
        <ProjectModal isOpen={isOpen} project={project} closeModal={closeModal}/>
    </section>    
  )
}

export default projects