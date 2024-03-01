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
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <span>
      {
        resolvedTheme === "dark" ? (
          <Moon />
        ) : (
          <Sun />
        )
      }
      </span>
    </button>
  )
}

export default ThemeToggle;
