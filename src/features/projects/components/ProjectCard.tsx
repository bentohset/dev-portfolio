import React from 'react'
import { ProjectType } from '../types/project.type'


export const ProjectCard = ({ project }: {project: ProjectType}) => {
  return (
    <div>
      <p>{project.title}</p>
      <p>{project.desc}</p>
    </div>
  )
}