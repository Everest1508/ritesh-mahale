// Components/ThreeDObject.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import katana from "../static/models/scene.gltf"; // Replace with your model path

function Model() {
  const { nodes, materials } = useGLTF(katana);
  console.log(nodes); // Check the structure of nodes in the console
  return <primitive object={nodes.Scene} material={materials.Material} />;
}

export default function ThreeDObject() {
  return (
    <div className="w-full h-64">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Model />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
