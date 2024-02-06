import React, { FC } from 'react';
import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});


const Section = ({ children, delay, margin }) => {
  return (
    <ChakraBox
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay }}
      mb={margin ? margin : 2}
    >
      {children}
    </ChakraBox>
  );
};

export default Section;