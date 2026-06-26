import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Torus } from '@react-three/drei'
import * as THREE from 'three'

function Tier({ radius, y, thickness, color, speed, reverse }) {
  const ref = useRef()
  
  useFrame((state) => {
    const rotSpeed = state.clock.elapsedTime * speed
    ref.current.rotation.z = reverse ? -rotSpeed : rotSpeed
    ref.current.position.y = y + Math.sin(state.clock.elapsedTime * 2 + radius) * 0.1
  })

  return (
    <Torus ref={ref} args={[radius, thickness, 32, 100]} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} transparent opacity={0.8} />
    </Torus>
  )
}

function CoreBeam() {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.5
  })
  return (
    <mesh ref={ref}>
      <cylinderGeometry args={[0.05, 0.05, 6, 32]} />
      <meshStandardMaterial color="#14b8a6" emissive="#14b8a6" emissiveIntensity={2} transparent opacity={0.5} />
    </mesh>
  )
}

export default function PricingObject() {
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing">
      <div className="absolute inset-0 m-auto w-32 h-64 bg-brand-400 rounded-full blur-[80px] opacity-30 pointer-events-none" />
      
      <Canvas camera={{ position: [0, 2, 8], fov: 40 }}>
        <ambientLight intensity={0.2} />
        
        <group rotation={[Math.PI / 8, 0, 0]}>
          <CoreBeam />
          <Tier radius={2.5} y={-1.5} thickness={0.02} color="#64748b" speed={0.2} reverse={false} />
          <Tier radius={1.8} y={-0.5} thickness={0.05} color="#5eead4" speed={0.4} reverse={true} />
          <Tier radius={1.2} y={0.5} thickness={0.08} color="#14b8a6" speed={0.6} reverse={false} />
          <Tier radius={0.6} y={1.5} thickness={0.15} color="#115e59" speed={0.8} reverse={true} />
        </group>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  )
}
