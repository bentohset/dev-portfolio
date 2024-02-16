import React from 'react'

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Blog", href: "/blog" },
];

export const Footer = () => {
  return (
    <footer className='w-full bg-white dark:bg-zinc-900 border-zinc-100 border-t dark:border-zinc-500/20 px-24 py-8'>
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
    </footer>
  )
};
