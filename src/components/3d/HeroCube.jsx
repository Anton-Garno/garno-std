import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';

const HeroCube = (props) => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta * 0.2;
        meshRef.current.rotation.y += delta * 0.3;
    });

    return (
        <Float speed={4} rotationIntensity={0.5} floatIntensity={1}>
            < group {...props}>
                {/* Main Cube Body */}
                < RoundedBox
                    ref={meshRef}
                    args={[2.5, 2.5, 2.5]}
                    radius={0.1}
                    smoothness={4}
                    scale={1}
                >
                    <meshStandardMaterial
                        color="#1a1a1a"
                        metalness={0.8}
                        roughness={0.2}
                        envMapIntensity={1}
                    />
                </RoundedBox >

                {/* Internal Glow or Edges could be complicated, keeping it simple metallic for now */}
                {/* We can add point lights rotating around it in the parent component or here if we want */}
            </group >
        </Float >
    );
};

export default HeroCube;
