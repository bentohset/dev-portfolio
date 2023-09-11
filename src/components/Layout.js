import React from 'react'
import Navbar from './Navbar'
import { Container } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <main className='flex flex-col bg-[#dfdfdf] dark:bg-gray-900 dark:text-[#ecf2f8] text-[#21262d]'>
        <Navbar/>
        <Container maxW='3xl' flex={1} minHeight='calc(100vh - 133px)' className='pt-0 md:pt-0'>
          {children}
        </Container>
    </main>
  )
}

export default Layout