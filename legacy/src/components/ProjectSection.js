import React, { FC } from 'react';
import Section from './Section';
import ProjectCard from '@/components/ProjectCard'

const ProjectSection = ({ info, delay, openModal }) => {

  return (
    <Section delay={delay}>
        <div className='overflow-hidden dark:hover:bg-gray-800 hover:bg-gray-200 rounded-md p-4 group w-94 cursor-pointer' onClick={()=>{openModal(info)}}>
            <ProjectCard project={info} />
        </div>
    </Section>
  );
};

export default ProjectSection;