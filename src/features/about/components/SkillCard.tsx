import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useMediaQuery } from 'usehooks-ts'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { iconMap } from '../types/icon.data';
import { useTheme } from 'next-themes';

interface IconObj {
  default: string;
  dark: string;
}

type Props = {
  skill: string;
}

export const SkillCard = (props: Props) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const matches = useMediaQuery('(min-width: 768px)');
  const iconSize = matches ? 40 : 26;

  useEffect(() => setMounted(true), []);

  const iconSVG = (skill: string): string => {
    if (typeof iconMap[skill] === "object") {
      if (theme === "dark") {
        return (iconMap[skill] as IconObj).dark;
      } else {
        return (iconMap[skill] as IconObj).default;
      }
    } else if (typeof iconMap[skill] === "string"){
      return iconMap[skill] as string;
    } else {
      return "";
    }
  }
  
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className='md:h-24 md:w-24 h-16 w-16 rounded-2xl border border-zinc-100 md:p-6 p-2 dark:border-zinc-700/40 dark:bg-zinc-800 bg-zinc-50'>
            {mounted && <Image src={iconSVG(props.skill)} alt="iconskill" height={iconSize} width={iconSize} />}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p className='z-50'>{props.skill}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
