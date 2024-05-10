"use client"

import { OrbitControls } from "@react-three/drei";
import { TimeGate } from "../../public";
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import React, { useRef, useEffect } from "react"
import { Mesh } from 'three'
import * as THREE from 'three'

export default function Home() {

	useEffect(() => {
		const all = document.querySelectorAll('.wobble');
		// Iterate through each "wobble"
		all.forEach(el => {
			// Get the text content of the element// Create an array of separate letters
			let text = el.textContent!.split("");

			// Iterate through each letter and give it its own span element and individual animation delay offset
			const textCode = text.map((x, idx) => {
				let delay = (idx + 1) * 50;
				return `<span style="animation-delay: ${delay}ms">${x}</span>`;
			})
			// replace the element's html with our dynamically created html
			el.innerHTML = textCode.join("");
		});
	})

	// test for spinning cube
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
	// test for zelda model
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
		<div className="px-[5rem] pt-[2rem] flex flex-col select-none">
			<p>Hi, my name is...</p>

			{/* wobbling name */}
			<h1 className="wobble text-5xl text-inherit py-[0.25rem] font-semibold ml-[-0.3srem] z-[0]">
				Leo_Lai
			</h1>

			
			<p className="max-w-4xl mt-[1rem]">
				I am a third-year computer science student pursuing an BSc at the <a className="text-secondaryLight underline" href="https://www.bristol.ac.uk/">The University Of Bristol</a>.
				I have had hands-on experience with building web-apps and data analysis.
				I am currently going to <a className="text-secondaryLight underline" href="https://www.ucl.ac.uk/prospective-students/graduate/taught-degrees/data-science-and-machine-learning-msc">UCL</a> for data science and machine learning but will soon be looking forward to roles in AI/ML engineering, data science or software engineering.🚀
			</p>

			<div className="arrows-div mb-5  z-0">
				<div className="arrow   z-0">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<h1 className="text-5xl text-inherit my-[0.7rem] font-semibold ml-[-0.3srem]">
				Skills & Projects
			</h1>
			<p className="text-l text-inherit my-[0.7rem] font-semibold ml-[-0.3srem]">
				The 3D model below can be spun around (via react-three-fibre)
			</p>

			<div className="w-screen h-screen">
            	{/* Canvas sets up a scene, camera and render loop automatically */}
            	<Canvas camera={{ position: [0, 5, 10]}} style={{ width: "50vw", height: "50vh" }}>
            	    <OrbitControls />
            	    {/* <ambientLight intensity={0.1} /> */}
            	    {/* <directionalLight ref={dl} color="red" position={[0, 0, 5]} /> */}
            	    <hemisphereLight args={["#ffffff", "#444444", 1]}/>
            	    {/* mesh is a basic scene object in three.js and used to hold the gemoetry and the matrial needed to represent a shape in 3D space*/}
            	    {/* <Box /> */}
            	    <Test />
            	</Canvas>
        	</div>

{/* carousel looks bad */}
			{/* <div className="carousel w-[20rem] py-[1rem] rounded bg-white">
				<div id="slide1" className="carousel-item relative w-full">
					<img src={TimeGate.src} className="w-full"/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide4" className="btn btn-circle">❮</a>
						<a href="#slide2" className="btn btn-circle">❯</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<img src={TimeGate.src} className="w-full" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide1" className="btn btn-circle">❮</a>
						<a href="#slide3" className="btn btn-circle">❯</a>
					</div>
				</div>

			</div> */}
		</div>
	)
}