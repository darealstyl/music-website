import React, { useRef, useLayoutEffect } from 'react';
import { Water } from 'three/examples/jsm/objects/Water';
import * as THREE from 'three';
import { useThree, useFrame, useLoader } from 'react-three-fiber';

const OceanInner = ({ position, width, length }) => {
  const { scene } = useThree();
  const waterRef = useRef();
  const waterNormals = useLoader(
    THREE.TextureLoader,
    'https://threejs.org/examples/textures/waternormals.jpg'
  );

  useLayoutEffect(() => {
    if (!waterNormals) return;

    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

    const waterGeometry = new THREE.PlaneBufferGeometry(width, length);
    const water = new Water(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      alpha: 1.0,
      sunDirection: new THREE.Vector3(),
      sunColor: new THREE.Color(0xffffff),
      waterColor: new THREE.Color(0x184ebc),
      distortionScale: 3.7,
      fog: scene.fog !== undefined,
    });

    water.rotation.x = -Math.PI / 2;
    water.position.set(...position);
    waterRef.current = water;
    scene.add(water);

    return () => {
      scene.remove(water);
    };
  }, [scene, position, width, length, waterNormals]);

  useFrame(({ clock }) => {
    if (waterRef.current) {
      waterRef.current.material.uniforms['time'].value += 0.003+clock.getDelta();
    }
  });

  return null;
};

const OceanBackground = ({ position = [0, 15, 0], width = 5000, length = 5000 }) => {
  return (
    <group>
      <OceanInner position={position} width={width} length={length} />
    </group>
  );
};

export default OceanBackground;