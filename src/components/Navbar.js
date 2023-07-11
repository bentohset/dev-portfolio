import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import userData from '@/constants/data';
import { FaEnvelope, FaGithub, FaLink, FaLinkedin } from 'react-icons/fa'

function Navbar() {
    const router = useRouter()
    const { theme, setTheme } = useTheme()

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

  return (
    <nav className="mx-auto px-10 py-6 md:py-6 fixed top-0 z-50 w-full dark:bg-gray-800 bg-white">
    <div className="flex md:flex-row justify-between items-center">
        <div className="flex flex-row">
            <Link
                href="/"
            >
                <h1 className="font-semibold text-xl dark:text-gray-100">
                    benjamin toh
                </h1>
            </Link>

            <div className="ml-10 space-x-8 hidden md:flex justify-center items-center">
            <Link
                href="/about"
                className={`text-base  ${
                router.asPath === "/about"
                    ? "text-gray-800 font-bold dark:text-gray-400"
                    : "text-gray-600 dark:text-gray-300 font-normal "
                }`}
            >
                {router.asPath == '/about' && (
                    `//`
                )}
                about{" "}
                {/* {router.asPath === "/about" && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-down inline-block h-3 w-3"
                    viewBox="0 0 16 16"
                >
                    <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                </svg>
                )} */}

            </Link>

            <Link
                href="/projects"
                className={`text-base  ${
                router.asPath === "/projects"
                    ? "text-gray-800 font-bold dark:text-gray-400"
                    : "text-gray-600 dark:text-gray-300 font-normal "
                }`}
            >
                {router.asPath == '/projects' && (
                    `//`
                )}
                projects{" "}
                {/* {router.asPath === "/projects" && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-down inline-block h-3 w-3"
                    viewBox="0 0 16 16"
                >
                    <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                </svg>
                )} */}
            </Link>

            <Link
                href="/experiences"
                className={`text-base  ${
                router.asPath === "/experiences"
                    ? "text-gray-800 font-bold dark:text-gray-400"
                    : "text-gray-600 dark:text-gray-300 font-normal "
                }`}
            >
                {router.asPath == '/experiences' && (
                    `//`
                )}
                experiences{" "}
                {/* {router.asPath === "/experiences" && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-down inline-block h-3 w-3"
                    viewBox="0 0 16 16"
                >
                    <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                </svg>
                )} */}
            </Link>
        </div>
        </div>


        

        
        <div className="space-x-6 flex flex-row items-center">
          <a href={userData.contacts.github} target='__blank'>
            <FaGithub className='dark:text-[#c6cdd5] text-[#89929b] hover:text-[#21262d] dark:hover:text-[#ecf2f8] text-2xl'/>
          </a>
          <a href={userData.contacts.linkedin} target='__blank'>
            <FaLinkedin className='dark:text-[#c6cdd5] text-[#89929b] hover:text-[#21262d] dark:hover:text-[#ecf2f8] text-2xl'/>
          </a>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-6 h-6 p-1 rounded focus:outline-none items-center justify-center flex"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="space-x-8 block md:hidden mt-4">
        <Link
          href="/about"
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          {router.asPath == '/about' && (
            `//`
          )}
          about
        </Link>
        <Link
          href="/projects"
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          {router.asPath == '/projects' && (
            `//`
          )}
          projects
        </Link>
        <Link
          href="/experiences"
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          {router.asPath == '/experiences' && (
            `//`
          )}
          experiences
        </Link>
      </div>
    </nav>
  )
}

export default Navbar