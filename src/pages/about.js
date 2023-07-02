import ContainerBlock from '@/components/ContainerBlock'
import React from 'react'

function about() {
  return (
    <ContainerBlock>
        <section className='md:pt-32'>
            <div className="">
                <h1 className='text-4xl text-[#89929b]'>self.<span className='text-[#cea5fb]'>about</span></h1>
            </div>
            <div>
                <h1>Skills</h1>
            </div>

            <div>
                <h1>Contact</h1>
            </div>

        </section>
    </ContainerBlock>
  )
}

export default about