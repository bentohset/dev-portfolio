import React from 'react'
import Image from 'next/image';
import { useMediaQuery } from 'usehooks-ts'

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
  const matches = useMediaQuery('(min-width: 768px)')

  const iconSize = matches ? 40 : 26
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className='md:h-24 md:w-24 h-16 w-16 rounded-2xl border border-zinc-100 md:p-6 p-2 dark:border-zinc-700/40 dark:bg-zinc-800'>
            <Image src={iconSVG} alt="iconskill" height={iconSize} width={iconSize} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className='z-50'>{props.skill}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
