import React, { Suspense }  from 'react'
import Head from 'next/head'
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls, CameraControls, Html, Text, useProgress } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

function Model({textInput}) {
  const TextOverlay = ({ text }) => {
    return (
      <Html position={[0,0,0]}>
        <div>{text}</div>
      </Html>
    )
  }
  const Computer = () => {
    // location of the 3D model
    const gltf = useLoader(GLTFLoader, "/test/coms.gltf");
    return (
      <mesh>
        {/* Use scale to control the size of the 3D model */}
        <primitive object={gltf.scene} scale={0.08}/>
      </mesh>
    );
  };

  const Loader = () => {
    const { progress } = useProgress()
    return <Html center ><p className='text-center text-xl'>{progress} % loaded</p></Html>
  }


  return (
    <div className="flex md:items-center align-center justify-center md:h-full h-4/6 w-full cursor-grab focus:cursor-grabbing xl:pt-0 lg:pt-20 md:pt-24 pt-12">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [1, 2, 5], far: 50, fov:10,  zoom: 0.5 }} >
          <Suspense fallback={<Loader/>}>
            <ambientLight intensity={1}/>
            <Text
              fontSize={0.025}
              position={[-0.43, 0.35, 0.0065]}
              color="#c6cdd5"
              textAlign="left"
              anchorX="left"
              anchorY="top"
              maxWidth={1}
              overflowWrap='break-word'
              
            >
              {textInput}
            </Text>
            <Computer />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls enableRotate={true} enableZoom={false} enablePan={false}/>
        </Canvas>
    </div>
  )
}

export default Model