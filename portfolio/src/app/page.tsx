"use client"

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React, { useRef, useEffect } from "react"
import { Mesh } from 'three'


export default function Home() {
    // when using three js you will always need a scene, a camera and a renderer
    // a scene is like a container that holds objects, cameras and light

    const Box = () => {
        // react ref provides a means of accessing dom elements without using any selector methods of the document objext
        // this is possible because react provides a ref jsx attribute on every jsx element and with it you can pass a ref
        // variable to it and then have access to that element
        const boxRef = useRef<Mesh>(null!);

        useFrame(() => {
            boxRef.current.rotation.y += 0.01
        });

        return (
            <mesh ref={boxRef} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
                {/* geometry class for a rectuangular cuboids*/}
                <boxGeometry args={[2, 2, 2]} />
                {/* staandard physcially based material, using metallic-roughness workflow */}
                <meshStandardMaterial />
            </mesh>
        )
    }

    const Sword = () => {
        const gltf = useLoader(GLTFLoader, "/mastersword.glb" );
        return <primitive object={gltf.scene} />
    }

    return (
        <div>
            {/* Canvas sets up a scene, camera and render loop automatically */}
            <Canvas>
                <OrbitControls />
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                {/* mesh is a basic scene object in three.js and used to hold the gemoetry and the matrial needed
        to represent a shape in 3D space*/}
                <Box />
                <Sword />
            </Canvas>
        </div>
    )
}
