import React from 'react'

function ProjectCard({project}) {
  const Tag = ({ tag }) => {

    return (
      <div className={`dark:bg-yellow-900 bg-gray-300 dark:text-[#faa356] text-gray-900 w-fit h-fit rounded-md px-1 text-sm`}>
        <p className='font-bold'>{tag}</p>
      </div>
    )
  }
  return (
    // <a href={project.url} target='__blank' className='cursor-pointer'>
      <div className='flex md:flex-row-reverse flex-col justify-between items-start'>
        <div className='rounded-md md:w-1/3 w-full md:h-40 h-52 object-cover bg-gray-600'>
            {project.image && <img src={project.image} className="rounded-md transform group-hover:scale-105 transition duration-300 object-cover h-full w-full"/>}
        </div>
        <div className='flex flex-col pr-6 justify-start text-left md:w-2/3 w-full'>
          <p className='dark:text-[#faa356] dark:bg-inherit text-xl mt-2 bg-[#faa356] text-black w-fit px-2 rounded-md dark:px-0 mb-1 dark:mb-0'>{project.title}</p>
          <p className='dark:text-[#ecf2f8] text-sm'>{project.sub}</p>
          <p className='dark:text-[#89929b] text-[#21262d] text-justify mt-1'>{project.desc}</p>
          <div className='flex flex-row gap-x-2 mt-2 flex-wrap gap-y-2'>
            {project.stack.map((tech, i) => (
              <Tag tag={tech} key={i}/>
            ))}
          </div>
        </div>
        
      </div>
    // </a>
  )
}

export default ProjectCard