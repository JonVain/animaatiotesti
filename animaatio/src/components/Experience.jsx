import Valmistanssi from "./Valmistanssi";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import { AmbientLight, DirectionalLight, MeshBasicMaterial, PlaneGeometry, Mesh, TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const Experience = () => {
    const [map, normalMap, displacementMap] = useLoader(TextureLoader, [
        "/images/floor/sandstone_cracks_diff_4k.jpg",
        "/images/floor/sandstone_cracks_nor_dx_4k.jpg",
        "/images/floor/sandstone_cracks_disp_4k.jpg",
    ]);
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;

    map.repeat.set(8, 8);

    normalMap.wrapS = THREE.RepeatWrapping;
    normalMap.wrapT = THREE.RepeatWrapping;

    normalMap.repeat.set(8, 8);

    displacementMap.wrapS = THREE.RepeatWrapping;
    displacementMap.wrapT = THREE.RepeatWrapping;

    displacementMap.repeat.set(8, 8);

    return (
        <>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-5, 5, 5]} intensity={0.5} castShadow />
            <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, 0, 0]}>
                <planeGeometry args={[100, 50, 1024, 1024]} />
                <meshStandardMaterial map={map} normalMap={normalMap} displacementMap={displacementMap} displacementScale={0.1} />
                {/* <planeGeometry args={[100, 100]} />
                <meshBasicMaterial color="cyan" /> */}
            </mesh>
            <Valmistanssi />
        </>
    );
};

export default Experience;
