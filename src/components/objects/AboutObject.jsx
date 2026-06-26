import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Torus } from '@react-three/drei'
import * as THREE from 'three'

function AtomRing({ rotation, color, speed = 1, particleOffset = 0 }) {
  const groupRef = useRef()
  const particleRef = useRef()

  useFrame((state, delta) => {
    groupRef.current.rotation.z += delta * speed * 0.5
    particleRef.current.position.x = Math.cos(state.clock.elapsedTime * speed * 2 + particleOffset) * 2.2
    particleRef.current.position.y = Math.sin(state.clock.elapsedTime * speed * 2 + particleOffset) * 2.2
  })

  return (
    <group ref={groupRef} rotation={rotation}>
      <Torus args={[2.2, 0.02, 16, 100]}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.3} />
      </Torus>
      {/* Orbiting Particle */}
      <mesh ref={particleRef}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
        <pointLight color="#ffffff" intensity={2} distance={3} />
      </mesh>
    </group>
  )
}

function Atom() {
  const coreRef = useRef()
  
  useFrame((state) => {
    coreRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1)
  })

  return (
    <group scale={1.5}>
      {/* Core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={1} />
        <pointLight color="#0ea5e9" intensity={5} distance={10} />
      </mesh>
      
      {/* Rings */}
      <AtomRing rotation={[Math.PI / 2, 0, 0]} color="#14b8a6" speed={0.8} particleOffset={0} />
      <AtomRing rotation={[Math.PI / 3, Math.PI / 3, 0]} color="#0ea5e9" speed={1.2} particleOffset={Math.PI} />
      <AtomRing rotation={[-Math.PI / 3, Math.PI / 3, 0]} color="#8b5cf6" speed={1} particleOffset={Math.PI / 2} />
    </group>
  )
}

export default function AboutObject() {
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing">
      {/* Fallback/Background Glow */}
      <div className="absolute inset-0 m-auto w-32 h-32 bg-brand-500 rounded-full blur-[60px] opacity-30 pointer-events-none" />
      
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} className="w-full h-full">
        <ambientLight intensity={0.2} />
        <Atom />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  )
}
