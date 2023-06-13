"use client"

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React, { useRef, useEffect } from "react"
import * as THREE from 'three'


export default function Home() {
    // when using three js you will always need a scene, a camera and a renderer
    // a scene is like a container that holds objects, cameras and light

    const Box = () => {
        // react ref provides a means of accessing dom elements without using any selector methods of the document objext
        // this is possible because react provides a ref jsx attribute on every jsx element and with it you can pass a ref
        // variable to it and then have access to that element
        const boxRef = useRef<THREE.Mesh>(null!);
        

        useFrame(() => {
            boxRef.current.rotateX(0.01)
            boxRef.current.rotateY(0.01)
            boxRef.current.rotateZ(0.01)
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

    const Test = () => {
        const gltf = useLoader(GLTFLoader, "/loz_LA.glb" );

        const testRef = useRef<THREE.Mesh>(null!);

        useEffect(()=>{
            // testRef.current.geometry.computeBoundingBox();
            // const boundingBox = testRef.current.geometry.boundingBox
            console.log(testRef.current)
            // const center = new THREE.Vector3
            // boundingBox.getCenter(center)
            // testRef.current.position.x += center.x]
            
            const meshBox = new THREE.Box3().setFromObject(testRef.current)
            const meshCenter = meshBox.getCenter(new THREE.Vector3());
            testRef.current.position.x = testRef.current.position.x - meshCenter.x;
            testRef.current.position.y = testRef.current.position.y - meshCenter.y;
            testRef.current.position.z = testRef.current.position.z - meshCenter.z;       
        })

        return <primitive object={gltf.scene} ref={testRef} />
    }

    return (
        <div className="w-full h-full">
            {/* Canvas sets up a scene, camera and render loop automatically */}
            <Canvas>
                <OrbitControls />
                {/* <ambientLight intensity={0.1} /> */}
                {/* <directionalLight ref={dl} color="red" position={[0, 0, 5]} /> */}
                <hemisphereLight args={["#ffffff", "#444444", 1]}/>
                {/* mesh is a basic scene object in three.js and used to hold the gemoetry and the matrial needed
        to represent a shape in 3D space*/}
                {/* <Box /> */}
                <Test />
            </Canvas>
        </div>
    )
}
