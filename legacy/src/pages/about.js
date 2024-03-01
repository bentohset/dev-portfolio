import ContainerBlock from '@/components/ContainerBlock'
import React from 'react'
import userData from '@/constants/data'
import ContactLinks from '@/components/ContactLinks'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import SkillsContainer from '@/components/SkillsContainer'
import Section from '@/components/Section'


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
    <section className='gap-y-4 flex flex-col h-full'>
        <Section delay={0.1} margin={0}>
            <h1 className='text-4xl text-[#89929b]'>self.<span className='text-[#cea5fb]'>about</span></h1>
        </Section>

        <Section delay={0.2}>
            <p className='mb-2 text-xl dark:text-[#c6cdd5] font-bold'>{userData.about.title}</p>
            <p className='text-justify' dangerouslySetInnerHTML={{ __html: userData.about.bio }}></p>
        </Section>

        

        <Section delay={0.3}>
            <h1 className='text-3xl text-[#cea5fb] mb-2'>skills</h1>
            <SkillsContainer/>
        </Section>

        <Section delay={0.4}>
            <div className=''>
                <h1 className='text-3xl text-[#cea5fb] mb-2'>contacts</h1>
                <div className='text-lg flex flex-col space-y-2 mx-auto'>
                    {contacts.map(obj => (
                        <ContactLinks key={obj.text} link={obj.link} text={obj.text} Logo={obj.logo}/>
                    ))}
                </div>
            </div>
        </Section>

    </section>
  )
}

export default about