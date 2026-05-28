'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion';

function MorphingMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const shouldReduceMotion = false;

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.8, 20);
    const positionAttr = geo.attributes.position;
    const colors = new Float32Array(positionAttr.count * 3);

    for (let i = 0; i < positionAttr.count; i++) {
      const y = positionAttr.getY(i);
      const t = (y + 2) / 4;
      colors[i * 3] = 59 / 255 + t * (249 / 255 - 59 / 255);
      colors[i * 3 + 1] = 130 / 255 + t * (115 / 255 - 130 / 255);
      colors[i * 3 + 2] = 246 / 255 + t * (22 / 255 - 246 / 255);
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, []);

  const originalPositions = useMemo(() => {
    return new Float32Array(geometry.attributes.position.array);
  }, [geometry]);

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;

    const time = clock.getElapsedTime();
    const positionAttr = meshRef.current.geometry.attributes.position;

    // Vertex displacement (morphing)
    for (let i = 0; i < positionAttr.count; i++) {
      const ox = originalPositions[i * 3];
      const oy = originalPositions[i * 3 + 1];
      const oz = originalPositions[i * 3 + 2];

      const noise =
        Math.sin(ox * 2 + time * 0.5) *
        Math.cos(oy * 2 + time * 0.3) *
        Math.sin(oz * 2 + time * 0.4) *
        0.15;

      positionAttr.setXYZ(i, ox + ox * noise, oy + oy * noise, oz + oz * noise);
    }
    positionAttr.needsUpdate = true;

    // Mouse-reactive rotation
    meshRef.current.rotation.x += 0.002 + pointer.y * 0.008;
    meshRef.current.rotation.y += 0.003 + pointer.x * 0.008;
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial vertexColors wireframe transparent opacity={0.15} />
    </mesh>
  );
}

function InnerGlow() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 1.5) * 0.1);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshBasicMaterial color="#1f6aff" transparent opacity={0.04} />
    </mesh>
  );
}

export default function R3FHeroScene({ onError }: { onError?: () => void }) {
  const offset = useMemo(() => new THREE.Vector2(0.0005, 0.0005), []);

  try {
    return (
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        onError={() => onError?.()}
      >
        <MorphingMesh />
        <InnerGlow />
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            intensity={0.8}
            radius={0.8}
          />
          <ChromaticAberration offset={offset} radialModulation={false} modulationOffset={0} />
        </EffectComposer>
      </Canvas>
    );
  } catch {
    onError?.();
    return null;
  }
}
