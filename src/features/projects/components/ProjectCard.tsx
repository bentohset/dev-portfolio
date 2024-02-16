import React from 'react'
import { ProjectType } from '../types/project.type'
import Image from 'next/image'
import { Eye } from 'lucide-react';


export const ProjectCard = ({ project, openModal } : {
  project: ProjectType; 
  openModal: (proj:ProjectType)=>void;
}) => {
  return (
    <div
      className='transition cursor-pointer rounded-xl text-left p-4 relative group hover:bg-zinc-50 hover:dark:bg-zinc-800/50 '
      onClick={() => openModal(project)}
    >
      <div className='z-40'>
        <div className='md:h-40 h-52 mb-4 relative'>
          <div className='rounded-lg h-full w-full absolute bg-black/60 z-50 transition hidden group-hover:flex items-center justify-center'>
            <div className='bg-devPrimary rounded-lg p-2 h-12 w-12 items-center justify-center flex'>
              <Eye size={20} color='white'/>
            </div>
          </div>
          <Image src={`/images${project.image}`} alt={project.title}
            className='object-cover w-full h-full rounded-lg'
            sizes="100vw"
            width={0}
            height={0}
            objectFit='cover'
          />
        </div>
        <p className='font-semibold text-base'>{project.title}</p>
        <p className='text-sm text-zinc-600 dark:text-zinc-400'>{project.desc}</p>
      </div>
    </div>
  )
}