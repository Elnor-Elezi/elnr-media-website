import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function OrbitingRing({ radius, rotation, speed, color }) {
  const ringRef = useRef()
  const particleRef = useRef()

  useFrame((state, delta) => {
    ringRef.current.rotation.y += delta * speed
    ringRef.current.rotation.x += delta * speed * 0.2
    
    particleRef.current.position.x = Math.cos(state.clock.elapsedTime * speed * 2) * radius
    particleRef.current.position.z = Math.sin(state.clock.elapsedTime * speed * 2) * radius
  })

  return (
    <group ref={ringRef} rotation={rotation}>
      {/* Wireframe Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.01, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
      
      {/* Orbiting Particle */}
      <mesh ref={particleRef}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
        <pointLight color="#ffffff" intensity={2} distance={5} />
      </mesh>
    </group>
  )
}

export default function ContactObject() {
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing">
      <div className="absolute inset-0 m-auto w-40 h-40 bg-brand-500 rounded-full blur-[80px] opacity-40 pointer-events-none" />
      
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#14b8a6" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
        
        {/* Core Sphere */}
        <Sphere args={[1, 64, 64]}>
          <MeshDistortMaterial 
            color="#14b8a6" 
            emissive="#0d9488" 
            emissiveIntensity={0.5} 
            distort={0.3} 
            speed={2} 
            roughness={0.2} 
            metalness={0.8} 
            transparent
            opacity={0.8}
          />
        </Sphere>
        
        {/* Global Meridians (Static Wireframe Sphere) */}
        <Sphere args={[1.1, 16, 16]}>
          <meshBasicMaterial color="#5eead4" wireframe transparent opacity={0.1} />
        </Sphere>
        
        {/* Rings */}
        <OrbitingRing radius={2.5} rotation={[Math.PI/6, 0, 0]} speed={0.4} color="#64748b" />
        <OrbitingRing radius={3.2} rotation={[-Math.PI/4, Math.PI/4, 0]} speed={0.3} color="#94a3b8" />
        <OrbitingRing radius={4} rotation={[Math.PI/3, -Math.PI/6, 0]} speed={0.2} color="#cbd5e1" />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  )
}
