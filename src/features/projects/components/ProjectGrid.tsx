"use client";

import React, { useRef, useState } from 'react'
import { ProjectType } from '../types/project.type';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from 'usehooks-ts';

type Props = {
  data: ProjectType[];
}

export const ProjectGrid = (props: Props) => {
  const [project, setProject] = useState<ProjectType>();
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const gridRef = useRef<HTMLDivElement>(null)

  const matches = useMediaQuery('(min-width: 768px)');
  const initialCardCount = matches ? 6 : 4;

  const handleOpen = (proj: ProjectType) => {
    setProject(proj);
    setIsOpenModal(true);
  }

  const toggleExpand = () => {
    setIsExpanded((prev) => {
      if (prev) {
        const scrollPosition = gridRef.current ? gridRef.current?.offsetTop - 250 : 0;
        window.scrollTo({
          top: Math.max(scrollPosition, 0),
          behavior: 'smooth',
        });
      }
      return !prev;
    });
  }

  return (
    <div className='w-full self-center' ref={gridRef}>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full self-center'>
        {(isExpanded ? props.data : props.data.slice(0, initialCardCount)).map((o) => (
          <ProjectCard project={o} key={o.title} openModal={handleOpen} />
        ))}
        {project && <ProjectModal isOpen={isModalOpen} project={project} toggleOpen={() => setIsOpenModal(prev => !prev)} />}
      </div>
      {props.data.length > initialCardCount && (
        <Button
          className='mt-8 text-xs py-2 font-semibold bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:text-zinc-100'
          size="sm"
          onClick={toggleExpand}
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </Button>
      )}
    </div>

  )
}
