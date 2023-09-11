import React, { FC } from 'react';
import { Container, Text } from '@chakra-ui/react';


const Footer = () => {
  return (
    <Container as='footer' maxW='3xl' pb={6} centerContent>
      <Text fontSize='sm'>
        © Benjamin.
      </Text>
    </Container>
  );
};

export default Footer;