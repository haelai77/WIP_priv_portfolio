"use client"

import { OrbitControls } from "@react-three/drei";
import { TimeGate } from "../../public";
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import React, { useRef, useEffect, useState } from "react"
import { useGLTF, Center } from '@react-three/drei'
import * as THREE from 'three'

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
const Og_loz = () => {
	const gltf = useLoader(GLTFLoader, "/loz_LA.glb" );

	const modelRef = useRef<THREE.Mesh>(null!);

	useEffect(()=>{
		const bounding_box = new THREE.Box3().setFromObject(modelRef.current)
		const center = bounding_box.getCenter(new THREE.Vector3());
		modelRef.current.position.sub(center);

	})

	useFrame(() => {
		const bounding_box = new THREE.Box3().setFromObject(modelRef.current)
		const center = bounding_box.getCenter(new THREE.Vector3());
		modelRef.current.position.sub(center);

		modelRef.current.rotateY(0.005)
	})


	return <primitive object={gltf.scene} ref={modelRef} />
}

// other zelda model (I can't manage to center it)
const Loz = () => {
    const modelRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!);

    useEffect(()=>{
		const bounding_box = new THREE.Box3().setFromObject(modelRef.current)
        const center = bounding_box.getCenter(new THREE.Vector3());
		modelRef.current.position.sub(center);
		console.log(modelRef.current.position) 
	});

	useFrame(({ clock }) => {
		modelRef.current.rotation.y = clock.getElapsedTime();
	})

	const { nodes, materials } = useGLTF('/lk_awking.glb')
	return (
		<Center>
		<group ref={modelRef} dispose={null}>
				{/* this group needs to stay other wise books start appearing underneath the model lel */}
				<group
				position={[40.042, 25.636, 13.552]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.649}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['Green_Book005_23_-_Default_0'].geometry}
					material={materials['23_-_Default']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['Green_Book004_16_-_Default_0'].geometry}
					material={materials['16_-_Default']}
					position={[0, 0, 2.2]}
				/>
				</group>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Table_13_-_Default_0'].geometry}
				material={materials['13_-_Default']}
				position={[22.053, 19.572, 39.376]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Desk_04_-_Default_0'].geometry}
				material={materials['04_-_Default']}
				position={[11.233, 18.85, 6.18]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				scale={0.912}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Book_16_-_Default_0'].geometry}
				material={materials['16_-_Default']}
				position={[5.248, 20.07, 5.125]}
				rotation={[-Math.PI / 2, 0, -2.443]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Yellow_Bucket_01_-_Default_0'].geometry}
				material={materials['01_-_Default']}
				position={[-26.215, 19.497, 60.762]}
				rotation={[-Math.PI / 2, 0, 1.833]}
				scale={[0.769, 0.769, 0.693]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Painting_15_-_Default_0'].geometry}
				material={materials['15_-_Default']}
				position={[11.086, 27.233, 0.931]}
				rotation={[0, 0, Math.PI / 2]}
				scale={[1.948, 2.715, 1.948]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Wall_Candle_Holder_Material_#22_0'].geometry}
				material={materials.Material_22}
				position={[-34.819, 23.67, 41.381]}
				rotation={[-Math.PI / 2, 0, -Math.PI]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Candle_24_-_Default_0'].geometry}
				material={materials['24_-_Default']}
				position={[19.176, 24.337, -44.877]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Table_Candle_Holder_05_-_Default_0'].geometry}
				material={materials['05_-_Default']}
				position={[19.165, 21.232, 4.481]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				scale={0.888}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Brown_Pot_07_-_Default_0'].geometry}
				material={materials['07_-_Default']}
				position={[-15.537, 19.887, 47.379]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={[0.946, 0.946, 0.852]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Gold_Pot_02_-_Default_0'].geometry}
				material={materials['02_-_Default']}
				position={[50.369, 19.738, 79.108]}
				rotation={[-Math.PI / 2, 0, -2.269]}
				scale={[0.769, 0.769, 0.693]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Blue_Pot_09_-_Default_0'].geometry}
				material={materials['09_-_Default']}
				position={[-8.549, 23.88, -18.53]}
				rotation={[-Math.PI / 2, 0, -0.175]}
				scale={[0.63, 0.63, 0.567]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Room_18_-_Default_0'].geometry}
				material={materials['18_-_Default']}
				position={[3.239, 13.96, -74.415]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				scale={[1.343, 1.266, 1.297]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Candle001_24_-_Default_0'].geometry}
				material={materials['24_-_Default']}
				position={[-34.8, 30.731, -11.274]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Candle003_24_-_Default_0'].geometry}
				material={materials['24_-_Default']}
				position={[90.179, 30.417, 43.634]}
				rotation={[-Math.PI / 2, 0, -0.087]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Candle004_24_-_Default_0'].geometry}
				material={materials['24_-_Default']}
				position={[40.974, 30.417, 85.429]}
				rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Wall_Candle_Holder001_Material_#22_0'].geometry}
				material={materials.Material_22}
				position={[40.992, 23.356, 36.067]}
				rotation={[-Math.PI / 2, 0, 0]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Book001_16_-_Default_0'].geometry}
				material={materials['16_-_Default']}
				position={[4.711, 21.302, 4.57]}
				rotation={[-Math.PI / 2, 0, -2.269]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['UpperLevel_Material_#15_0'].geometry}
				material={materials.Material_15}
				position={[-16.632, 9.292, 19.151]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				scale={[1.531, 1.048, 1.048]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Brown_Pot001_07_-_Default_0'].geometry}
				material={materials['07_-_Default']}
				position={[47.802, 19.887, 57.488]}
				rotation={[-Math.PI / 2, 0, -1.92]}
				scale={[0.946, 0.946, 0.852]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Bookcase_10_-_Default_0'].geometry}
				material={materials['10_-_Default']}
				position={[34.385, 13.101, 3.262]}
				rotation={[-Math.PI / 2, 0, -Math.PI]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Red_Book_16_-_Default_0'].geometry}
				material={materials['16_-_Default']}
				position={[27.9, 17.466, 4.032]}
				rotation={[Math.PI / 2, -Math.PI / 2, 0]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Red_Book001_16_-_Default_0'].geometry}
				material={materials['16_-_Default']}
				position={[29.306, 17.466, 4.032]}
				rotation={[Math.PI / 2, -Math.PI / 2, 0]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Red_Book002_16_-_Default_0'].geometry}
				material={materials['16_-_Default']}
				position={[30.712, 17.466, 4.032]}
				rotation={[Math.PI / 2, -Math.PI / 2, 0]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Black_Book001_22_-_Default_0'].geometry}
				material={materials['22_-_Default']}
				position={[32.122, 17.466, 4.032]}
				rotation={[Math.PI / 2, -Math.PI / 2, 0]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Black_Book002_22_-_Default_0'].geometry}
				material={materials['22_-_Default']}
				position={[33.528, 17.466, 4.032]}
				rotation={[Math.PI / 2, -Math.PI / 2, 0]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Red_Book003_16_-_Default_0'].geometry}
				material={materials['16_-_Default']}
				position={[34.983, 17.466, 4.032]}
				rotation={[Math.PI / 2, -Math.PI / 2, 0]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Red_Book004_16_-_Default_0'].geometry}
				material={materials['16_-_Default']}
				position={[36.411, 17.466, 4.032]}
				rotation={[Math.PI / 2, -Math.PI / 2, 0]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Red_Book005_16_-_Default_0'].geometry}
				material={materials['16_-_Default']}
				position={[26.456, 25.636, 4.032]}
				rotation={[Math.PI / 2, -Math.PI / 2, 0]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Red_Book006_16_-_Default_0'].geometry}
				material={materials['16_-_Default']}
				position={[27.864, 25.636, 4.032]}
				rotation={[Math.PI / 2, -Math.PI / 2, 0]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Red_Book007_16_-_Default_0'].geometry}
				material={materials['16_-_Default']}
				position={[29.245, 25.636, 4.032]}
				rotation={[Math.PI / 2, -Math.PI / 2, 0]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Red_Book008_16_-_Default_0'].geometry}
				material={materials['16_-_Default']}
				position={[30.651, 25.636, 4.032]}
				rotation={[Math.PI / 2, -Math.PI / 2, 0]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Red_Book009_16_-_Default_0'].geometry}
				material={materials['16_-_Default']}
				position={[32.106, 25.636, 4.032]}
				rotation={[Math.PI / 2, -Math.PI / 2, 0]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Green_Book_23_-_Default_0'].geometry}
				material={materials['23_-_Default']}
				position={[33.535, 25.636, 4.032]}
				rotation={[Math.PI / 2, -Math.PI / 2, 0]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Green_Book001_23_-_Default_0'].geometry}
				material={materials['23_-_Default']}
				position={[34.989, 25.636, 4.032]}
				rotation={[Math.PI / 2, -Math.PI / 2, 0]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Green_Book002_23_-_Default_0'].geometry}
				material={materials['23_-_Default']}
				position={[36.415, 25.636, 4.032]}
				rotation={[Math.PI / 2, -Math.PI / 2, 0]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Green_Book003_16_-_Default_0'].geometry}
				material={materials['16_-_Default']}
				position={[40.042, 25.636, 10.672]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Red_Book012_16_-_Default_0'].geometry}
				material={materials['16_-_Default']}
				position={[40.042, 25.636, 6.382]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Red_Book013_16_-_Default_0'].geometry}
				material={materials['16_-_Default']}
				position={[40.042, 25.636, 7.788]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Red_Book014_16_-_Default_0'].geometry}
				material={materials['16_-_Default']}
				position={[40.042, 25.636, 9.243]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Green_Book006_23_-_Default_0'].geometry}
				material={materials['23_-_Default']}
				position={[40.042, 17.43, 10.672]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Green_Book007_16_-_Default_0'].geometry}
				material={materials['16_-_Default']}
				position={[40.042, 17.43, 12.125]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Green_Book008_22_-_Default_0'].geometry}
				material={materials['22_-_Default']}
				position={[40.042, 17.43, 13.552]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Red_Book015_16_-_Default_0'].geometry}
				material={materials['16_-_Default']}
				position={[40.042, 17.43, 6.382]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Red_Book016_23_-_Default_0'].geometry}
				material={materials['23_-_Default']}
				position={[40.042, 17.43, 7.788]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Red_Book017_23_-_Default_0'].geometry}
				material={materials['23_-_Default']}
				position={[40.042, 17.43, 9.243]}
				rotation={[Math.PI, 0, Math.PI / 2]}
				scale={0.649}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Golden_Box_06_-_Default_0'].geometry}
				material={materials['06_-_Default']}
				position={[25.365, 14.015, 61.257]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Plant_08_-_Default_0'].geometry}
				material={materials['08_-_Default']}
				position={[-19.802, 28.197, -1.627]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				scale={0.902}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Couch_12_-_Default_0'].geometry}
				material={materials['12_-_Default']}
				position={[-11.304, 16.125, 44.426]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				scale={[0.822, 0.832, 1]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Book002_22_-_Default_0'].geometry}
				material={materials['22_-_Default']}
				position={[-27.547, 13.973, 114.079]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				scale={[1, 0.832, 1]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Bed_19_-_Default_0'].geometry}
				material={materials['19_-_Default']}
				position={[-30.454, 21.107, 12.092]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				scale={[0.791, 0.852, 0.214]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Chair_14_-_Default_0'].geometry}
				material={materials['14_-_Default']}
				position={[34.151, 16.251, 36.126]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Chair001_14_-_Default_0'].geometry}
				material={materials['14_-_Default']}
				position={[16.29, 16.251, 13.806]}
				rotation={[-Math.PI / 2, 0, 0.873]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pillar_20_-_Default_0'].geometry}
				material={materials['20_-_Default']}
				position={[-10.994, 19.936, -79.594]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pillar001_20_-_Default_0'].geometry}
				material={materials['20_-_Default']}
				position={[-114.659, 19.936, 31.192]}
				rotation={[-Math.PI / 2, 0, -Math.PI]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pillar002_20_-_Default_0'].geometry}
				material={materials['20_-_Default']}
				position={[-114.659, 19.936, 23.743]}
				rotation={[-Math.PI / 2, 0, -Math.PI]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pillar003_20_-_Default_0'].geometry}
				material={materials['20_-_Default']}
				position={[-114.659, 19.936, 16.4]}
				rotation={[-Math.PI / 2, 0, -Math.PI]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pillar004_20_-_Default_0'].geometry}
				material={materials['20_-_Default']}
				position={[-114.659, 19.936, 8.913]}
				rotation={[-Math.PI / 2, 0, -Math.PI]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pillar005_20_-_Default_0'].geometry}
				material={materials['20_-_Default']}
				position={[-10.994, 19.936, -72.855]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pillar006_20_-_Default_0'].geometry}
				material={materials['20_-_Default']}
				position={[-35.297, 19.936, -79.594]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Pillar007_20_-_Default_0'].geometry}
				material={materials['20_-_Default']}
				position={[-34.659, 19.936, -44.524]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Wardrobe_21_-_Default_0'].geometry}
				material={materials['21_-_Default']}
				position={[-84.084, 21.368, 4.416]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Page_03_-_Default_0'].geometry}
				material={materials['03_-_Default']}
				position={[12.444, 18.872, 7.991]}
				rotation={[-Math.PI / 2, 0, 1.658]}
				scale={0.701}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Candle005_24_-_Default_0'].geometry}
				material={materials['24_-_Default']}
				position={[5.659, 30.731, 12.945]}
				rotation={[-Math.PI / 2, 0, 0.611]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Rug_Bedroom_Material_#4_0'].geometry}
				material={materials.Material_4}
				position={[-21.475, 19.4, 14.409]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Plane001_Material_#6_0'].geometry}
				material={materials.Material_6}
				position={[22.927, 14.01, 40.696]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Picture_Frame_Material_#7_0'].geometry}
				material={materials.Material_7}
				position={[30.073, 32.891, 4.538]}
				rotation={[-0.262, 0, Math.PI / 2]}
				scale={[0.524, 0.73, 0.524]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Picture_Frame001_Material_#8_0'].geometry}
				material={materials.Material_8}
				position={[28.876, 33.629, 2.037]}
				rotation={[-0.262, 0, -Math.PI]}
				scale={[0.681, 0.73, 0.524]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Fishing_Rod_Material_#9_0'].geometry}
				material={materials.Material_9}
				position={[-30.605, 14.478, -45.036]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				scale={[1, 1, 2.43]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Fishing_Rod001_Material_#9_0'].geometry}
				material={materials.Material_9}
				position={[-57.833, 14.478, -41.031]}
				rotation={[-Math.PI / 2, 0, 1.833]}
				scale={[1, 1, 2.43]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Moss_Material_#10_0'].geometry}
				material={materials.Material_10}
				position={[39.552, 32.494, 42.295]}
				rotation={[0, Math.PI / 2, 0]}
				scale={[2, 1, 0.3]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Moss001_Material_#10_0'].geometry}
				material={materials.Material_10}
				position={[-33.921, 32.486, 19.662]}
				rotation={[0, -Math.PI / 2, 0]}
				scale={[1.68, 1, 0.3]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Moss002_Material_#10_0'].geometry}
				material={materials.Material_10}
				position={[0.096, 31.356, 2.965]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={[1.672, 1, 0.3]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Roll_of_Paper_Material_#12_0'].geometry}
				material={materials.Material_12}
				position={[19.789, 29.505, 54.798]}
				rotation={[-1.628, 0.486, 2.821]}
				scale={[1, 1, 4.925]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Roll_of_Paper001_Material_#12_0'].geometry}
				material={materials.Material_12}
				position={[46.834, 16.127, 40.136]}
				rotation={[-1.743, 0.075, 1.134]}
				scale={[1, 1, 4.925]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Feather_Pen_Material_#13_0'].geometry}
				material={materials.Material_13}
				position={[17.243, 20.645, 7.764]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Bowl_Material_#11_0'].geometry}
				material={materials.Material_11}
				position={[22.031, 25.629, -26.485]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				scale={0.8}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Frog_Statue_11_-_Default_0'].geometry}
				material={materials['11_-_Default']}
				position={[22.986, 32.347, 23.563]}
				rotation={[-Math.PI / 2, 0, 0.911]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Frog_Ornament_Material_#19_0'].geometry}
				material={materials.Material_19}
				position={[40.679, 31.937, 12.487]}
				rotation={[-Math.PI / 2, 0, Math.PI / 3]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Tools_Material_#21_0'].geometry}
				material={materials.Material_21}
				position={[21.067, 22.636, 36.891]}
				rotation={[0, -0.175, 0]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Frog_Material_#18_0'].geometry}
				material={materials.Material_18}
				position={[-6.703, 20.162, 45.631]}
				rotation={[-Math.PI / 2, 0, -0.834]}
				scale={0.5}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Frog001_Material_#18_0'].geometry}
				material={materials.Material_18}
				position={[8.661, 20.418, 50.181]}
				rotation={[-Math.PI / 2, 0, 1.958]}
				scale={0.5}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Frog002_Material_#18_0'].geometry}
				material={materials.Material_18}
				position={[-9.552, 25.753, 19.44]}
				rotation={[-Math.PI / 2, 0, 1.26]}
				scale={0.5}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Frog003_Material_#18_0'].geometry}
				material={materials.Material_18}
				position={[-18.466, 25.753, 20.297]}
				rotation={[-Math.PI / 2, 0, -2.579]}
				scale={0.5}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Orb_Material_#17_0'].geometry}
				material={materials.Material_17}
				position={[35.098, 34.786, 3.455]}
				rotation={[-Math.PI / 2, 0, -0.175]}
				scale={1.1}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Trophey_Material_#16_0'].geometry}
				material={materials.Material_16}
				position={[40.78, 31.865, 4.193]}
				rotation={[-Math.PI / 2, 0, 0.96]}
				scale={[0.7, 0.7, 0.49]}
				/>
				<mesh
				castShadow
				receiveShadow
				geometry={nodes['Castle_Ornament_Material_#20_0'].geometry}
				material={materials.Material_20}
				position={[-0.884, 30.932, 4.661]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={0.84}
				/>
		</group>
		</Center>
	)
}

export default function Home() {
	const modeldivref = React.useRef<HTMLCanvasElement>(null);


	const handleZoom = (event: React.WheelEvent<HTMLDivElement>) => {
        if (event.target === modeldivref.current) {
            event.preventDefault();
        }
    };

	// for adding wobble to name and adding wheel event listener to canvas
	useEffect(() => {
		const all = document.querySelectorAll('.wobble');

		// Iterate through each letter to wobble
		all.forEach(string_element => {
			// Get the text content of the element// Create an array of separate letters
			let text = string_element.textContent!.split("");

			// Iterate through each letter and give it its own span element and individual animation delay offset
			const textCode = text.map((x, idx) => {
				let delay = (idx + 1) * 50;
				return `<span style="animation-delay: ${delay}ms">${x}</span>`;
			})
			// replace the element's html with our dynamically created html
			string_element.innerHTML = textCode.join("");
		});

		//creates event listener on wheel event
		if (modeldivref.current) {
			modeldivref.current.addEventListener('wheel', handleZoom, { passive: false });
		};

		return () => {
			if (modeldivref.current) {
				modeldivref.current.removeEventListener('wheel', handleZoom, { passive: false });
			}
		};

    }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount


	return (
		<div className="px-[5rem] pt-[2rem] flex flex-col select-non overflow-hidden">
			<p>Hi, my name is...</p>

			{/* wobbling name */}
			<h1 className="wobble text-5xl text-inherit py-[0.25rem] font-semibold ml-[-0.3srem] z-0">
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


			<Canvas
				style={{ width: "280px", height: "230px" }}
				camera={{ position: [0, 7, 12]}}
				ref={modeldivref}
			>	
				<OrbitControls />
				<hemisphereLight args={["#ffffff", "#444444", 2]}/>
				<Og_loz />
			</Canvas>

		</div>
	)
}

