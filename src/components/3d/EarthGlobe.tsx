import React, { useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const EarthGlobe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  // Create earth geometry with continent outlines
  const earthGeometry = useMemo(() => new THREE.SphereGeometry(3, 64, 64), []);
  
  const earthMaterial = useMemo(() => new THREE.MeshPhongMaterial({
    color: '#1a365d',
    transparent: true,
    opacity: 0.1,
    wireframe: false,
    emissive: '#4ECDC4',
    emissiveIntensity: 0.05,
  }), []);

  const wireframeMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    color: '#4ECDC4',
    wireframe: true,
    transparent: true,
    opacity: 0.15,
  }), []);

  const glowMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    color: '#4ECDC4',
    transparent: true,
    opacity: 0.05,
    side: THREE.BackSide,
  }), []);

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
      <group ref={groupRef} position={[0, -5, -15]}>
        {/* Main Earth sphere */}
        <mesh ref={meshRef} geometry={earthGeometry} material={earthMaterial} />
        
        {/* Wireframe overlay */}
        <mesh geometry={earthGeometry} material={wireframeMaterial} scale={[1.01, 1.01, 1.01]} />
        
        {/* Glow effect */}
        <mesh geometry={earthGeometry} material={glowMaterial} scale={[1.2, 1.2, 1.2]} />
        
        {/* Orbiting elements */}
        <group>
          <mesh position={[4.5, 0, 0]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial color="#FFD700" />
          </mesh>
          <mesh position={[-4.5, 0, 0]}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshBasicMaterial color="#FF6B35" />
          </mesh>
          <mesh position={[0, 4.5, 0]}>
            <sphereGeometry args={[0.06, 8, 8]} />
            <meshBasicMaterial color="#45B7D1" />
          </mesh>
          <mesh position={[0, -4.5, 0]}>
            <sphereGeometry args={[0.07, 8, 8]} />
            <meshBasicMaterial color="#98D8C8" />
          </mesh>
        </group>

        {/* GoSecure branding floating around globe */}
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
          <Text
            position={[0, 5.5, 0]}
            fontSize={0.8}
            color="#4ECDC4"
            anchorX="center"
            anchorY="middle"
            fontWeight="bold"
            outlineWidth={0.02}
            outlineColor="#000000"
          >
            GoSecure
          </Text>
        </Float>
        
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
          <Text
            position={[0, -6, 0]}
            fontSize={0.4}
            color="#FFD700"
            anchorX="center"
            anchorY="middle"
            fontWeight="normal"
            outlineWidth={0.01}
            outlineColor="#000000"
          >
            Travel Safe • Powered by AI
          </Text>
        </Float>
      </group>
    </Float>
  );
};

export default EarthGlobe;