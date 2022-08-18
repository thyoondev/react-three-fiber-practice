import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color={'red'} position={[0, 0, 5]} />
        <mesh position={[0, 0, 1]}>
          <octahedronGeometry args={[2, 2, 2]} />
          <meshBasicMaterial color={'green'} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
