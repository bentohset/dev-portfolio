import React from 'react'
import Image from 'next/image';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { iconMap } from '../types/icon.data';
import { Button } from '@/components/ui/button';


type Props = {
  skill: string;
}

export const SkillCard = (props: Props) => {
  const iconSVG = iconMap[props.skill] ?? "";
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className='h-24 w-24 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 dark:bg-zinc-800'>
            <Image src={iconSVG} alt="iconskill" height={40} width={40} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className='z-50'>{props.skill}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
