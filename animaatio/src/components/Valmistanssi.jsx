import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Valmistanssi = (props) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("./models/valmistanssi.glb");
    const { actions, names } = useAnimations(animations, group);
    console.log(names);

    const [anim, setAnim] = useState(1);

    useEffect(() => {
        console.log(`playing animation ${names[anim]}`);
        actions[names[anim]].reset().fadeIn(0.5).play();
        return () => {
            actions[names[anim]].fadeOut(0.5);
        };
    }, [anim]);

    window.animtoggle = () => {
        setAnim((anim + 1) % names.length);
    };

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <skinnedMesh name="Ch31_Body" geometry={nodes.Ch31_Body.geometry} material={materials.Ch31_body} skeleton={nodes.Ch31_Body.skeleton} />
                    <skinnedMesh name="Ch31_Collar" geometry={nodes.Ch31_Collar.geometry} material={materials.Ch31_body} skeleton={nodes.Ch31_Collar.skeleton} />
                    <skinnedMesh name="Ch31_Eyelashes" geometry={nodes.Ch31_Eyelashes.geometry} material={materials.Ch31_hair} skeleton={nodes.Ch31_Eyelashes.skeleton} />
                    <skinnedMesh name="Ch31_Hair" geometry={nodes.Ch31_Hair.geometry} material={materials.Ch31_hair} skeleton={nodes.Ch31_Hair.skeleton} />
                    <skinnedMesh name="Ch31_Pants" geometry={nodes.Ch31_Pants.geometry} material={materials.Ch31_body} skeleton={nodes.Ch31_Pants.skeleton} />
                    <skinnedMesh name="Ch31_Shoes" geometry={nodes.Ch31_Shoes.geometry} material={materials.Ch31_body} skeleton={nodes.Ch31_Shoes.skeleton} />
                    <skinnedMesh name="Ch31_Sweater" geometry={nodes.Ch31_Sweater.geometry} material={materials.Ch31_body} skeleton={nodes.Ch31_Sweater.skeleton} />
                    <primitive object={nodes.mixamorig9Hips} />
                </group>
            </group>
        </group>
    );
};
export default Valmistanssi;

useGLTF.preload("./models/valmistanssi.glb");
