import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15; // Slower, more natural rotation
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
      <Sphere args={[1, 100, 200]} scale={2.2} ref={meshRef}>
        <MeshDistortMaterial
          color="#1e1e24"
          attach="material"
          distort={0.5}
          speed={1.5}
          roughness={0.2}
          metalness={1}
        />
      </Sphere>
       {/* Much more visible Wireframe Overlay */}
       <Sphere args={[1, 100, 200]} scale={2.3}>
        <meshBasicMaterial
          color="#06b6d4"
          wireframe={true}
          transparent
          opacity={0.4} // Increased visibility
        />
      </Sphere>
    </Float>
  );
};

const Particles = () => {
   const count = 400; // Double the particle count
   const mesh = useRef<THREE.InstancedMesh>(null);
   const dummy = new THREE.Object3D();
   
   // Generate random positions
   const particles = React.useMemo(() => {
     const temp = [];
     for(let i = 0; i < count; i++) {
        const t = Math.random() * 100;
        const factor = 20 + Math.random() * 100;
        const speed = 0.01 + Math.random() / 200;
        const xFactor = -50 + Math.random() * 100;
        const yFactor = -50 + Math.random() * 100;
        const zFactor = -50 + Math.random() * 100;
        temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
     }
     return temp;
   }, [count]);
 
   useFrame((state) => {
     if(!mesh.current) return;
     
     particles.forEach((particle, i) => {
        let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
        t = particle.t += speed / 3; // Slower, more natural particle movement
        const a = Math.cos(t) + Math.sin(t * 1) / 10;
        const b = Math.sin(t) + Math.cos(t * 2) / 10;
        const s = Math.cos(t);
        
        dummy.position.set(
            (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
            (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
            (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
        );
        dummy.scale.set(s, s, s);
        dummy.rotation.set(s * 5, s * 5, s * 5);
        dummy.updateMatrix();
        mesh.current!.setMatrixAt(i, dummy.matrix);
     });
     mesh.current.instanceMatrix.needsUpdate = true;
   });
 
   return (
     <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
       <dodecahedronGeometry args={[0.2, 0]} />
       {/* Increased opacity for better visibility */}
       <meshBasicMaterial color="#22d3ee" transparent opacity={0.85} />
     </instancedMesh>
   );
 };

const ThreeScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
        <ambientLight intensity={1.2} color="#4c1d95" />
        <pointLight position={[10, 10, 10]} intensity={3.5} color="#06b6d4" />
        <pointLight position={[-10, -10, -10]} intensity={2.5} color="#c026d3" />
        
        <AnimatedShape />
        <Particles />
        {/* Increased star count and size */}
        <Stars radius={100} depth={50} count={8000} factor={7} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;