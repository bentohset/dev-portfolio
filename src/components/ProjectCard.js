import React from 'react'

function ProjectCard({project}) {
  return (
    // <a href={project.url} target='__blank' className='cursor-pointer'>
      <>
        <div className='rounded-md h-48 object-cover bg-gray-600'>
            {project.image && <img src={project.image} className="rounded-md transform group-hover:scale-105 transition duration-300 object-cover h-full w-full"/>}
        </div>
        <p className='dark:text-[#faa356] dark:bg-inherit text-xl mt-2 bg-[#faa356] text-black w-fit px-2 rounded-md dark:px-0 mb-1 dark:mb-0'>{project.title}</p>
        <p className='dark:text-[#ecf2f8] text-sm'>{project.sub}</p>
        <p className='dark:text-[#89929b] text-[#21262d] text-justify mt-1'>{project.desc}</p>
      </>
    // </a>
  )
}

export default ProjectCard