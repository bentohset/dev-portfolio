import React from 'react'

function ProjectCard({project}) {
  return (
    <a href={project.url} target='__blank' className='cursor-pointer'>
        <div className='dark:hover:bg-gray-800 hover:bg-gray-200 rounded-md p-4 '>
            <div className='bg-gray-400 rounded-md h-40'>
                {project.image}
            </div>
            <p className='text-[#faa356] text-xl mt-2'>{project.title}</p>
            <p className='text-[#89929b]'>{project.desc}</p>
        </div>
    </a>
  )
}

export default ProjectCard