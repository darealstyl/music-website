import React, { useRef, useMemo, forwardRef, useImperativeHandle } from 'react';
import { Sky } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
// import { Sphere } from '@react-three/drei';

// const Sun = forwardRef((props, ref) => {
//   const sunRef = React.useRef();

//   useImperativeHandle(ref, () => ({
//     setPosition: (position) => {
//       sunRef.current.position.set(...position);
//     },
//   }));

//   return (
//     <Sphere ref={sunRef} args={[10, 32, 32]}>
//       <meshBasicMaterial attach="material" color={0xffffdd} />
//     </Sphere>
//   );
// });

const Skybox = () => {
  const sunPositionRef = useRef([
    0.9,
    0.04,
    -2]);
  const sunRef = useRef();

  useFrame(({ clock }) => {
    // const elapsedTime = clock.getElapsedTime();
    // const radius = 5;
    // const speed = 0.2;
    // const angle = elapsedTime * speed;

    sunPositionRef.current = [
      
      0.9,
      0.04,
      -2,
      
    ];

    // sunRef.current.setPosition(sunPositionRef.current);
  });

  // const sunPosition = useMemo(() => sunPositionRef.current, [
  //   sunPositionRef.current,
  // ]);

  return (
    <>
      {/* <Sun ref={sunRef} /> */}
      <Sky
        distance={5000}
        sunPosition={sunPositionRef.current}
        turbidity={1}
        rayleigh={3}
        mieCoefficient={0.008}
        mieDirectionalG={0.85}
      />
    </>
  );
};

export default Skybox;