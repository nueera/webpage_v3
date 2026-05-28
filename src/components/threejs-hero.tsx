'use client';

import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { useReducedMotion } from 'framer-motion';
import dynamic from 'next/dynamic';

interface ThreeJSHeroProps {
  enabled?: boolean;
}

/* ────── Pure Three.js fallback (no postprocessing) ────── */
function ThreeJSCanvasBasic({ enabled }: ThreeJSHeroProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const mouseRef = useRef({ x: 0, y: 0 });
  const [hasError, setHasError] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = {
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -(e.clientY / window.innerHeight) * 2 + 1,
    };
  }, []);

  useEffect(() => {
    if (!enabled || shouldReduceMotion || hasError) return;

    let cleanup = false;
    let renderer: import('three').WebGLRenderer | null = null;
    let animationId: number;

    const initThree = async () => {
      try {
        const THREE = await import('three');

        if (cleanup || !canvasRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        canvasRef.current.appendChild(renderer.domElement);

        // Morphing Icosahedron with vertex displacement
        const geometry = new THREE.IcosahedronGeometry(1.8, 20);
        const positionAttr = geometry.attributes.position;
        const originalPositions = new Float32Array(positionAttr.array);

        // Blue-to-orange vertex colors
        const colors = new Float32Array(positionAttr.count * 3);
        for (let i = 0; i < positionAttr.count; i++) {
          const y = positionAttr.getY(i);
          const t = (y + 2) / 4;
          colors[i * 3] = 59 / 255 + t * (249 / 255 - 59 / 255);
          colors[i * 3 + 1] = 130 / 255 + t * (115 / 255 - 130 / 255);
          colors[i * 3 + 2] = 246 / 255 + t * (22 / 255 - 246 / 255);
        }
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.MeshBasicMaterial({
          vertexColors: true,
          wireframe: true,
          transparent: true,
          opacity: 0.12,
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Add inner glow sphere
        const glowGeo = new THREE.SphereGeometry(1.2, 32, 32);
        const glowMat = new THREE.MeshBasicMaterial({
          color: 0x1f6aff,
          transparent: true,
          opacity: 0.04,
        });
        const glowSphere = new THREE.Mesh(glowGeo, glowMat);
        scene.add(glowSphere);

        const clock = new THREE.Clock();

        const animate = () => {
          if (cleanup) return;
          animationId = requestAnimationFrame(animate);

          const time = clock.getElapsedTime();

          // Vertex displacement (morphing effect)
          for (let i = 0; i < positionAttr.count; i++) {
            const ox = originalPositions[i * 3];
            const oy = originalPositions[i * 3 + 1];
            const oz = originalPositions[i * 3 + 2];

            const noise = Math.sin(ox * 2 + time * 0.5) * Math.cos(oy * 2 + time * 0.3) * Math.sin(oz * 2 + time * 0.4) * 0.15;

            positionAttr.setXYZ(i, ox + ox * noise, oy + oy * noise, oz + oz * noise);
          }
          positionAttr.needsUpdate = true;

          // Rotation with mouse reactivity
          mesh.rotation.x += 0.002 + mouseRef.current.y * 0.008;
          mesh.rotation.y += 0.003 + mouseRef.current.x * 0.008;

          glowSphere.rotation.x = mesh.rotation.x * 0.5;
          glowSphere.rotation.y = mesh.rotation.y * 0.5;

          // Pulse glow
          glowSphere.scale.setScalar(1 + Math.sin(time * 1.5) * 0.1);

          renderer?.render(scene, camera);
        };

        animate();

        const handleResize = () => {
          if (!renderer || cleanup) return;
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('mousemove', handleMouseMove);
        };
      } catch {
        setHasError(true);
      }
    };

    initThree();

    return () => {
      cleanup = true;
      cancelAnimationFrame(animationId);
      if (renderer) {
        renderer.dispose();
        renderer.domElement.remove();
      }
    };
  }, [enabled, shouldReduceMotion, hasError, handleMouseMove]);

  if (!enabled || shouldReduceMotion || hasError) return null;

  return (
    <div
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{ opacity: 0.6 }}
    />
  );
}

/* ────── R3F Hero with Post-processing ────── */
const R3FHeroScene = dynamic(() => import('./r3f-hero-scene'), { ssr: false });

function ThreeJSCanvasEnhanced({ enabled }: ThreeJSHeroProps) {
  const [hasError, setHasError] = useState(false);

  if (!enabled || hasError) return null;

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{ opacity: 0.7 }}
    >
      <R3FHeroScene onError={() => setHasError(true)} />
    </div>
  );
}

export function ThreeJSHero({ enabled = true }: ThreeJSHeroProps) {
  if (!enabled) return null;

  // Try enhanced first; if dynamic import fails, fallback is handled by error state
  return <ThreeJSCanvasEnhanced enabled={enabled} />;
}
