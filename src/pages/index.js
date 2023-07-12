import ContainerBlock from '@/components/ContainerBlock'
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
      <div className="flex md:flex-row flex-col justify-center items-center h-full md:relative w-full pb-14">
        <div className="md:absolute md:right-20 md:w-2/3 lg:w-1/2 w-full h-full md:py-4 justify-center flex ">
          <Model textInput={text}/>
        </div>
        <div className="absolute w-fit md:ml-6 flex flex-col justify-center items-start md:text-3xl xl:text-4xl z-50 md:left-0 lg:left-16 text-2xl bottom-72 md:bottom-96 left-10">
          <h1 className='text-left'>Hello world. </h1>
          <p className='text-left'>I am <span className='text-[#fa7970]'>Benjamin Toh.</span></p>
          <p className='text-left'>I love <Typewriter/></p>
          <input className='hidden' ref={inputElement} value={text} onChange={(e)=>{setText(e.target.value)}} onBlur={handleInputBlur}/>
        </div>
        
      </div>
    </section>
  )
}
