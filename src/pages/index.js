import Section from '@/components/Section';
import Typewriter from '@/components/Typewriter';
import Model from '@/components/three/Model'
import { useEffect, useState, useRef } from 'react'


export default function Home() {
  const [text, setText] = useState('')
  const inputElement = useRef(null);
  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);
  const handleInputBlur = (event) => {
    event.preventDefault();
    inputElement.current.focus();
  };

  return (
    <section className='h-screen'>
      <div className="flex flex-col items-center h-4/6 w-full relative -mt-20">
        
        <div className="w-full h-full justify-center flex ">
          <Model textInput={text}/>
        </div>

        <Section delay={0.1} className='w-full'>
        <div className="w-full h-fit absolute md:inset-x-1/4 inset-x-0 flex flex-col justify-center items-start z-50 text-2xl">
          <h1 className='text-left'>Hello world. </h1>
          <p className='text-left'>I am <span className='text-[#fa7970]'>Benjamin Toh.</span></p>
          <p className='text-left'>I love <Typewriter/></p>
          <input className='hidden' ref={inputElement} value={text} onChange={(e)=>{setText(e.target.value)}} onBlur={handleInputBlur}/>
        </div>
        </Section>
        
        
      </div>
    </section>
  )
}
