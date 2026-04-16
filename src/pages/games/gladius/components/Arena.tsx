const Arena = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 3]} intensity={1.0} castShadow />

      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#3a3a4a" />
      </mesh>

      {/* Back wall for depth */}
      <mesh position={[0, 1.5, -3]} receiveShadow>
        <planeGeometry args={[10, 4]} />
        <meshStandardMaterial color="#2a2a38" />
      </mesh>

      <fog attach="fog" args={["#1a1a2e", 5, 15]} />
    </>
  );
};

export default Arena;
