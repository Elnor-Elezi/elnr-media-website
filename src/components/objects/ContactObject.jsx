import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, MeshTransmissionMaterial, Sphere, PresentationControls } from '@react-three/drei'

export default function ContactObject() {
  return (
    <div className="absolute inset-0 w-[150vw] h-[150vh] -translate-x-1/4 -translate-y-1/4 flex items-center justify-center pointer-events-none opacity-80">
      <div className="absolute inset-0 m-auto w-24 h-24 bg-brand-500 rounded-full blur-[80px] opacity-15 pointer-events-none" />
      
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }} style={{ pointerEvents: 'auto' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#14b8a6" /> {/* Inner glow */}
        <spotLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <Environment preset="city" />
        
        <PresentationControls global rotation={[0, 0, 0]} polar={[-0.1, 0.2]} azimuth={[-0.2, 0.2]} config={{ mass: 2, tension: 400 }} snap={{ mass: 4, tension: 400 }}>
          <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
            <Sphere args={[3, 64, 64]}>
              <MeshTransmissionMaterial 
                backside samples={4} thickness={2} chromaticAberration={0.1} 
                roughness={0.1} clearcoat={1} color="#ffffff" 
              />
            </Sphere>
          </Float>
        </PresentationControls>
      </Canvas>
    </div>
  )
}
