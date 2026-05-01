import { Suspense, createElement as h, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useMotionValue, useScroll, useSpring } from "framer-motion";
import * as THREE from "three";

function CodeCube({ position, scale = 1, color = "#4f7cff" }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.15;
    ref.current.rotation.y = t * 0.2;
  });

  return h(
    Float,
    { speed: 1.2, rotationIntensity: 0.4, floatIntensity: 1.4 },
    h(
      "group",
      { position, scale },
      h(
        "mesh",
        { ref },
        h("boxGeometry", { args: [1, 1, 1] }),
        h(MeshDistortMaterial, {
          color,
          transparent: true,
          opacity: 0.32,
          metalness: 0.4,
          roughness: 0.15,
          distort: 0.18,
          speed: 1.5,
          emissive: color,
          emissiveIntensity: 0.4,
        }),
      ),
      h(
        "mesh",
        null,
        h("boxGeometry", { args: [1.02, 1.02, 1.02] }),
        h("meshBasicMaterial", {
          color,
          wireframe: true,
          transparent: true,
          opacity: 0.95,
        }),
      ),
    ),
  );
}

function NeonKnot({ position, progress }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.x = progress.get() * Math.PI * 2;
    ref.current.rotation.y += 0.003;
  });

  return h(
    Float,
    { speed: 0.8, rotationIntensity: 0.6, floatIntensity: 1.2 },
    h(
      "mesh",
      { ref, position },
      h("torusKnotGeometry", { args: [0.55, 0.16, 180, 24] }),
      h("meshStandardMaterial", {
        color: "#7c3aed",
        emissive: "#7c3aed",
        emissiveIntensity: 1.1,
        metalness: 0.6,
        roughness: 0.25,
        transparent: true,
        opacity: 0.85,
      }),
    ),
  );
}

function Nodes({ count = 16 }) {
  const { positions, geometry } = useMemo(() => {
    const points = [];

    for (let index = 0; index < count; index += 1) {
      points.push([
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 4 - 2,
      ]);
    }

    const segmentPositions = [];
    const segmentColors = [];
    const colorA = new THREE.Color("#4f7cff");
    const colorB = new THREE.Color("#7c3aed");

    for (let i = 0; i < points.length; i += 1) {
      for (let j = i + 1; j < points.length; j += 1) {
        const dx = points[i][0] - points[j][0];
        const dy = points[i][1] - points[j][1];
        const dz = points[i][2] - points[j][2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < 3) {
          const activeColor = (i + j) % 2 === 0 ? colorA : colorB;
          segmentPositions.push(...points[i], ...points[j]);
          segmentColors.push(
            activeColor.r,
            activeColor.g,
            activeColor.b,
            activeColor.r,
            activeColor.g,
            activeColor.b,
          );
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(segmentPositions, 3));
    lineGeometry.setAttribute("color", new THREE.Float32BufferAttribute(segmentColors, 3));

    return { positions: points, geometry: lineGeometry };
  }, [count]);

  return h(
    "group",
    null,
    ...positions.map((position, index) =>
      h(
        "mesh",
        { key: index, position },
        h("sphereGeometry", { args: [0.06, 12, 12] }),
        h("meshBasicMaterial", { color: index % 2 === 0 ? "#4f7cff" : "#7c3aed" }),
      ),
    ),
    h("lineSegments", { geometry }, h("lineBasicMaterial", { vertexColors: true, transparent: true, opacity: 0.55 })),
  );
}

function SceneContent({ progress }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;
    const value = progress.get();
    ref.current.rotation.y = value * Math.PI * 1.6;
    ref.current.rotation.x = value * Math.PI * 0.4;
    ref.current.position.y = value * -0.8;
    ref.current.scale.setScalar(1 + value * 0.3);
  });

  return h(
    "group",
    { ref, position: [2.6, 0, 0] },
    h(CodeCube, { position: [-1.4, 1.0, 0.4], scale: 0.8, color: "#4f7cff" }),
    h(CodeCube, { position: [1.6, -0.6, -0.6], scale: 0.7, color: "#7c3aed" }),
    h(CodeCube, { position: [0.4, 1.8, -0.8], scale: 0.5, color: "#ef3e93" }),
    h(NeonKnot, { position: [0.2, 0, 0], progress }),
    h(Nodes, { count: 14 }),
    h(Sparkles, { count: 80, scale: [12, 7, 7], size: 1.6, speed: 0.4, color: "#a7bbff" }),
  );
}

export default function Scene3D() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.4 });
  const progress = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = smooth.on("change", (value) => progress.set(value));
    return () => unsubscribe();
  }, [progress, smooth]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,124,255,0.16),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(124,58,237,0.20),transparent_50%)]" />
      <div className="grid-bg absolute inset-0 opacity-50" />
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
        {h("ambientLight", { intensity: 0.45 })}
        {h("pointLight", { position: [5, 4, 4], intensity: 3.2, color: "#4f7cff" })}
        {h("pointLight", { position: [-5, -3, 2], intensity: 3.4, color: "#7c3aed" })}
        {h("pointLight", { position: [0, 4, -3], intensity: 1.8, color: "#ef3e93" })}
        <Suspense fallback={null}>{h(SceneContent, { progress })}</Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_left,transparent_30%,rgba(5,7,13,0.45)_75%)]" />
    </div>
  );
}
