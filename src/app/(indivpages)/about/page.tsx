import React from 'react'

// import { userData } from '@/lib/data'
// import { SkillCard } from '@/features/about'
// import Image from 'next/image'
// import { LinkedinIcon } from 'lucide-react'
// import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

type Props = {}

const page = async (props: Props) => {
//   const contacts = [
//     {
//         text: 'Linkedin',
//         link: userData.contacts.linkedin,
//         logo: FaLinkedin,
//     },
//     {
//         text: 'Github',
//         link: userData.contacts.github,
//         logo: FaGithub,
//     },
//     {
//         text: 'Email',
//         link: userData.contacts.email,
//         logo: FaEnvelope,
//     },
// ]
  return (
    <div className='space-y-12 pb-12'>
      {/* <section className='grid md:grid-cols-5 grid-cols-1 md:gap-12 gap-4 animate-in slide-in-from-top-8 fade-in duration-500'>
        <div className='space-y-4 md:col-span-3 col-span-1 order-2 md:order-1'>
          <div className='space-y-4'>
            <h1 className='font-bold text-4xl'>Benjamin Toh</h1>
            <h2 className='font-semibold'>{userData.about.title}</h2>
            <p className='text-base text-justify text-zinc-600 dark:text-zinc-400' dangerouslySetInnerHTML={{ __html: userData.about.bio }}></p>
          </div>

          <div className='space-y-4'>
            <h2 className='font-semibold'>Interests</h2>
            <div className='grid md:grid-cols-2 grid-cols-2 gap-4'>
              {userData.interests.map((o) => (
                <div key={o.title} className='h-32 rounded-lg border border-zinc-100 p-6 dark:border-zinc-700/40'>
                  <div className='flex flex-row gap-x-4 items-center mb-2'>
                    <o.icon className='text-devPrimary'/>
                    <h1 className='font-bold text-sm'>{o.title}</h1>
                  </div>
                  <p className='text-sm text-zinc-600 dark:text-zinc-400'>{o.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className='md:col-span-2 col-span-1 space-y-4 order-1 md:order-2'>
          <Image src="/icons/me-hk.jpeg" alt="me"
            className='object-cover w-full h-96 rounded-2xl'
            sizes="100vw"
            width={0}
            height={0}
          />
          <div className='p-2 flex flex-row justify-evenly'>
            {contacts.map((o) => (
              <a 
                href={o.link} 
                key={o.link} 
                target='__blank'
                className='w-fit flex flex-row items-center gap-x-2 group hover:text-devPrimary dark:hover:text-devPrimary text-sm text-zinc-800 transition dark:text-zinc-200'
              >
                <o.logo className='transition text-zinc-500 group-hover:text-devPrimary'/> {o.text}
              </a>
            ))}
          </div>
        </div>
       
      </section>

      <section className='space-y-4 animate-in slide-in-from-top-8 duration-500 fade-in'>
        <h1 className='font-semibold text-3xl'>Skills</h1>
        <h2 className='font-semibold'>Languages</h2>
        <div className='flex flex-row gap-4 flex-wrap'>
          {userData.skills.languages.map((o) => (
            <SkillCard skill={o} key={o}/>
          ))}
        </div>


        <h2 className='font-semibold'>Frameworks</h2>
        <div className='flex flex-row gap-4 flex-wrap'>
          {userData.skills.frameworks.map((o) => (
            <SkillCard skill={o} key={o}/>
          ))}
        </div>

        <h2 className='font-semibold'>Database / Cloud</h2>
        <div className='flex flex-row gap-4 flex-wrap'>
          {userData.skills.database.map((o) => (
            <SkillCard skill={o} key={o}/>
          ))}
        </div>

        <h2 className='font-semibold'>Tools</h2>
        <div className='flex flex-row gap-4 flex-wrap'>
          {userData.skills.tools.map((o) => (
            <SkillCard skill={o} key={o}/>
          ))}
        </div>

      </section> */}
    </div>
  )
}

export default page