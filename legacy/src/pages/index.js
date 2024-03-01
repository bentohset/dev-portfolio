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
    <section className='h-screen w-auto '>
      <div className="flex flex-col items-center h-4/6 w-full relative -mt-20">
        
        <div className="w-full h-full justify-center flex ">
          <Model textInput={text}/>
        </div>
        <div className='sm:-mt-4 -mt-20 flex flex-col w-full'>
          <div className="h-fit flex flex-col justify-center items-start text-2xl self-center relative sm:w-3/6 md:4/6 w-full">
            <h1 className='text-left'>Hello world. </h1>
            <p className='text-left'>I am <span className='text-[#fa7970]'>Benjamin Toh.</span></p>
            <p className='text-left'>I love <Typewriter/></p>
          </div>
          
        </div>
        
      </div>
    </section>
  )
}
