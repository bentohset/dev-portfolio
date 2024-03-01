"use client";

import React, { useState } from 'react'
import { ProjectType } from '../types/project.type';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

type Props = {
  data: ProjectType[];
}

export const ProjectGrid = (props: Props) => {
  const [project, setProject] = useState<ProjectType>();
  const [isModalOpen, setIsOpenModal] = useState(false);

  const handleOpen = (proj: ProjectType) => {
    setProject(proj);
    setIsOpenModal(true);
  }

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full self-center'>
      {props.data.map((o) => (
        <ProjectCard project={o} key={o.title} openModal={handleOpen}/>
      ))}
      {project && <ProjectModal isOpen={isModalOpen} project={project} toggleOpen={() => setIsOpenModal(prev => !prev)}/>}
    </div>
  )
}