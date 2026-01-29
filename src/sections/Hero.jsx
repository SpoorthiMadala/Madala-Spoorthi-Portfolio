import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { TechDesktop } from "../components/TechDesktop";
import { Float, PerspectiveCamera, Environment, ContactShadows, Grid } from "@react-three/drei";

import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense, useRef } from "react";
import Loader from "../components/Loader";
import { Particles } from "../components/Particles";
import * as THREE from 'three';



const Hero = () => {
  const isSmallMobile = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.04 : isMobile ? 0.05 : isTablet ? 0.06 : 0.08,
      deskPosition: isMobile ? [0, -6, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };

  const sizes = calculateSizes(isSmallMobile, isMobile, isTablet);

  // Responsive model position adjustment for the restored left-aligned design
  const deskPos = isMobile ? [0, -6.5, 0] : isTablet ? [10, -6, 0] : [9, -5.5, 0];
  const deskScale = isSmallMobile ? 0.035 : isMobile ? 0.045 : isTablet ? 0.055 : 0.08;

  return (
    <section id="home" className="relative flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space bg-[#020617]">
      {/* Tech HUD Deco Corners */}
      {!isSmallMobile && (
        <>
          <div className="absolute top-10 left-10 w-32 h-32 border-t-2 border-l-2 border-blue-500/30 rounded-tl-3xl pointer-events-none z-20 flex flex-col p-4 gap-1">
            <span className="text-[10px] text-blue-400/60 font-mono tracking-widest uppercase">System: Activated</span>
            <span className="text-[10px] text-blue-400/40 font-mono tracking-tighter uppercase whitespace-nowrap">User: Madala_Spoorthi</span>
            <div className="w-12 h-[1px] bg-blue-500/20 mt-1" />
          </div>

          <div className="absolute top-10 right-10 w-32 h-32 border-t-2 border-r-2 border-blue-500/30 rounded-tr-3xl pointer-events-none z-20 flex flex-col items-end p-4 gap-1 text-right">
            <span className="text-[10px] text-blue-400/60 font-mono tracking-widest uppercase">Coords: [12.9, 77.5]</span>
            <span className="text-[10px] text-blue-400/40 font-mono tracking-tighter uppercase">Local_Time: {new Date().toLocaleTimeString()}</span>
            <div className="w-12 h-[1px] bg-blue-500/20 mt-1" />
          </div>

          <div className="absolute bottom-10 left-10 w-32 h-32 border-b-2 border-l-2 border-blue-500/30 rounded-bl-3xl pointer-events-none z-20 flex flex-col justify-end p-4 gap-1">
            <div className="w-12 h-[1px] bg-blue-500/20 mb-1" />
            <span className="text-[10px] text-blue-400/60 font-mono tracking-widest uppercase">Uptime: 99.9%</span>
            <span className="text-[10px] text-blue-400/40 font-mono tracking-tighter uppercase">Status: Non_Stop_Dev</span>
          </div>

          <div className="absolute bottom-10 right-10 w-32 h-32 border-b-2 border-r-2 border-blue-500/30 rounded-br-3xl pointer-events-none z-20 flex flex-col items-end justify-end p-4 gap-2">
            {/* Animated Radar */}
            <div className="relative w-8 h-8 rounded-full border border-blue-500/20 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(59,130,246,0.2))] animate-spin" />
              <div className="w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
            </div>
            <span className="text-[10px] text-blue-400/60 font-mono tracking-widest uppercase mt-1">Scanning...</span>
          </div>
        </>
      )}

      <HeroText />


      <ParallaxBackground />
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        staticity={30}
        color="#60a5fa"
      />

      <figure
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          width: "100%",
          height: "100vh",
          background: "radial-gradient(circle at 50% 50%, transparent 0%, rgba(2, 6, 23, 0.4) 100%)",
          backgroundImage: "linear-gradient(rgba(96, 165, 250, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(96, 165, 250, 0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      >

        <div className="absolute inset-0 z-10 opacity-10 pointer-events-none animate-scanline bg-gradient-to-b from-transparent via-blue-500 to-transparent h-1" style={{ top: '-10%' }} />
        <Canvas className="w-full h-full pointer-events-auto">


          <Suspense fallback={<Loader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <Float floatIntensity={1}>

              <TechDesktop
                scale={deskScale}
                position={deskPos}
                rotation={[0.1, -Math.PI, 0]}
              />
            </Float>
            <TechShapes sizes={sizes} />
            <OrbitalSystem />



            <Grid
              infiniteGrid
              fadeDistance={50}
              fadeStrength={5}
              cellSize={1}
              sectionSize={5}
              sectionThickness={1.5}
              sectionColor="#3b82f6"
              cellColor="#1d4ed8"
              position={[0, -10, 0]}
              rotation={[0, 0, 0]}
            />

            <Environment preset="city" />

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, 5, 10]} intensity={0.5} />
            <CursorLight />


            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};




const CursorLight = () => {
  const lightRef = useRef();

  useFrame((state) => {
    if (!lightRef.current) return;
    easing.damp3(
      lightRef.current.position,
      [state.mouse.x * 15, state.mouse.y * 10, 5],
      0.2,
      0.1
    );
  });

  return <pointLight ref={lightRef} intensity={10} distance={20} color="#60a5fa" />;
};

const TechShapes = ({ sizes }) => {
  return (
    <>
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[15, 8, -5]} rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="#60a5fa" wireframe />
        </mesh>
      </Float>


      {/* Floating Tech Logos (Symbolic) */}


      <Float speed={3} rotationIntensity={2.5} floatIntensity={1}>
        <mesh position={[-10, -12, 5]}>
          <octahedronGeometry args={[1]} />
          <meshStandardMaterial color="#93c5fd" emissive="#1d4ed8" emissiveIntensity={3} />
        </mesh>
      </Float>

      {/* Floating Holographic HUD Panel */}
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1}>
        <group position={[sizes.deskPosition[0] - 5, sizes.deskPosition[1] + 8, sizes.deskPosition[2] + 2]}>
          <mesh>
            <planeGeometry args={[3, 2]} />
            <meshBasicMaterial color="#3b82f6" opacity={0.05} transparent side={THREE.DoubleSide} />
          </mesh>
          <mesh position={[0, 0, 0.01]}>
            <ringGeometry args={[0.4, 0.5, 32]} />
            <meshBasicMaterial color="#60a5fa" opacity={0.4} transparent />
          </mesh>
          <mesh position={[0.8, 0, 0.01]}>
            <boxGeometry args={[0.5, 0.05, 0.01]} />
            <meshBasicMaterial color="#60a5fa" opacity={0.3} transparent />
          </mesh>
          <mesh position={[0.8, -0.2, 0.01]}>
            <boxGeometry args={[0.3, 0.05, 0.01]} />
            <meshBasicMaterial color="#60a5fa" opacity={0.3} transparent />
          </mesh>
        </group>
      </Float>


      {/* Decorative "Data Strings" (Lines) */}
      <group position={[sizes.deskPosition[0], sizes.deskPosition[1] + 5, sizes.deskPosition[2]]}>
        <mesh position={[10, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.005, 0.005, 20]} />
          <meshBasicMaterial color="#3b82f6" opacity={0.3} transparent />
        </mesh>
        <mesh position={[-10, -2, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <cylinderGeometry args={[0.005, 0.005, 25]} />
          <meshBasicMaterial color="#3b82f6" opacity={0.2} transparent />
        </mesh>
      </group>
    </>
  );
};


const OrbitalSystem = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.z += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {[0, 1, 2].map((i) => (
        <group key={i} rotation={[0, (i * Math.PI * 2) / 3, 0]}>
          <mesh position={[18, (i - 1) * 5, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={5} />
          </mesh>
          <mesh position={[10, (i - 1) * 2.5, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.002, 0.002, 18]} />
            <meshBasicMaterial color="#3b82f6" opacity={0.1} transparent />
          </mesh>
        </group>
      ))}
    </group>
  );
};



function Rig() {
  const groupRef = useRef();

  return useFrame((state, delta) => {
    // Dramatically increase camera movement range
    easing.damp3(
      state.camera.position,
      [state.mouse.x * 6, state.mouse.y * 6, 35],
      0.5,
      delta
    );

    // Smoothly tilt the entire scene towards the mouse
    if (state.scene.children[0]) {
      easing.dampE(
        state.scene.rotation,
        [state.mouse.y * 0.1, -state.mouse.x * 0.1, 0],
        0.5,
        delta
      );
    }

    state.camera.lookAt(0, 0, 0);
  });
}


export default Hero;

