import React from 'react'
import { ProjectType } from '../types/project.type';
import { ProjectCard } from './ProjectCard';

type Props = {
  data: ProjectType[];
}

export const ProjectGrid = (props: Props) => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full self-center'>
      {props.data.map((o) => (
        <ProjectCard project={o} key={o.title}/>
      ))}
    </div>
  )
}