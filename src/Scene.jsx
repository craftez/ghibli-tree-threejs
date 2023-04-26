import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Color } from 'three';
import { Trees } from './Trees';

export const Scene = () => {
  const refTrees = useRef(null);

  useFrame(() => {
    const { current: group } = refTrees;
    if (group) {
      group.rotation.x = group.rotation.y += 0.01;
    }
  })

  return <>
    <ambientLight intensity={0.1} />
    <directionalLight
      color="white"
      position={[15, 15, 15]}
      castShadow
      shadow-mapSize-width={2048}
      shadow-mapSize-heigh={2048}
    />

    <Trees
      ref={refTrees}
      position={[0, 0, -2]}
      colors={[
        new Color('#427062').convertLinearToSRGB(),
        new Color('#33594e').convertLinearToSRGB(),
        new Color('#234549').convertLinearToSRGB(),
        new Color('#1e363f').convertLinearToSRGB(),
      ]}
    />
    <Trees
      ref={refTrees}
      position={[0, 0, 4]}
      colors={[
        new Color('#4a8d7e').convertLinearToSRGB(),
        new Color('#377f6a').convertLinearToSRGB(),
        new Color('#184f52').convertLinearToSRGB(),
        new Color('#143b36').convertLinearToSRGB(),
      ]}
    />
  </>
}
