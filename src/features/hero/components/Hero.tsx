import React from 'react'
import { Model } from './Model'

type Props = {}

export const Hero = (props: Props) => {
  return (
    <div className='min-h-screen items-center justify-start flex flex-col w-full space-y-4 pt-24'>
      <div className='w-full h-96'>
        <Model />
      </div>
      <p className=' text-6xl font-bold'>Benjamin Toh</p>
    </div>
  )
}
