import React from 'react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ProjectType } from '../types/project.type';
import Link from 'next/link';
import { LinkIcon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

type Props = {
  isOpen: boolean;
  project: ProjectType;
  toggleOpen: () => void;
}

const map: Record<string,string> = {
  hack: "Hackathon",
  self: "Self-Initiated",
}

export const ProjectModal = (props: Props) => {
  const project = props.project;

  const imageUrl = project.image ? `/images${project.image}` : "/grey.jpg"
  return (
    <Dialog open={props.isOpen} onOpenChange={props.toggleOpen}>
      <DialogContent className="w-11/12 h-fit max-h-[640px] max-w-none overflow-y-scroll">
        <div className='flex md:flex-row-reverse flex-col mt-6'>
        <div className='md:w-1/2 w-full h-2/3 flex items-center justify-center self-center p-2'>
            <Image src={imageUrl} alt="projimg" height={0} width={0} sizes={"100vw"} className='object-contain h-fit w-full rounded-lg'/>
          </div>
          <div className="p-4 space-y-4 md:w-1/2 w-full">
            <section className='space-y-2'>
              <h1 className='font-bold text-xl'>{project.title}</h1>

              {project.sub && <h2 className='font-semibold text-sm text-devPrimary'>{project.sub}</h2>}

              <Badge className=''>
                <h2 className='text-xs font-bold text-background'>{map[project.type]}</h2>
              </Badge>
            </section>
            

            <section className='rounded-lg border border-zinc-100 p-4 dark:border-zinc-700/40 dark:bg-zinc-900 bg-zinc-50'>
              <p
                className="text-base text-left text-zinc-600 dark:text-zinc-400"
                dangerouslySetInnerHTML={{ __html: project.summary }}
              ></p>
            </section>

            <section className='space-y-2'>
              <div className='flex flex-row gap-x-4 flex-wrap'>
                {project.stack.map(o => (
                  <p key={o} className='text-sm text-zinc-600 dark:text-zinc-400'>{o}</p>
                ))}
              </div>

              <div className='flex flex-row gap-x-4'>
                {project.url && 
                <Link 
                  href={project.url} 
                  target='__blank'
                  className="w-fit flex flex-row items-center gap-x-2 group hover:text-devPrimary dark:hover:text-devPrimary text-sm text-zinc-800 transition dark:text-zinc-200"
                >
                  <LinkIcon size={20}/>
                </Link>}
                {project.github && 
                <Link 
                  href={project.github} 
                  target='__blank'
                  className="w-fit flex flex-row items-center gap-x-2 group hover:text-devPrimary dark:hover:text-devPrimary text-sm text-zinc-800 transition dark:text-zinc-200"
                >
                  <FaGithub size={20}/>
                </Link>}
              </div>
            </section>

          </div>

          
        </div>
      </DialogContent>
    </Dialog>
  )
};
