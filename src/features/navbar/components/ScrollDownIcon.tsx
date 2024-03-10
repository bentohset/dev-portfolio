import { ArrowDown } from 'lucide-react'
import React from 'react'

type Props = {}

export const ScrollDownIcon = (props: Props) => {
  return (
    <div className="motion-safe:animate-bounce w-10 h-10 p-2 border border-zinc-100 dark:border-zinc-700/40 dark:bg-zinc-800 bg-zinc-50 shadow-lg shadow-zinc-800/5 rounded-full flex items-center justify-center">
      <ArrowDown className='w-6 h-6 text-devPrimary'/>
    </div>
  )
}
