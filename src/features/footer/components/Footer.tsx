import React from 'react'

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Blog", href: "/blog" },
];

export const Footer = () => {
  return (
    <footer className='border dark:border-zinc-300/20 ring-zinc-100 px-24 py-8'>
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
