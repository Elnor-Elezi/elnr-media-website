import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, MeshTransmissionMaterial, Icosahedron, Torus, PresentationControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useReducedMotion } from 'framer-motion'
import * as THREE from 'three'

// Inner component that tracks the mouse
function MouseTracker({ children }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (!groupRef.current) return
    // Smoothly interpolate the group's rotation towards the mouse position
    const targetX = (state.mouse.y * Math.PI) / 8
    const targetY = (state.mouse.x * Math.PI) / 8
    
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05)
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05)
  })

  return <group ref={groupRef}>{children}</group>
}

export default function FloatingGlassShapes({ variant = 'hero' }) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) return null

  // --- HERO VARIANT (WebGL Glass Shapes) ---
  if (variant === 'hero') {
    return (
      <div className="absolute inset-0 w-[150vw] h-[150vh] -translate-x-1/4 -translate-y-1/4 flex items-center justify-center pointer-events-none opacity-90 lg:opacity-100">
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }} style={{ pointerEvents: 'auto' }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={2} color="#14b8a6" />
          <directionalLight position={[-10, -10, -5]} intensity={1} color="#f97316" />
          <Environment preset="city" />

          <MouseTracker>
            <PresentationControls rotation={[0, 0, 0]} polar={[-0.2, 0.2]} azimuth={[-0.2, 0.2]} config={{ mass: 2, tension: 400 }} snap={true}>
              
              {/* Main Icosahedron */}
              <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={[1, 0, 0]}>
                <Icosahedron args={[3.5, 0]}>
                  <MeshTransmissionMaterial 
                    backside samples={4} thickness={0.8} chromaticAberration={0.06} 
                    anisotropy={0.1} distortion={0.1} clearcoat={1} color="#14b8a6" 
                    roughness={0.05} ior={1.5}
                  />
                </Icosahedron>
              </Float>

              {/* Orbiting Torus */}
              <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2} position={[-3, -2, 2]}>
                <Torus args={[1.5, 0.4, 16, 32]} rotation={[Math.PI / 4, 0, 0]}>
                  <MeshTransmissionMaterial 
                    backside samples={4} thickness={0.5} chromaticAberration={0.08} 
                    clearcoat={1} color="#f97316" roughness={0.1} ior={1.2}
                  />
                </Torus>
              </Float>
              
              {/* Small floating sphere */}
              <Float speed={3} rotationIntensity={2} floatIntensity={2.5} position={[4, 3, -1]}>
                <Icosahedron args={[1, 1]}>
                  <MeshTransmissionMaterial 
                    backside samples={4} thickness={0.2} chromaticAberration={0.03} 
                    clearcoat={1} color="#ffffff" roughness={0} ior={1.1}
                  />
                </Icosahedron>
              </Float>

            </PresentationControls>
          </MouseTracker>

          <EffectComposer>
            <Bloom luminanceThreshold={0.5} mipmapBlur intensity={1.5} />
          </EffectComposer>
        </Canvas>
      </div>
    )
  }

  // Keep existing variants as fallbacks if needed, though they could also be migrated later.
  return null
}
