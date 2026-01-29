import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";

const MiniTechElement = () => {
    const groupRef = useRef();
    const coreRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = t * 0.1;
        }
        if (coreRef.current) {
            coreRef.current.rotation.x = t * 0.2;
            coreRef.current.rotation.z = t * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Enlarged Core Element */}
            <Float speed={3} rotationIntensity={1} floatIntensity={0.5}>
                <mesh ref={coreRef}>
                    <icosahedronGeometry args={[2.8, 2]} />
                    <meshStandardMaterial color="#60a5fa" wireframe emissive="#3b82f6" emissiveIntensity={5} />
                </mesh>
            </Float>

            {/* Subtle Tech Ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[4.2, 4.4, 64]} />
                <meshBasicMaterial color="#3b82f6" transparent opacity={0.15} side={2} />
            </mesh>
        </group>
    );
};

const ContactVisual = () => {
    return (
        <div className="w-full h-full min-h-[400px]">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
                <MiniTechElement />
            </Canvas>
        </div>
    );
};

export default ContactVisual;
