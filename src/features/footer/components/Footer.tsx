import { navigation } from '@/lib/data';
import React from 'react'
import { SiBento } from 'react-icons/si';

export const Footer = () => {
  return (
    <footer className='w-full bg-white dark:bg-zinc-900 border-zinc-100 border-t dark:border-zinc-500/20 px-24 py-8 space-y-2'>
      <div className='flex flex-row gap-x-4 text-sm font-medium text-zinc-800 dark:text-zinc-200'>
        {navigation.map((o) => (
          <a
            key={o.name}
            href={o.href}
            className="transition hover:text-devPrimary dark:hover:text-devPrimary"
          >
            {o.name}
          </a>
        ))}
      </div>
      <p className='flex flex-row gap-x-2 items-center text-sm text-zinc-600 dark:text-zinc-400'>
        <SiBento className='text-zinc-600 dark:text-zinc-400'/>bentohset &copy;
      </p>
    </footer>
  )
};
