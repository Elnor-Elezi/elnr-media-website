"use client";
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function LiquidSphere() {
  const meshRef = useRef()
  const materialRef = useRef()
  
  // Follow mouse gently but responsively
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    // Smoothly interpolate the object's rotation towards the mouse position
    const targetX = (state.pointer.x * Math.PI) / 2
    const targetY = (state.pointer.y * Math.PI) / 2
    
    meshRef.current.rotation.x += 0.05 * (targetY - meshRef.current.rotation.x)
    meshRef.current.rotation.y += 0.05 * (targetX - meshRef.current.rotation.y)
    
    // Pulsate distort
    if (materialRef.current) {
      materialRef.current.distort = 0.3 + Math.sin(time) * 0.15
    }
  })

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.5, 32, 32]}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#14b8a6"
          metalness={0.8}
          roughness={0.2}
          distort={0.4}
          speed={2}
        />
      </Sphere>
    </Float>
  )
}

function FloatingParticles({ count = 30 }) {
  const meshRef = useRef()
  
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const xFactor = -10 + Math.random() * 20
      const yFactor = -10 + Math.random() * 20
      const zFactor = -10 + Math.random() * 20
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
    }
    return temp
  }, [count])

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle
      
      t = particle.t += speed / 2
      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.cos(t)
      
      // Update mouse positions smoothly
      particle.mx += (state.pointer.x * 15 - particle.mx) * 0.05
      particle.my += (state.pointer.y * 15 - particle.my) * 0.05

      dummy.position.set(
        (particle.mx / 10) + a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) + b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) + b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      )
      
      const scale = (s + 2) / 15
      dummy.scale.set(scale, scale, scale)
      dummy.rotation.set(s * 5, s * 5, s * 5)
      dummy.updateMatrix()
      
      meshRef.current.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <icosahedronGeometry args={[0.2, 0]} />
      <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.2} opacity={0.6} transparent />
    </instancedMesh>
  )
}

export default function Reactive3DShapes() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-auto touch-none">
      {/* Use frameloop="demand" if we don't need constant animation, but we do for the liquid sphere. 
          Performance set to auto decreases pixel ratio on slow devices. */}
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#14b8a6" />
        <pointLight position={[0, -5, 5]} intensity={2} color="#050505" />

        <LiquidSphere />
        <FloatingParticles count={30} />
      </Canvas>
    </div>
  )
}
