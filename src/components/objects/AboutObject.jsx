import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, MeshTransmissionMaterial, Sphere, Torus, PresentationControls } from '@react-three/drei'

export default function AboutObject() {
  return (
    <div className="absolute inset-0 w-[150vw] h-[150vh] -translate-x-1/4 -translate-y-1/4 flex items-center justify-center pointer-events-none opacity-80">
      <div className="absolute inset-0 m-auto w-20 h-20 bg-brand-500 rounded-full blur-[60px] opacity-15 pointer-events-none" />
      
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }} style={{ pointerEvents: 'auto' }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} intensity={1} />
        <Environment preset="city" />
        
        <PresentationControls global rotation={[0, 0, 0]} polar={[-0.1, 0.2]} azimuth={[-0.2, 0.2]} config={{ mass: 2, tension: 400 }} snap={{ mass: 4, tension: 400 }}>
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
            {/* Core Sphere */}
            <Sphere args={[2, 64, 64]}>
              <MeshTransmissionMaterial 
                backside samples={4} thickness={0.5} chromaticAberration={0.05} 
                clearcoat={1} color="#5eead4" 
              />
            </Sphere>
            
            {/* Orbiting Rings */}
            <Torus args={[3.5, 0.1, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
              <meshStandardMaterial color="#14b8a6" metalness={0.8} roughness={0.2} />
            </Torus>
            <Torus args={[4.5, 0.05, 16, 100]} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
              <meshStandardMaterial color="#0d9488" metalness={1} roughness={0.1} />
            </Torus>
          </Float>
        </PresentationControls>
      </Canvas>
    </div>
  )
}
