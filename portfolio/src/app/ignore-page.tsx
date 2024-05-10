"use client"

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import React, { useRef, useEffect } from "react"
import * as THREE from 'three'

function CustomOrbitControls(){
    const controls = useRef(null!)

    const onMouseWheel = (event: WheelEvent) => {
        //do stuff
      }

    // useEffect(() => {
    //     controls.current.domElement
    // })
}

export default function Home() {
    // when using three js you will always need a scene, a camera and a renderer
    // a scene is like a container that holds objects, cameras and light
    const Box = () => { // not in use
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
                {/* staandard physciallybased material, using metallic-roughness workflow */}
                <meshStandardMaterial />
            </mesh>
        )
    }

    const Test = () => {
        const gltf = useLoader(GLTFLoader, "/donut.glb" ); // loads the model 
        const testRef = useRef<THREE.Mesh>(null!); //refernce to the model

        useEffect(()=>{
            // creates a box based off the model
            const meshBox = new THREE.Box3().setFromObject(testRef.current)
            // finds the center of the box
            const meshCenter = meshBox.getCenter(new THREE.Vector3());
            // adjusts model mesh position based off the box mesh position
            testRef.current.position.x = testRef.current.position.x - meshCenter.x;
            testRef.current.position.y = testRef.current.position.y - meshCenter.y;
            testRef.current.position.z = testRef.current.position.z - meshCenter.z;    
            // console.log(testRef.current.position.x, testRef.current.position.y , testRef.current.position.z)   
            // console.log(meshCenter.x, meshCenter.y , meshCenter.z)   
        })

        return <primitive object={gltf.scene} ref={testRef} />
    }

    return (
        <>
            {/* Canvas sets up a scene, camera and render loop automatically */}
            <Canvas camera={{ position: [0, 0, 0.2] }}>
                    <OrbitControls />
                    {/* <ambientLight intensity={0.1} /> */}
                    {/* <directionalLight ref={dl} color="red" position={[0, 0, 5]} /> */}
                    <hemisphereLight args={["#ffffff", "#444444", 1]}/>
                    {/* mesh is a basic scene object in three.js and used to hold the gemoetry and the matrial needed to represent a shape in 3D space*/}
                    <Test />
            </Canvas>
        </>
    )
}
