import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BiLinkExternal } from 'react-icons/bi'

function ProjectModal({ isOpen, project, closeModal }) {
  function insertComma(arr) {
    return arr.flatMap((item, index) => (index == -1 || index == arr.length -1) ? [item] : [item, ', '])
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-50"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-50"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-50"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-50"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl dark:bg-gray-800 bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className='flex flex-row items-center justify-between w-full'>
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-6 text-[#faa356]"
                  >
                    {project.title}
                  </Dialog.Title>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md px-2 py-1 text-sm font-medium dark:bg-blue-100 dark:text-blue-900 dark:hover:bg-blue-200 bg-gray-200 text-gray-900 hover:bg-gray-300 focus:outline-none"
                    onClick={closeModal}
                  >
                    close
                  </button>
                </div>
                
                <div className="mb-4">
                  <p className='text-sm text-[#89929b] mb-1'>{project.sub}</p>
                  <p className="text-sm dark:text-[#ecf2f8] text-[#21262d] text-justify"
                    dangerouslySetInnerHTML={{ __html: project.summary }}
                  >
                  </p>
                </div>

                <div className='flex flex-col gap-y-2'>
                  {project.url && 
                    <p>
                      <span className='bg-[#faa356] dark:text-[#21262d] text-white px-2 rounded-md mr-2 py-0.5 '>website</span>
                      <div className='group inline-flex justify-center items-center'>
                        <a href={project.url} target='__blank' className='group-hover:underline'>Site</a>
                        <BiLinkExternal className='inline-flex ml-1'/>
                      </div>
                    </p>
                  }

                  {project.github && 
                    <p>
                      <span className='bg-[#faa356] dark:text-[#21262d] text-white px-2 rounded-md mr-2 py-0.5'>github</span>
                      <div className='group inline-flex justify-center items-center'>
                        <a href={project.github} target='__blank' className='group-hover:underline'>Github Link</a>
                        <BiLinkExternal className='inline-flex ml-1'/>
                      </div>
                      
                    </p>
                  }

                  {project.stack && project.stack.length > 0 && <p>
                    <span className='bg-[#faa356] dark:text-[#21262d] text-white px-2 rounded-md mr-2 py-0.5'>stack</span>
                    {project.stack && project.stack.length > 0 && insertComma(project.stack)}
                  </p>}
                  
                </div>
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ProjectModal