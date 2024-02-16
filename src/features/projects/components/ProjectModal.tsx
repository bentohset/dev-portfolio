import React from 'react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ProjectType } from '../types/project.type';

type Props = {
  isOpen: boolean;
  project: ProjectType;
  toggleOpen: () => void;
}

export const ProjectModal = (props: Props) => {
  const project = props.project;
  return (
    <Dialog open={props.isOpen} onOpenChange={props.toggleOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
         {project.summary}
        </div>
      </DialogContent>
    </Dialog>
  )
};
