import { useGLTF } from "@react-three/drei";

export function TechDesktop(props) {
    const { scene } = useGLTF("/models/hacker_room_full.glb");

    return (
        <primitive object={scene} {...props} />
    );
}

useGLTF.preload("/models/hacker_room_full.glb");



