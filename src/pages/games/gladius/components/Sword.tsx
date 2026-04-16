import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { BladeDirection, CombatAction } from "../logic/types";

const DIRECTION_ROTATION: Record<BladeDirection, number> = {
  vertical: 0,
  horizontal: Math.PI / 2,
  "diagonal-left": Math.PI / 4,
  "diagonal-right": -Math.PI / 4,
};

const ACTION_COLORS: Record<CombatAction, string> = {
  idle: "#888888",
  attacking: "#ff4444",
  blocking: "#4488ff",
  staggered: "#ffaa00",
  recovering: "#888888",
};

interface SwordProps {
  position: [number, number, number];
  direction: BladeDirection;
  action: CombatAction;
  mirror?: boolean;
}

const Sword = ({ position, direction, action, mirror }: SwordProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = DIRECTION_ROTATION[direction];
  const color = ACTION_COLORS[action];

  useFrame(() => {
    if (!groupRef.current) return;
    // Smooth rotation interpolation
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      targetRotation,
      0.15,
    );
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Blade */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[0.06, 1.0, 0.15]} />
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
      {/* Guard */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.3, 0.06, 0.06]} />
        <meshStandardMaterial color="#555555" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Handle */}
      <mesh position={[0, -0.25, 0]}>
        <boxGeometry args={[0.05, 0.35, 0.05]} />
        <meshStandardMaterial
          color={mirror ? "#4a2020" : "#20304a"}
          roughness={0.8}
        />
      </mesh>
    </group>
  );
};

export default Sword;
