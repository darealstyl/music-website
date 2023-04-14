import { useMemo } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

export function useClouds(numParticles, cloudTextureUrl) {
  const { scene } = useThree();

  useMemo(() => {
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

    const cloudParticles = new THREE.Points(geometry, cloudMaterial);
    scene.add(cloudParticles);

    return () => {
      scene.remove(cloudParticles);
    };
  }, [numParticles, cloudTextureUrl, scene]);
}
