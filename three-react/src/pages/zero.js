import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export default function Zero() {
  return (
    <>
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <sphereBufferGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </>
  );
}
