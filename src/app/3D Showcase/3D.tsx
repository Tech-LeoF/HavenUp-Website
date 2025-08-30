"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls, useGLTF, Sky } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { div } from "three/tsl";

function HouseModel() {
    const { scene } = useGLTF("/HomeSample3D.glb");
    return (
        <primitive
        object={scene}
        scale={10}                
        position={[0, 0, 0]}      
        rotation={[0, Math.PI, 0]} 
        />
);
}

function PlayerControls() {
const { camera } = useThree();
const velocity = useRef(new THREE.Vector3()); const direction = useRef(new THREE.Vector3());
const keys = useRef<{ [key: string]: boolean }>({});


useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => (keys.current[e.code] = true);
    const handleKeyUp = (e: KeyboardEvent) => (keys.current[e.code] = false);

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
    document.removeEventListener("keydown", handleKeyDown);
    document.removeEventListener("keyup", handleKeyUp);
    };
}, []);

useFrame((_, delta) => {
    if (!delta) return;

    direction.current.set(0, 0, 0);

    if (keys.current["KeyW"]) direction.current.z += 1;
    if (keys.current["KeyS"]) direction.current.z -= 1;
    if (keys.current["KeyA"]) direction.current.x -= 1;
    if (keys.current["KeyD"]) direction.current.x += 1;

    direction.current.normalize();

    const speed = 200;
    velocity.current.x = direction.current.x * speed * delta;
    velocity.current.z = direction.current.z * speed * delta;

    camera.position.add(
    camera.getWorldDirection(new THREE.Vector3()).multiplyScalar(velocity.current.z)
    );
    camera.position.add(
    new THREE.Vector3().setFromMatrixColumn(camera.matrix, 0).multiplyScalar(velocity.current.x)
    );});

return null;
}


export default function HouseViewer() {
    return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className="space-y-8">
        <div className="flex justify-center w-full h-20 bg-[#629584] items-center">
            <p className="text-white text-5xl font-bold">Virtual Tour</p>
        </div>
        <div className="flex flex-row justify-evenly">
            <div className="w-220 h-120 bg-[#F5F5DC] rounded-lg flex justify-center items-center">
                <div className="w-200 h-100">
                    <Canvas camera={{ position: [30, 5, 30], fov: 110 }}>
                    <Sky sunPosition={[100, 20, 100]} />

                    <ambientLight intensity={0.6} />
                    <directionalLight position={[20, 50, 10]} intensity={1.5} />


                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                    <planeGeometry args={[1000, 1000]} />
                    <meshStandardMaterial color="lightgreen" />
                    </mesh>

                    <HouseModel />

                    <PlayerControls />
                    <PointerLockControls />
                </Canvas>
                </div>
            </div>
            <div className="w-100 h-120 bg-[#F5F5DC] rounded-lg flex flex-col justify-evenly items-center">

                <div className="font-bold text-black text-2xl">
                    <p>Room's Information</p>
                </div>

                <div className="w-80 h-20 bg-[#FFD166] rounded-lg text-black flex flex-col justify-center items-center">
                    <p className="font-bold text-xl">Living Room</p>
                    <p className="text-sm">Spacious living area with floor-to-celling windows.</p>
                </div>

                <div className="w-80 h-20 bg-[#FFD166] rounded-lg text-black flex flex-col justify-center items-center">
                    <p className="font-bold text-xl">Kitchen</p>
                    <p className="text-sm">Modern kitchen with granite countertops.</p>
                </div>

                <div className="w-80 h-20 bg-[#FFD166] rounded-lg text-black flex flex-col justify-center items-center">
                    <p className="font-bold text-xl">Master Bedroom</p>
                    <p className="text-sm">Large bedroom with city views.</p>
                </div>

                <div className="w-80 h-20 bg-[#FFD166] rounded-lg text-black flex flex-col justify-center items-center">
                    <p className="font-bold text-xl">Bathroom</p>
                    <p className="text-sm">Luxury bathroom with premium futures.</p>
                </div>

            </div>
        </div>
        <div className="flex flex-row justify-evenly">
            <div className="w-220 h-80 bg-[#F5F5DC] rounded-lg">

            </div>

            <div className="flex flex-col space-y-8">
                <div className="w-100 h-120 bg-[#F5F5DC] rounded-lg">

                </div>
                <div className="w-100 h-120 bg-[#F5F5DC] rounded-lg">

                </div>
            </div>
        </div>
    </div>
);
}
