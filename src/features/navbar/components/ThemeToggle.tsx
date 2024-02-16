import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useState } from 'react'

type Props = {}

const ThemeToggle = (props: Props) => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {
        resolvedTheme === "dark" ? (
          <Moon />
        ) : (
          <Sun />
        )
      }
    </button>
  )
}

export default ThemeToggle;
