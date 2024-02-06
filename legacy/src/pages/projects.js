import ContainerBlock from '@/components/ContainerBlock'

import ProjectModal from '@/components/ProjectModal'
import ProjectSection from '@/components/ProjectSection'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import Section from '@/components/Section'
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

    <section className='gap-y-8 flex flex-col h-full'>
        <Section delay={0.1}>
            <h1 className='text-4xl text-[#89929b]'>self.<span className='text-[#faa356]'>projects</span></h1>
        </Section>
        {userData.projects.map((obj, i) => (
          <ProjectSection delay={0.3 + 0.1 * i} info={obj} key={i} openModal={openModal}/>
        ))}
        
        <ProjectModal isOpen={isOpen} project={project} closeModal={closeModal}/>
        
    </section>    
  )
}

export default projects