import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Coin({ position, rotation, scale, color, delay }) {
  const ref = useRef()
  
  useFrame((state) => {
    const t = state.clock.elapsedTime + delay
    ref.current.position.y = position[1] + Math.sin(t * 1.5) * 0.2
    ref.current.rotation.x = rotation[0] + Math.sin(t) * 0.1
    ref.current.rotation.z = rotation[2] + Math.cos(t) * 0.1
  })

  return (
    <mesh ref={ref} position={position} rotation={rotation} scale={scale}>
      <cylinderGeometry args={[1, 1, 0.1, 64]} />
      {color === "glass" ? (
        <MeshTransmissionMaterial 
          backside samples={4} thickness={0.5} chromaticAberration={0.1} 
          anisotropy={0.1} distortion={0.1} distortionScale={0.5} 
          temporalDistortion={0.1} clearcoat={1} color="#ffffff" 
        />
      ) : (
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
      )}
      <lineSegments>
        <edgesGeometry args={[new THREE.CylinderGeometry(1, 1, 0.1, 64)]} />
        <lineBasicMaterial color={color === "glass" ? "#ffffff" : "#ffffff"} transparent opacity={0.3} />
      </lineSegments>
    </mesh>
  )
}

export default function MovementObject() {
  return (
    <div className="relative w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] xl:w-[1000px] xl:h-[1000px] flex items-center justify-center cursor-grab active:cursor-grabbing">
      <div className="absolute inset-0 m-auto w-[60%] h-[60%] bg-brand-300 rounded-full blur-[100px] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 m-auto w-[40%] h-[40%] bg-orange-300 rounded-full blur-[80px] opacity-20 pointer-events-none translate-x-20 translate-y-20" />
      
      <Canvas camera={{ position: [0, 2, 10], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color="#14b8a6" intensity={2} />
        
        <group rotation={[Math.PI / 4, Math.PI / 6, 0]}>
          <Coin position={[0, -2, 0]} rotation={[0, 0, 0]} scale={[3.5, 3.5, 3.5]} color="#14b8a6" delay={0} />
          <Coin position={[0, -0.5, 0]} rotation={[0, 0, 0]} scale={[2.8, 2.8, 2.8]} color="glass" delay={0.5} />
          <Coin position={[0, 1, 0]} rotation={[0, 0, 0]} scale={[2.2, 2.2, 2.2]} color="#f97316" delay={1} />
          <Coin position={[0, 2.5, 0]} rotation={[0, 0, 0]} scale={[1.6, 1.6, 1.6]} color="#1e293b" delay={1.5} />
          <Coin position={[0, 3.8, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]} color="#ccfbf1" delay={2} />
        </group>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
