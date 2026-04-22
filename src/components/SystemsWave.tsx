"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const POINTS_COUNT = 60000;

const vertexShader = `
uniform float uTime;
uniform vec3 uMouse;

attribute float aYOffset;
attribute float aSpeed;

varying vec3 vColor;

void main() {
    vec3 pos = position;
    
    // Data stream/pulse effect: particles move along the Z axis based on time
    // Modulo math ensures they loop seamlessly
    float currentZ = mod(pos.z + uTime * 15.0 * aSpeed + 100.0, 200.0) - 100.0;
    pos.z = currentZ;

    // Multi-layered sine wave pulse
    float waveX = sin(pos.x * 0.15 + uTime) * 1.5;
    float waveZ = cos(pos.z * 0.1 - uTime * 0.5) * 1.5;
    float combinedWave = waveX + waveZ;
    
    // Mouse interaction (distance on XZ plane)
    float dist = distance(pos.xz, uMouse.xz);
    float hoverEffect = smoothstep(12.0, 0.0, dist); // Influence radius

    // Amplitude jump based on hover
    pos.y += combinedWave + (hoverEffect * 6.0) + aYOffset;

    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
    gl_PointSize = 45.0 * (1.0 / -viewPosition.z); // Adjust perspective size

    // Colors
    vec3 baseCol = vec3(0.482, 0.173, 0.749); // #7B2CBF
    vec3 hoverCol = vec3(0.902, 0.224, 0.275); // #E63946
    
    // Shift color based on hover
    vColor = mix(baseCol, hoverCol, hoverEffect);
    
    // Add pulsing brightness based on the wave to look like a data stream
    float pulse = (sin(pos.z * 0.2 + uTime * 2.0) + 1.0) * 0.5;
    vColor += baseCol * pulse * 0.3;
}
`;

const fragmentShader = `
varying vec3 vColor;

void main() {
    // Soft circular points
    float dist = distance(gl_PointCoord, vec2(0.5));
    if (dist > 0.5) discard;
    
    float alpha = 1.0 - (dist * 2.0);
    gl_FragColor = vec4(vColor, alpha * 0.85);
}
`;

function Particles() {
  const ref = useRef<THREE.ShaderMaterial>(null);
  
  const [mousePos, setMousePos] = useState(new THREE.Vector3(-1000, -1000, -1000));

  const { positions, offsets, speeds } = useMemo(() => {
    const pos = new Float32Array(POINTS_COUNT * 3);
    const offset = new Float32Array(POINTS_COUNT);
    const speed = new Float32Array(POINTS_COUNT);

    const startX = -100;
    const endX = 100;
    const startZ = -100;
    const endZ = 100;

    for (let i = 0; i < POINTS_COUNT; i++) {
        // Distribute points pseudo-randomly over the grid area for organic data streams
        const x = startX + Math.random() * (endX - startX);
        const z = startZ + Math.random() * (endZ - startZ);

        pos[i * 3] = x;
        pos[i * 3 + 1] = -6; // Base Y elevation
        pos[i * 3 + 2] = z;
        
        offset[i] = (Math.random() - 0.5) * 1.5;
        speed[i] = 0.5 + Math.random(); // Variations in data stream speed
    }
    return { positions: pos, offsets: offset, speeds: speed };
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector3(-1000, -1000, -1000) },
    }),
    []
  );

  useFrame((state) => {
    if (ref.current) {
      ref.current.uniforms.uTime.value = state.clock.elapsedTime;
      ref.current.uniforms.uMouse.value.lerp(mousePos, 0.1);
    }
  });

  return (
    <>
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -6, 0]} 
        onPointerMove={(e) => setMousePos(e.point)}
        onPointerLeave={() => setMousePos(new THREE.Vector3(-1000, -1000, -1000))}
        visible={false}
      >
        <planeGeometry args={[250, 250]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-aYOffset" args={[offsets, 1]} />
          <bufferAttribute attach="attributes-aSpeed" args={[speeds, 1]} />
        </bufferGeometry>
        <shaderMaterial
          ref={ref}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}

export default function SystemsWave() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-auto overflow-hidden">
      <Canvas
        camera={{ position: [0, 6, 25], fov: 45 }}
        dpr={[1, 2]}
        gl={{ powerPreference: "high-performance", antialias: false }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
