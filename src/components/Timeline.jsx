import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTranslation } from "../i18n/index.jsx";

// Floating Neon Particles (extracted from hero section)
function NeonParticles() {
  const particlesRef = useRef(null);
  const particleCount = 500; // Increased particle count

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 600; // Much wider spread
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200; // Full vertical range (negative to positive)
      positions[i * 3 + 2] = (Math.random() - 0.5) * 600 - 50; // Deeper spread

      // Green neon colors
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i * 3] = 0.2; // R
        colors[i * 3 + 1] = 1; // G (bright green)
        colors[i * 3 + 2] = 0.3; // B
      } else if (colorChoice < 0.66) {
        colors[i * 3] = 0.4; // R (lime green)
        colors[i * 3 + 1] = 1; // G
        colors[i * 3 + 2] = 0.1; // B
      } else {
        colors[i * 3] = 0.1; // R (emerald green)
        colors[i * 3 + 1] = 0.8; // G
        colors[i * 3 + 2] = 0.4; // B
      }
    }

    return { positions, colors };
  }, [particleCount]);

  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.getElapsedTime();
      const positions = particlesRef.current.geometry.attributes.position.array;

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.03;
        positions[i * 3] += Math.cos(time * 0.5 + i * 0.05) * 0.02;
        positions[i * 3 + 2] += Math.sin(time * 0.3 + i * 0.07) * 0.02;
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      particlesRef.current.rotation.y = time * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.8} // Much bigger particles
        vertexColors={true}
        transparent={true}
        opacity={0.9} // Slightly more opaque
      />
    </points>
  );
}

// Simple Scene with just particles
function ParticleScene() {
  return (
    <>
      {/* Lighting - Green theme */}
      <ambientLight intensity={0.3} color="#001100" />
      <directionalLight position={[10, 20, 10]} intensity={0.5} color="#00ff44" />
      <pointLight position={[-50, 30, -50]} color="#00ff88" intensity={2} distance={100} />
      <pointLight position={[50, 30, 50]} color="#44ff00" intensity={2} distance={100} />
      <pointLight position={[0, 50, 0]} color="#88ff44" intensity={0.5} distance={120} />

      {/* Floating Neon Particles */}
      <NeonParticles />

      {/* Atmospheric fog - Green tinted, extended range */}
      <fog attach="fog" args={["#001100", 60, 400]} />
    </>
  );
}

export default function TimelineCenteredwithExtraInfo() {
  const { t } = useTranslation();
  
  const timelineEvents = [
    {
      date: "2023 - Present",
      title: t('timeline.events.current.title'),
      company: t('timeline.events.current.company'),
      description: t('timeline.events.current.description'),
      tags: [
        t('timeline.tags.fullstack'),
        t('timeline.tags.react'),
        t('timeline.tags.spring'),
        t('timeline.tags.java')
      ]
    },
    {
      date: "2020 - 2023",
      title: t('timeline.events.previous.title'),
      company: t('timeline.events.previous.company'),
      description: t('timeline.events.previous.description'),
      tags: [
        t('timeline.tags.backend'),
        t('timeline.tags.java'),
        t('timeline.tags.spring'),
        t('timeline.tags.sql')
      ]
    },
    {
      date: "2018 - 2020",
      title: t('timeline.events.education.title'),
      company: t('timeline.events.education.company'),
      description: t('timeline.events.education.description'),
      tags: [
        t('timeline.tags.computerScience'),
        t('timeline.tags.algorithms'),
        t('timeline.tags.databases')
      ]
    }
  ];

  return (
    <>
      {/* Background wrapper that fills full width with particles */}
      <div id="timeline" className="relative w-full bg-slate-100 py-10 dark:bg-slate-900 overflow-hidden">
        {/* 3D Canvas Background - Particles Only */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <Canvas
            className="w-full h-full"
            camera={{
              position: [0, 0, 80],
              fov: 75,
              near: 0.1,
              far: 1500
            }}
            gl={{
              alpha: true,
              antialias: true,
              powerPreference: "high-performance"
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0
            }}
          >
            <ParticleScene />
          </Canvas>
        </div>

        {/* Titel-Bereich */}
        <div className="relative z-10 mx-auto max-w-xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-black text-gray-900 dark:text-white">
            {t('timeline.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('timeline.subtitle')}
          </p>
        </div>

        {/* Centered content with fixed width */}
        <div className="relative mx-auto w-[60%] py-5 dark:text-slate-100" style={{ zIndex: 10 }}>
          {/* Vertical Guide */}
          <div
            className="absolute top-0 bottom-0 left-0 flex w-10 flex-col justify-center md:w-12 lg:left-1/2 lg:-ml-6"
            aria-hidden="true"
          >
            <div className="mx-auto h-2.5 w-1 grow-0 rounded-t bg-linear-to-b from-transparent to-teal-100 dark:to-teal-900" />
            <div className="mx-auto w-1 grow bg-teal-100 dark:bg-teal-900" />
            <div className="mx-auto h-2.5 w-1 grow-0 rounded-b bg-linear-to-t from-transparent to-teal-100 dark:to-teal-900" />
          </div>

          {/* Timeline Events */}
          <ul className="relative space-y-4 pl-10 md:pl-12 lg:pl-0">
            {timelineEvents.map((event, index) => (
              <li key={index} className="relative lg:mr-auto lg:w-1/2 lg:pr-6">
                <div className="absolute top-0 bottom-0 left-0 mt-5 flex w-10 -translate-x-full justify-center md:w-12 lg:right-0 lg:left-auto lg:translate-x-6">
                  <div className="size-3 rounded-full bg-teal-500 ring-3 ring-teal-100 ring-offset-2 dark:bg-teal-300 dark:ring-teal-900 dark:ring-offset-slate-900" />
                </div>
                <div className="rounded-xl bg-slate-100/80 backdrop-blur-sm p-4 hover:ring-3 hover:ring-slate-100 hover:ring-offset-2 dark:bg-slate-800/80 dark:ring-offset-slate-900 dark:hover:ring-slate-700 border border-slate-200/50 dark:border-slate-700/50">
                  <div className="flex items-center justify-between space-x-2">
                    <h3 className="font-bold text-slate-900 dark:text-slate-100">
                      {event.title}
                    </h3>
                    <time className="font-bold text-teal-600 shrink-0 dark:text-teal-400">
                      {event.date}
                    </time>
                  </div>
                  <div className="mt-1">
                    <div className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                      {event.company}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {event.description}
                    </p>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {event.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center rounded-md bg-teal-100 px-2 py-1 text-xs font-medium text-teal-700 dark:bg-teal-900/30 dark:text-teal-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}