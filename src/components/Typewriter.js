import userData from '@/constants/data'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function Typewriter() {
  const seq = userData.about.iLove
  const insertSeq = (arr, element) => {
    return arr.flatMap((item, index) => [item, element])
  }


  return (
    <TypeAnimation
        sequence={insertSeq(seq, 2000)}
        speed={40}
        repeat={Infinity}
        style={{ color: '#77bdfb'}}
        className='type'
        cursor={false}
    />
  ) 
}

export default Typewriter