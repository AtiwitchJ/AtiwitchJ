"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingParticles() {
    const mesh = useRef<THREE.Points>(null);
    
    const count = 30;
    
    const [positions, velocities] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const velocities = new Float32Array(count * 3);
        
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
            
            velocities[i * 3] = (Math.random() - 0.5) * 0.002;
            velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.002;
            velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
        }
        
        return [positions, velocities];
    }, []);
    
    useFrame(() => {
        if (!mesh.current) return;
        const positionArray = mesh.current.geometry.attributes.position.array as Float32Array;
        
        for (let i = 0; i < count; i++) {
            positionArray[i * 3] += velocities[i * 3];
            positionArray[i * 3 + 1] += velocities[i * 3 + 1];
            positionArray[i * 3 + 2] += velocities[i * 3 + 2];
            
            // Boundary check
            if (Math.abs(positionArray[i * 3]) > 10) velocities[i * 3] *= -1;
            if (Math.abs(positionArray[i * 3 + 1]) > 10) velocities[i * 3 + 1] *= -1;
            if (Math.abs(positionArray[i * 3 + 2]) > 5) velocities[i * 3 + 2] *= -1;
        }
        
        mesh.current.geometry.attributes.position.needsUpdate = true;
        mesh.current.rotation.y += 0.0002;
    });
    
    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#FF8787"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

function ConnectionLines() {
    const lineRef = useRef<THREE.LineSegments>(null);
    
    const positions = useMemo(() => {
        const positions: number[] = [];
        const points: [number, number, number][] = [];
        
        // Create grid points
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                points.push([
                    (i - 2) * 4,
                    (j - 2) * 4,
                    -5
                ]);
            }
        }
        
        // Connect nearby points
        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                const dist = Math.sqrt(
                    Math.pow(points[i][0] - points[j][0], 2) +
                    Math.pow(points[i][1] - points[j][1], 2)
                );
                if (dist < 6) {
                    positions.push(...points[i], ...points[j]);
                }
            }
        }
        
        return new Float32Array(positions);
    }, []);
    
    useFrame(({ clock }) => {
        if (!lineRef.current) return;
        lineRef.current.rotation.z = clock.getElapsedTime() * 0.02;
    });
    
    return (
        <lineSegments ref={lineRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <lineBasicMaterial color="#C5C6BE" transparent opacity={0.3} />
        </lineSegments>
    );
}

export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
            >
                <color attach="background" args={["#FAFAFA"]} />
                <FloatingParticles />
                <ConnectionLines />
            </Canvas>
        </div>
    );
}
