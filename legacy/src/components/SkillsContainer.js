import React, { useState } from 'react'
import { BsChevronDown, BsChevronRight } from 'react-icons/bs'
import { FaDocker, FaFigma, FaFolder, FaFolderOpen, FaGitAlt, FaSwift } from 'react-icons/fa'
import { BiLogoJavascript, BiLogoPython, BiLogoCPlusPlus, BiLogoJava, BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoFlask, BiLogoTailwindCss, BiLogoNodejs, BiLogoMongodb, BiLogoPostgresql, BiLogoGoogleCloud, BiLogoKubernetes, BiLogoGoLang } from 'react-icons/bi'
import { TbBrandReactNative, TbBrandTerraform, TbBrandThreejs, TbSql } from 'react-icons/tb'
import { SiExpress, SiMicrosoftazure, SiNextdotjs } from 'react-icons/si'
import SkillsLabel from './SkillsLabel'
import userData from '@/constants/data'

function SkillsContainer() {
    const logoLang = [
        BiLogoCPlusPlus,
        BiLogoPython, 
        BiLogoJavascript, 
        BiLogoJava,
        BiLogoHtml5,
        BiLogoCss3,
        BiLogoGoLang,
        TbSql
    ]

    const logoFrame = [
        BiLogoReact,
        TbBrandReactNative,
        SiNextdotjs,
        BiLogoFlask,
        BiLogoTailwindCss,
        BiLogoNodejs,
        SiExpress,
        TbBrandThreejs
    ]

    const logoTools = [
        FaGitAlt,
        FaDocker,
        FaFigma,
        BiLogoKubernetes,
        TbBrandTerraform
    ]

    const logoDb = [
        BiLogoMongodb,
        BiLogoPostgresql,
        BiLogoGoogleCloud,
        SiMicrosoftazure,
    ]

    const [langToggle, setLangToggle] = useState(true)
    const [frameToggle, setFrameToggle] = useState(true)
    const [dbToggle, setDbToggle] = useState(true)
    const [toolToggle, setToolToggle] = useState(true)


  return (
    <div className='flex flex-col space-y-4 md:space-y-8 md:items-start'>
        <div className='flex sm:flex-row flex-col sm:space-x-4 space-x-0 space-y-2 sm:space-y-0'>
        <div className='flex flex-col items-start'>
            <div className='flex flex-row items-center hover:text-[#7ce38b] cursor-pointer w-44' onClick={()=>{setLangToggle(prev => !prev)}}>
                <div className='w-12 flex flex-row items-center'>
                    {langToggle ? (
                        <>
                            <BsChevronDown className='font-bold text-md dark:text-[#89929b] text-[#21262d]'/>
                            <FaFolderOpen className='mx-2 text-[#faa356]'/>
                        </>
                    ):(
                        <>
                            <BsChevronRight className='font-bold text-md dark:text-[#89929b] text-[#21262d]'/>
                            <FaFolder className='mx-2 text-[#faa356] text-sm'/>
                        </>
                    )}
                    </div>
                    
                    
                    <p className='disable-text-selection'>languages</p>
                </div>
            {langToggle && <div className='flex flex-row mt-1'>
                <div className='ml-1 h-auto border-r-[1px] dark:border-[#89929b] border-[#21262d]'></div>
                <div className='flex flex-col ml-8 '>
                    {userData.skills.languages.map((obj,index) => (
                        <SkillsLabel text={obj} key={obj} Logo={logoLang[index]} />
                    ))}
                    
                    
                </div>
            </div>}
        </div>

        <div className='flex flex-col items-start'>
            <div className='flex flex-row items-center hover:text-[#7ce38b] cursor-pointer w-44' onClick={()=>{setFrameToggle(prev => !prev)}}>
                <div className='w-12 flex flex-row items-center'>
                {frameToggle ? (
                    <>
                        <BsChevronDown className='font-bold text-md dark:text-[#89929b] text-[#21262d]'/>
                        <FaFolderOpen className='mx-2 text-[#faa356]'/>
                    </>
                ):(
                    <>
                        <BsChevronRight className='font-bold text-md dark:text-[#89929b] text-[#21262d]'/>
                        <FaFolder className='mx-2 text-[#faa356] text-sm'/>
                    </>
                )}
                </div>
                <p className='disable-text-selection'>frameworks</p>
            </div>
            {frameToggle && <div className='flex flex-row mt-1'>
                <div className='ml-1 h-auto border-r-[1px] dark:border-[#89929b] border-[#21262d]'></div>
                <div className='flex flex-col ml-8'>
                    {userData.skills.frameworks.map((obj,index) => (
                        <SkillsLabel text={obj} key={obj} Logo={logoFrame[index]} />
                    ))}
                    
                    
                </div>
            </div>}
        </div>
        </div>

        <div className='flex sm:flex-row flex-col sm:space-x-4 space-x-0 space-y-2 sm:space-y-0'>
        <div className='flex flex-col items-start'>
            <div className='flex flex-row items-center hover:text-[#7ce38b] cursor-pointer w-44' onClick={()=>{setDbToggle(prev => !prev)}}>
                <div className='w-12 flex flex-row items-center'>
                {dbToggle ? (
                    <>
                        <BsChevronDown className='font-bold text-md dark:text-[#89929b] text-[#21262d]'/>
                        <FaFolderOpen className='mx-2 text-[#faa356]'/>
                    </>
                ):(
                    <>
                        <BsChevronRight className='font-bold text-md dark:text-[#89929b] text-[#21262d]'/>
                        <FaFolder className='mx-2 text-[#faa356] text-sm'/>
                    </>
                )}
                </div>
                <p className='disable-text-selection'>database/cloud</p>
            </div>
            {dbToggle && <div className='flex flex-row mt-1'>
                <div className='ml-1 h-auto border-r-[1px] dark:border-[#89929b] border-[#21262d]'></div>
                <div className='flex flex-col ml-8'>
                    {userData.skills.database.map((obj,index) => (
                        <SkillsLabel text={obj} key={obj} Logo={logoDb[index]} />
                    ))}
                    
                    
                </div>
            </div>}
        </div>

        <div className='flex flex-col items-start'>
            <div className='flex flex-row items-center hover:text-[#7ce38b] cursor-pointer w-44' onClick={()=>{setToolToggle(prev => !prev)}}>
                <div className='w-12 flex flex-row items-center'>
                {toolToggle ? (
                    <>
                        <BsChevronDown className='font-bold text-md dark:text-[#89929b] text-[#21262d]'/>
                        <FaFolderOpen className='mx-2 text-[#faa356]'/>
                    </>
                ):(
                    <>
                        <BsChevronRight className='font-bold text-md dark:text-[#89929b] text-[#21262d]'/>
                        <FaFolder className='mx-2 text-[#faa356] text-sm'/>
                    </>
                )}
                </div>
                <p className='disable-text-selection'>tools</p>
                
            </div>
            {toolToggle && <div className='flex flex-row mt-1'>
                <div className='ml-1 h-auto border-r-[1px] dark:border-[#89929b] border-[#21262d]'></div>
                <div className='flex flex-col ml-8'>
                    {userData.skills.tools.map((obj,index) => (
                        <SkillsLabel text={obj} key={obj} Logo={logoTools[index]} />
                    ))}
                    
                    
                </div>
            </div>}
        </div>
        </div>
    </div>
  )
}

export default SkillsContainer