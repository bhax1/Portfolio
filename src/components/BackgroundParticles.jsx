import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

const Particles = () => {
  const ref = useRef()
  const sphere = useMemo(() => {
    const particles = []
    for (let i = 0; i < 100; i++) {
      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))
      particles.push(x, y, z)
    }
    return new Float32Array(particles)
  }, [])

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.02
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial 
          transparent 
          color="#ffffff" 
          size={0.5} 
          sizeAttenuation={true} 
          depthWrite={false} 
        />
      </Points>
    </group>
  )
}

const BackgroundParticles = () => {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
      }}
      camera={{ position: [0, 0, 50], fov: 75 }}
    >
      <Particles />
    </Canvas>
  )
}

export default BackgroundParticles
