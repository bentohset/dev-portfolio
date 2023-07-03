import ContainerBlock from '@/components/ContainerBlock'
import React from 'react'
import userData from '@/constants/data'
import ContactLinks from '@/components/ContactLinks'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import SkillsContainer from '@/components/SkillsContainer'


function about() {
    const contacts = [
        {
            text: 'Linkedin',
            link: userData.contacts.linkedin,
            logo: FaLinkedin,
        },
        {
            text: 'Github',
            link: userData.contacts.github,
            logo: FaGithub,
        },
        {
            text: 'Email',
            link: userData.contacts.email,
            logo: FaEnvelope
        },
    ]
  return (
    <section className='md:pt-32 pt-40 gap-y-8 flex flex-col md:flex-row md:h-screen h-full'>
        <div className="md:w-3/4 flex flex-col md:pr-16">
            <h1 className='text-4xl text-[#89929b]'>self.<span className='text-[#cea5fb]'>about</span></h1>
            <p className='mt-4 mb-2 text-xl dark:text-[#c6cdd5] font-bold'>{userData.about.title}</p>
            <p className='text-justify' dangerouslySetInnerHTML={{ __html: userData.about.bio }}></p>

            <div className='mt-8'>
                <h1 className='text-3xl text-[#cea5fb] mb-2'>skills</h1>
                <SkillsContainer/>
            </div>
            
            

        </div>
        <div className='md:w-1/4 flex flex-col justify-start pb-12'>
            <div className=''>
                <h1 className='text-3xl text-[#cea5fb] mb-2'>contacts</h1>
                <div className='text-lg flex flex-col space-y-2 mx-auto'>
                    {contacts.map(obj => (
                        <ContactLinks key={obj.text} link={obj.link} text={obj.text} Logo={obj.logo}/>
                    ))}
                </div>
            </div>

            
        </div>

    </section>
  )
}

export default about