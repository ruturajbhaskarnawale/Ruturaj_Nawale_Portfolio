"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls, Billboard } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { skills, SkillCategory } from "@/lib/data";
import { EXPO_OUT } from "@/lib/motionConfig";
import { Brain, Cpu, Database, Layers, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDeviceTier } from "@/lib/useDeviceTier";

// Flatten items with category metadata for the 3D Sphere
interface SkillPoint {
  name: string;
  category: string;
  color: string;
  glowColor: string;
  position: THREE.Vector3;
}

function SkillWord({
  skill,
  isFiltered,
}: {
  skill: SkillPoint;
  isFiltered: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  const fontProps = {
    fontSize: 2.3,
    letterSpacing: -0.02,
    lineHeight: 1,
    "material-toneMapped": false,
  };

  const activeColor = hovered ? "#ffffff" : isFiltered ? skill.color : "#4b5563";

  return (
    <Billboard position={skill.position}>
      <Text
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
        {...fontProps}
      >
        {skill.name}
        <meshBasicMaterial
          color={activeColor}
          transparent
          opacity={isFiltered ? (hovered ? 1.0 : 0.85) : 0.2}
        />
      </Text>
    </Billboard>
  );
}

function SkillCloud({
  activeCategory,
}: {
  activeCategory: string | null;
}) {
  const { radius } = { radius: 24 };

  const skillPoints: SkillPoint[] = useMemo(() => {
    const allItems: { name: string; category: string; color: string; glowColor: string }[] = [];
    skills.forEach((cat) => {
      cat.items.forEach((item) => {
        allItems.push({
          name: item,
          category: cat.category,
          color: cat.color,
          glowColor: cat.glowColor,
        });
      });
    });

    const phiSpan = Math.PI * (3 - Math.sqrt(5)); // Fibonacci golden angle
    const total = allItems.length;

    return allItems.map((item, i) => {
      const y = 1 - (i / (total - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phiSpan * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      return {
        ...item,
        position: new THREE.Vector3(x * radius, y * radius, z * radius),
      };
    });
  }, [radius]);

  return (
    <>
      {skillPoints.map((skill, index) => {
        const isFiltered = !activeCategory || activeCategory === skill.category;
        return <SkillWord key={index} skill={skill} isFiltered={isFiltered} />;
      })}
    </>
  );
}

function Scene({ activeCategory }: { activeCategory: string | null }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.08;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.06;
    }
  });

  return (
    <group ref={group}>
      <SkillCloud activeCategory={activeCategory} />
    </group>
  );
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { dpr, isMobile } = useDeviceTier();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Brain": return <Brain size={15} />;
      case "Cpu": return <Cpu size={15} />;
      case "Layers": return <Layers size={15} />;
      case "Database": return <Database size={15} />;
      default: return <Sparkles size={15} />;
    }
  };

  return (
    <section id="skills" className="relative py-32 bg-[#060606] min-h-screen text-white overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container px-4 md:px-8 mx-auto relative z-10 max-w-7xl">
        
        {/* Chapter Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EXPO_OUT }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-blue-400 tracking-wider">
              &gt; 03_ARSENAL // MODEL STACK_
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            III. THE ARSENAL
          </h2>
          <p className="mt-2 text-gray-400 text-lg max-w-2xl font-light leading-relaxed">
            A specialized command console of production deep learning architectures, vision frameworks, and data pipelines.
          </p>
          <div className="h-px w-full bg-gradient-to-r from-blue-500/40 via-white/10 to-transparent mt-6" />
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          <button
            onClick={() => setSelectedCategory(null)}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 border flex items-center gap-2",
              selectedCategory === null
                ? "bg-white text-black font-bold border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
            )}
          >
            <Sparkles size={14} />
            <span>ALL MODULES ({skills.reduce((acc, c) => acc + c.items.length, 0)})</span>
          </button>

          {skills.map((cat) => {
            const isSelected = selectedCategory === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(isSelected ? null : cat.category)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 border flex items-center gap-2",
                  isSelected
                    ? "text-black font-bold border-transparent shadow-lg"
                    : "bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10"
                )}
                style={{
                  backgroundColor: isSelected ? cat.color : undefined,
                  boxShadow: isSelected ? `0 0 20px ${cat.glowColor}` : undefined,
                }}
              >
                {getCategoryIcon(cat.iconName)}
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* 3D Sphere & Structured Grid Dual View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* 3D Orbit Cloud View (Desktop & Tablet) */}
          <div className="lg:col-span-7 relative h-[450px] md:h-[550px] rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl overflow-hidden cursor-grab active:cursor-grabbing">
            <div className="absolute top-4 left-5 z-10 pointer-events-none">
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                // 3D TOPOLOGY • DRAG TO ORBIT
              </span>
            </div>

            <Canvas
              camera={{ position: [0, 0, 52], fov: 55 }}
              gl={{ antialias: true, alpha: true }}
              dpr={dpr}
            >
              <ambientLight intensity={1.5} />
              <Scene activeCategory={selectedCategory} />
              <TrackballControls noZoom noPan rotateSpeed={isMobile ? 1.5 : 2.5} />
            </Canvas>
          </div>

          {/* Structured Stack Cards (Right Side) */}
          <div className="lg:col-span-5 space-y-4">
            {skills.map((cat, idx) => {
              const isSelected = selectedCategory === cat.category;
              const isDimmed = selectedCategory !== null && !isSelected;

              return (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: EXPO_OUT }}
                  viewport={{ once: true }}
                  className={cn(
                    "p-5 rounded-2xl border transition-all duration-300 backdrop-blur-md",
                    isSelected
                      ? "bg-white/[0.08] border-white/30 shadow-[0_0_25px_rgba(255,255,255,0.05)]"
                      : isDimmed
                      ? "opacity-40 bg-white/[0.01] border-white/5"
                      : "bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.05]"
                  )}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                      <span
                        className="p-1.5 rounded-lg text-black font-bold"
                        style={{ backgroundColor: cat.color }}
                      >
                        {getCategoryIcon(cat.iconName)}
                      </span>
                      <h3 className="font-bold text-sm tracking-wide text-white">
                        {cat.category}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-gray-400">
                      {cat.items.length} items
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 mb-3 font-light">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/30 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
