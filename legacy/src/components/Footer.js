import React, { FC } from 'react';
import { Container, Text } from '@chakra-ui/react';
import { SiBento } from 'react-icons/si';
import { useRouter } from 'next/router'


const Footer = () => {
  const router = useRouter()

  // dont show on index.js
  return router.asPath !== "/" && (
    <Container as='footer' pb={6} className='flex flex-row justify-center items-center gap-x-2 py-8'>
      <Text fontSize='sm' className='text-[#89929b]'>
        bentohset
      </Text>
      <SiBento color='#89929b'/>
    </Container>
  );
};

export default Footer;