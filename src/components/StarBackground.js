import React from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const StarBackground = () => {
  return (
    <Canvas
      style={{ position: 'fixed', top: 0, left: 0 , background: 'black'}}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} />
      <Stars />
      {/* <mesh> */}
        {/* <boxBufferGeometry args={[1, 1, 1]} /> */}
        {/* <meshStandardMaterial color="orange" /> */}
      {/* </mesh> */}
      <OrbitControls />
    </Canvas>
  );
};

export default StarBackground;