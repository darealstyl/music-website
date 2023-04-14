import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

const CloudParticles = ({ numParticles, cloudTextureUrl }) => {
  const { scene } = useThree();

  const cloudParticles = useMemo(() => {
    const positions = new Float32Array(numParticles * 3); // 3 vertices per particle
    const cloudMaterial = new THREE.PointsMaterial({
      size: 5,
      map: new THREE.TextureLoader().load(cloudTextureUrl),
      transparent: true,
      depthWrite: false,
    });

    for (let i = 0; i < numParticles; i++) {
      positions[i * 3] = Math.random() * 200 - 100;
      positions[i * 3 + 1] = Math.random() * 50;
      positions[i * 3 + 2] = Math.random() * 200 - 100;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particles = new THREE.Points(geometry, cloudMaterial);
    scene.add(particles);

    return particles;
  }, [numParticles, cloudTextureUrl, scene]);

  return null;
};

const CloudScene = () => {
  // Replace 'path/to/cloud_texture.png' with the actual path to your cloud texture
  return <CloudParticles numParticles={200} cloudTextureUrl="../images/cloudsTexture.png" />;
};

export default CloudScene;
