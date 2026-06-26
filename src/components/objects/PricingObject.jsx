import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, MeshTransmissionMaterial, RoundedBox, PresentationControls } from '@react-three/drei'

export default function PricingObject() {
  return (
    <div className="absolute inset-0 w-[150vw] h-[150vh] -translate-x-1/4 -translate-y-1/4 flex items-center justify-center pointer-events-none opacity-80">
      <div className="absolute inset-0 m-auto w-20 h-40 bg-brand-400 rounded-full blur-[80px] opacity-15 pointer-events-none" />
      
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }} style={{ pointerEvents: 'auto' }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 10, 5]} intensity={1.5} />
        <Environment preset="city" />
        
        {/* Floating Cards / Blocks */}
        <PresentationControls global rotation={[0, 0, 0]} polar={[-0.1, 0.2]} azimuth={[-0.2, 0.2]} config={{ mass: 2, tension: 400 }} snap={{ mass: 4, tension: 400 }}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5} position={[-2.5, 1, 0]} rotation={[0, Math.PI / 6, Math.PI / 12]}>
            <RoundedBox args={[3, 4, 0.5]} radius={0.2} smoothness={4}>
              <MeshTransmissionMaterial backside samples={4} thickness={0.5} chromaticAberration={0.05} color="#5eead4" clearcoat={1} />
            </RoundedBox>
          </Float>
          
          <Float speed={1.5} rotationIntensity={0.8} floatIntensity={2} position={[2.5, -1, -2]} rotation={[0, -Math.PI / 6, -Math.PI / 12]}>
            <RoundedBox args={[3, 4, 0.5]} radius={0.2} smoothness={4}>
              <MeshTransmissionMaterial backside samples={4} thickness={0.5} chromaticAberration={0.05} color="#14b8a6" clearcoat={1} />
            </RoundedBox>
          </Float>
        </PresentationControls>
      </Canvas>
    </div>
  )
}
