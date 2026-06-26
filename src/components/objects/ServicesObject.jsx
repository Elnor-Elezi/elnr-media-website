import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

function DataCube({ position, color, delay = 0, scale = 1 }) {
  const ref = useRef()
  
  useFrame((state) => {
    const t = state.clock.elapsedTime + delay
    ref.current.rotation.x = Math.sin(t / 2)
    ref.current.rotation.y = Math.cos(t / 2)
  })

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={position}>
      <mesh ref={ref} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        {/* Glass-like material for floating cubes */}
        <MeshTransmissionMaterial 
          backside 
          samples={4} 
          thickness={0.5} 
          chromaticAberration={0.1} 
          anisotropy={0.1} 
          distortion={0.2} 
          distortionScale={0.5} 
          temporalDistortion={0.1} 
          clearcoat={1}
          attenuationDistance={0.5}
          attenuationColor="#ffffff"
          color="#ffffff" 
        />
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
          <lineBasicMaterial color={color} transparent opacity={0.5} />
        </lineSegments>
      </mesh>
    </Float>
  )
}

function CoreCube() {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.2
    ref.current.rotation.y = state.clock.elapsedTime * 0.3
  })

  return (
    <mesh ref={ref}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.8} />
      <pointLight color="#0ea5e9" intensity={4} distance={15} />
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(2, 2, 2)]} />
        <lineBasicMaterial color="#ffffff" transparent opacity={0.8} />
      </lineSegments>
    </mesh>
  )
}

export default function ServicesObject() {
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing">
      <div className="absolute inset-0 m-auto w-40 h-40 bg-brand-400 rounded-full blur-[80px] opacity-40 pointer-events-none" />
      
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        <group>
          <CoreCube />
          <DataCube position={[3, 2, -1]} color="#14b8a6" delay={0} scale={0.8} />
          <DataCube position={[-3, -1, 2]} color="#8b5cf6" delay={2} scale={1.2} />
          <DataCube position={[1, -3, -2]} color="#f97316" delay={4} scale={0.9} />
          <DataCube position={[-2, 3, 1]} color="#0ea5e9" delay={1} scale={0.7} />
        </group>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  )
}
