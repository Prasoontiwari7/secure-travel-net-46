import React, { useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const EarthGlobe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
    }
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  // Create earth geometry with continent outlines
  const earthGeometry = useMemo(() => new THREE.SphereGeometry(3, 64, 64), []);
  
  const earthMaterial = useMemo(() => new THREE.MeshPhongMaterial({
    color: '#2563eb',
    transparent: true,
    opacity: 0.2,
    wireframe: false,
    emissive: '#3b82f6',
    emissiveIntensity: 0.1,
  }), []);

  const wireframeMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    color: '#60a5fa',
    wireframe: true,
    transparent: true,
    opacity: 0.3,
  }), []);

  const glowMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    color: '#3b82f6',
    transparent: true,
    opacity: 0.08,
    side: THREE.BackSide,
  }), []);

  return (
    <Float speed={0.8} rotationIntensity={0.05} floatIntensity={0.1}>
      <group ref={groupRef} position={[0, -5, -15]}>
        {/* Main Earth sphere */}
        <mesh ref={meshRef} geometry={earthGeometry} material={earthMaterial} />
        
        {/* Wireframe overlay */}
        <mesh geometry={earthGeometry} material={wireframeMaterial} scale={[1.01, 1.01, 1.01]} />
        
        {/* Glow effect */}
        <mesh geometry={earthGeometry} material={glowMaterial} scale={[1.2, 1.2, 1.2]} />
        
        {/* Orbiting elements with smooth rotation */}
        <group rotation={[0, 0, Math.sin(0) * 0.1]}>
          <mesh position={[4.5, 0, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color="#60a5fa" transparent opacity={0.8} />
          </mesh>
          <mesh position={[-4.5, 0, 0]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshBasicMaterial color="#3b82f6" transparent opacity={0.8} />
          </mesh>
          <mesh position={[0, 4.5, 0]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial color="#1d4ed8" transparent opacity={0.8} />
          </mesh>
          <mesh position={[0, -4.5, 0]}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshBasicMaterial color="#2563eb" transparent opacity={0.8} />
          </mesh>
        </group>

        {/* GoSecure branding floating around globe */}
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
          <Text
            position={[0, 5.5, 0]}
            fontSize={0.9}
            color="#60a5fa"
            anchorX="center"
            anchorY="middle"
            fontWeight="bold"
            outlineWidth={0.02}
            outlineColor="#1e293b"
          >
            GoSecure
          </Text>
        </Float>
        
        <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.15}>
          <Text
            position={[0, -6, 0]}
            fontSize={0.35}
            color="#3b82f6"
            anchorX="center"
            anchorY="middle"
            fontWeight="normal"
            outlineWidth={0.01}
            outlineColor="#1e293b"
          >
            AI-Powered Travel Security
          </Text>
        </Float>
      </group>
    </Float>
  );
};

export default EarthGlobe;