import React from 'react'
import { BiLogoJavascript, BiLogoPython, BiLogoCPlusPlus } from 'react-icons/bi'

function SkillsLabel({text, Logo}) {
  return (
    <div className='flex flex-row items-center space-x-2'>

        <Logo/>
        <p className='whitespace-nowrap'>{text}</p>
    </div>
  )
}

export default SkillsLabel