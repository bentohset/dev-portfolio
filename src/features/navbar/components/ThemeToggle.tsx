"use client";

import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

type Props = {}

const ThemeToggle = (props: Props) => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className='rounded-full bg-white px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:bg-zinc-800 dark:ring-white/10 dark:hover:ring-white/20'
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <span className='dark:text-zinc-200 text-zinc-400'>
      {
        resolvedTheme === "dark" ? (
          <Moon size={20} className='dark:text-zinc-200 text-zinc-400'/>
        ) : (
          <Sun size={20} className='dark:text-zinc-200 text-zinc-400'/>
        )
      }
      </span>
    </button>
  )
}

export default ThemeToggle;
