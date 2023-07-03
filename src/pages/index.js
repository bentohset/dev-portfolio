import ContainerBlock from '@/components/ContainerBlock'


export default function Home() {
  return (
    <section className=''>

    
      <div className="flex md:flex-row flex-col justify-center items-center h-screen">
        <div className="w-full md:w-1/2 lg:p-20 py-4 ml-6 flex flex-col justify-center items-start text-3xl">
          <h1 className='text-left'>Hello world. I am <span className='text-[#fa7970]'>Benjamin Toh.</span></h1>
          <p className='text-left'>I love building things.</p>
        </div>
        <div className="w-full md:w-1/2 lg:p-20 px-10 py-4 text-center">
          threejs
        </div>
      </div>
    </section>
  )
}
