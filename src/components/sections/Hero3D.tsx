"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useEffect } from "react";
import { MotionValue } from "framer-motion";
import { useDeviceTier } from "@/lib/useDeviceTier";

// ============================================================================
// Viscous Fluid Ribbon Shader — Pure Blue & Red Palette with Ultra-Slow Morph
// ============================================================================
const ViscousBlueRedShader = {
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uScroll: { value: 0 },
    uColorBg: { value: new THREE.Color("#020308") },       // Deep obsidian base
    uBlueDeep: { value: new THREE.Color("#1e3a8a") },      // Deep Royal Blue
    uBlueBright: { value: new THREE.Color("#2563eb") },    // Vibrant Sapphire Blue
    uRedDeep: { value: new THREE.Color("#7f1d1d") },       // Deep Crimson / Wine
    uRedBright: { value: new THREE.Color("#dc2626") },     // Rich Ruby Red
  },
  vertexShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uScroll;
    varying vec2 vUv;
    varying float vElevation;
    varying vec3 vNormal;

    // Simplex Noise 3D implementation
    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

    float snoise(vec3 v){
      const vec2  C = vec2(1.0/6.0, 1.0/3.0);
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );
      vec3 x1 = x0 - i1 + 1.0 * C.xxx;
      vec3 x2 = x0 - i2 + 2.0 * C.xxx;
      vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
      i = mod(i, 289.0 );
      vec4 p = permute( permute( permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
      float n_ = 0.142857142857;
      vec3  ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
    }

    void main() {
      vUv = uv;
      vec3 pos = position;

      // Ultra-slow, viscous liquid wave displacement
      float t = uTime * 0.12;
      vec2 mouseOffset = uMouse * 0.25;
      
      float wave1 = snoise(vec3(pos.x * 0.28 + mouseOffset.x * 0.1, pos.y * 0.28 + mouseOffset.y * 0.1, t * 0.6));
      float wave2 = snoise(vec3(pos.x * 0.55 - t * 0.3, pos.y * 0.55, t * 0.8 + wave1 * 0.35));
      float wave3 = snoise(vec3(pos.x * 0.9, pos.y * 0.9, t * 0.4 + uScroll * 1.0));

      float elevation = (wave1 * 0.65 + wave2 * 0.25 + wave3 * 0.1) * 1.35;
      pos.z += elevation;

      vElevation = elevation;
      vNormal = normal;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColorBg;
    uniform vec3 uBlueDeep;
    uniform vec3 uBlueBright;
    uniform vec3 uRedDeep;
    uniform vec3 uRedBright;
    varying vec2 vUv;
    varying float vElevation;

    void main() {
      // Ultra-slow, barely noticeable color cycle between deep Blue and rich Red
      float slowCycle = sin(uTime * 0.08) * 0.5 + 0.5; // very slow, smooth 0->1 oscillation
      
      // Blue palette blending
      vec3 blueCol = mix(uBlueDeep, uBlueBright, smoothstep(-0.6, 1.2, vElevation));
      
      // Red palette blending
      vec3 redCol = mix(uRedDeep, uRedBright, smoothstep(-0.6, 1.2, vElevation + sin(vUv.x * 2.0 + uTime * 0.04) * 0.3));

      // Viscous spatial blending of Blue and Red
      float spatialWave = sin(vUv.x * 3.1415 + vUv.y * 2.0 + uTime * 0.06) * 0.5 + 0.5;
      float colorBalance = mix(spatialWave, slowCycle, 0.45);

      vec3 activeFluid = mix(blueCol, redCol, colorBalance);

      // Depth gradient fade to dark obsidian background
      float depthFade = smoothstep(-1.3, 1.3, vElevation);
      vec3 finalCol = mix(uColorBg, activeFluid, depthFade * 0.88);

      // Subtle edge vignette fade for soft framing
      float edgeVignette = smoothstep(0.0, 0.22, vUv.x) * smoothstep(1.0, 0.78, vUv.x) *
                           smoothstep(0.0, 0.22, vUv.y) * smoothstep(1.0, 0.78, vUv.y);

      gl_FragColor = vec4(finalCol, edgeVignette * 0.85);
    }
  `,
};

function ViscousFluidPlane({ scrollYProgress }: { scrollYProgress?: MotionValue<number> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const mouseTarget = useRef({ x: 0, y: 0 });
  const scrollVal = useRef(0);

  useEffect(() => {
    if (scrollYProgress) {
      const unsub = scrollYProgress.on("change", (v) => {
        scrollVal.current = v;
      });
      return () => unsub();
    }
  }, [scrollYProgress]);

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
      
      // Smooth mouse lerp for organic fluid inertia
      mouseTarget.current.x = THREE.MathUtils.lerp(mouseTarget.current.x, state.mouse.x, 0.035);
      mouseTarget.current.y = THREE.MathUtils.lerp(mouseTarget.current.y, state.mouse.y, 0.035);
      materialRef.current.uniforms.uMouse.value.set(mouseTarget.current.x, mouseTarget.current.y);
      materialRef.current.uniforms.uScroll.value = scrollVal.current;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2.5]} rotation={[-0.15, 0, 0]}>
      <planeGeometry args={[20, 14, 160, 160]} />
      <shaderMaterial
        ref={materialRef}
        args={[ViscousBlueRedShader]}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

// ============================================================================
// Main Hero3D Component — 100% Pure Viscous Fluid (No particles / No sparkles)
// ============================================================================
export default function Hero3D({ scrollYProgress }: { scrollYProgress?: any }) {
  const { dpr } = useDeviceTier();

  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-auto overflow-hidden bg-[#020308]">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={dpr}
      >
        <color attach="background" args={["#020308"]} />
        <fog attach="fog" args={["#020308", 4, 18]} />
        
        {/* Pure Viscous Fluid Mesh (Blue & Red Palette) */}
        <ViscousFluidPlane scrollYProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
}
