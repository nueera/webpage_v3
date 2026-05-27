'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';

interface ThreeJSHeroProps {
  enabled?: boolean;
}

function ThreeJSCanvas({ enabled }: ThreeJSHeroProps) {
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

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.z = 5;

        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        canvasRef.current.appendChild(renderer.domElement);

        // TorusKnot geometry
        const geometry = new THREE.TorusKnotGeometry(1.2, 0.4, 128, 32);
        const material = new THREE.MeshBasicMaterial({
          color: 0x3b82f6,
          wireframe: true,
          transparent: true,
          opacity: 0.15,
        });

        // Create gradient effect using vertex colors
        const colors = new Float32Array(geometry.attributes.position.count * 3);
        const posArray = geometry.attributes.position.array;

        for (let i = 0; i < geometry.attributes.position.count; i++) {
          const y = posArray[i * 3 + 1];
          const t = (y + 2) / 4; // normalize roughly to 0-1

          // Blue to orange gradient
          // Blue: 59/255, 130/255, 246/255 (#3B82F6)
          // Orange: 249/255, 115/255, 22/255 (#F97316)
          colors[i * 3] = 59 / 255 + t * (249 / 255 - 59 / 255);
          colors[i * 3 + 1] = 130 / 255 + t * (115 / 255 - 130 / 255);
          colors[i * 3 + 2] = 246 / 255 + t * (22 / 255 - 246 / 255);
        }

        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const gradientMaterial = new THREE.MeshBasicMaterial({
          vertexColors: true,
          wireframe: true,
          transparent: true,
          opacity: 0.12,
        });

        const torusKnot = new THREE.Mesh(geometry, gradientMaterial);
        scene.add(torusKnot);

        // Animation
        const animate = () => {
          if (cleanup) return;

          animationId = requestAnimationFrame(animate);

          // Subtle auto-rotation
          torusKnot.rotation.x += 0.002;
          torusKnot.rotation.y += 0.003;

          // Mouse-reactive rotation
          torusKnot.rotation.x += mouseRef.current.y * 0.01;
          torusKnot.rotation.y += mouseRef.current.x * 0.01;

          renderer?.render(scene, camera);
        };

        animate();

        // Handle resize
        const handleResize = () => {
          if (!renderer || cleanup) return;
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        // Store cleanup for resize/mouse listeners
        const originalCleanup = cleanup;
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

  if (!enabled || shouldReduceMotion || hasError) {
    return null;
  }

  return (
    <div
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{ opacity: 0.6 }}
    />
  );
}

export function ThreeJSHero({ enabled = false }: ThreeJSHeroProps) {
  if (!enabled) return null;
  return <ThreeJSCanvas enabled={enabled} />;
}
