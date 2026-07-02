import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, MeshTransmissionMaterial, Icosahedron, PresentationControls } from '@react-three/drei'

export default function ServicesObject() {
  return (
    <div className="absolute inset-0 w-[150vw] h-[150vh] -translate-x-1/4 -translate-y-1/4 flex items-center justify-center pointer-events-none opacity-80">
      <div className="absolute inset-0 m-auto w-24 h-24 bg-brand-400 rounded-full blur-[80px] opacity-15 pointer-events-none" />
      
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }} style={{ pointerEvents: 'auto' }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <Environment preset="city" />
        
        <PresentationControls rotation={[0, 0, 0]} polar={[-0.1, 0.2]} azimuth={[-0.2, 0.2]} config={{ mass: 2, tension: 400 }} snap={true}>
          <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
            <Icosahedron args={[3, 0]} position={[0, 0, 0]}>
              <MeshTransmissionMaterial 
                backside samples={4} thickness={0.5} chromaticAberration={0.05} 
                anisotropy={0.1} distortion={0} clearcoat={1} color="#0d9488" 
              />
            </Icosahedron>
          </Float>

          <Float speed={1.5} rotationIntensity={1} floatIntensity={2} position={[4, -3, -2]}>
            <Icosahedron args={[1.5, 0]}>
              <MeshTransmissionMaterial 
                backside samples={4} thickness={0.5} chromaticAberration={0.05} 
                clearcoat={1} color="#14b8a6" 
              />
            </Icosahedron>
          </Float>
        </PresentationControls>
      </Canvas>
    </div>
  )
}
