import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./shiba/scene.glft");
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

export default function One() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
