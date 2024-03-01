import { Environment, Html, OrbitControls, Text, useProgress } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Suspense } from "react";


export function Model() {
  const Computer = () => {
    // location of the 3D model
    const gltf = useLoader(GLTFLoader, "/model/coms.gltf");
    return (
      <mesh>
        {/* Use scale to control the size of the 3D model */}
        <primitive object={gltf.scene} scale={0.1}/>
      </mesh>
    );
  };

  const Loader = () => {
    const { progress } = useProgress()
    return <Html center ><p className='text-center text-xl'>{progress} % loaded</p></Html>
  }


  return (
    <div className="flex align-center justify-center h-full w-full cursor-grab focus:cursor-grabbing">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [1, 2, 5], far: 50, fov:10,  zoom: 0.5 }} >
          <Suspense fallback={<Loader/>}>
            <ambientLight intensity={2}/>
            <Computer />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls enableRotate={true} enableZoom={false} enablePan={false} autoRotate={true}/>
        </Canvas>
    </div>
  )
}
