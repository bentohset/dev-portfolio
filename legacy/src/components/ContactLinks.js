import React from 'react'
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

function ContactLinks({link, text, Logo}) {
  return (
    <a href={link} target='__blank' className='group relative flex flex-row items-center'>
        
        <span className='transition duration-300 absolute dark:text-[#ecf2f8] group-hover:translate-x-2 font-semibold'>{`>`}</span> 
        <p className='group-hover:text-[#7ce38b] pl-6'>
        <Logo className='text-md inline-block mr-2 mb-1 group-hover:text-[#7ce38b]'/>
            {text}
            
        </p>
        

    </a>
  )
}

export default ContactLinks