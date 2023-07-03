import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
        <Navbar/>
        <div className='bg-[#F1F1F1] dark:bg-gray-900 h-full z-10 px-10 dark:text-[#ecf2f8] text-[#21262d]'>
            {children}
        </div>
    </>
  )
}

export default Layout