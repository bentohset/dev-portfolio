import React from 'react'
import Navbar from './Navbar'
import { Container } from '@chakra-ui/react';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';

const Layout = ({ children }) => {
  return (
    <main className='flex flex-col bg-[#dfdfdf] dark:bg-gray-900 dark:text-[#ecf2f8] text-[#21262d]'>
        <Navbar/>
        <Container maxW='3xl' flex={1} minHeight='calc(100vh - 140px)' className=''>
          {children}
          
        </Container>
        <ScrollToTopButton/>
        <Footer/>
    </main>
  )
}

export default Layout