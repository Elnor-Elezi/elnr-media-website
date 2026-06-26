import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial, PresentationControls } from '@react-three/drei'
import * as THREE from 'three'

function Coin({ position, rotation, scale, color, delay }) {
  const ref = useRef()
  
  useFrame((state) => {
    const t = state.clock.elapsedTime + delay
    // Subdued internal animation for Jeton-like smoothness
    ref.current.position.y = position[1] + Math.sin(t * 0.5) * 0.1
    ref.current.rotation.x = rotation[0] + Math.sin(t * 0.5) * 0.05
    ref.current.rotation.z = rotation[2] + Math.cos(t * 0.5) * 0.05
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
    <div className="absolute inset-0 w-[150vw] h-[150vh] -translate-x-1/4 -translate-y-1/4 flex items-center justify-center pointer-events-none opacity-80">
      <div className="absolute inset-0 m-auto w-[60%] h-[60%] bg-brand-500 rounded-full blur-[100px] opacity-10 pointer-events-none" />
      <div className="absolute inset-0 m-auto w-[40%] h-[40%] bg-teal-300 rounded-full blur-[80px] opacity-10 pointer-events-none translate-x-20 translate-y-20" />
      
      <Canvas camera={{ position: [0, 3, 20], fov: 45 }} style={{ pointerEvents: 'auto' }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color="#14b8a6" intensity={1} />
        
        {/* Jeton-like slow levitation wrapper with interactivity */}
        <PresentationControls global rotation={[0, 0, 0]} polar={[-0.1, 0.2]} azimuth={[-0.2, 0.2]} config={{ mass: 2, tension: 400 }} snap={{ mass: 4, tension: 400 }}>
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5} position={[4, 0, -2]}>
            <group rotation={[Math.PI / 4, Math.PI / 6, 0]}>
              <Coin position={[0, -2, 0]} rotation={[0, 0, 0]} scale={[3.5, 3.5, 3.5]} color="#14b8a6" delay={0} />
              <Coin position={[0, -0.5, 0]} rotation={[0, 0, 0]} scale={[2.8, 2.8, 2.8]} color="glass" delay={0.5} />
              <Coin position={[0, 1, 0]} rotation={[0, 0, 0]} scale={[2.2, 2.2, 2.2]} color="#0f766e" delay={1} />
              <Coin position={[0, 2.5, 0]} rotation={[0, 0, 0]} scale={[1.6, 1.6, 1.6]} color="#012622" delay={1.5} />
              <Coin position={[0, 3.8, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]} color="#5eead4" delay={2} />
            </group>
          </Float>
        </PresentationControls>
      </Canvas>
    </div>
  )
}
