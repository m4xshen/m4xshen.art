'use client'

import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Inter from '../fonts/Inter_Bold.json';
import { Text3D, Center, OrthographicCamera } from '@react-three/drei';

export default function Title() {
  const ref = useRef(null);

  const handlePointerMove = (e) => {
    if (!ref?.current) { return; }
    ref.current.rotation.set(
      (e.clientY-window.innerHeight/2) / 1000,
      (e.clientX-window.innerWidth/2) / 3000,
      0
    );
  }

  useEffect(() => {
    window.addEventListener('pointermove', handlePointerMove);
    
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    }
  }, []);

  return (
    <div className="w-screen h-40">
      <Canvas>
        <OrthographicCamera makeDefault position={[0, 0, 100]} />
        <pointLight intensity={1} position={[0, 0, 100]} />
        <ambientLight intensity={0.1} />
        <Center ref={ref} back>
          <Text3D font={Inter} bevelEnabled bevelThickness={20} size={90}>
            Max Shen
            <meshStandardMaterial />
          </Text3D>
        </Center>
      </Canvas>
    </div>
  );
}
