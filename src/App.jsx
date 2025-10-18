import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Container } from "@react-three/uikit";

export default function App() {
  return (
    <Canvas
      style={{ position: "absolute", inset: "0", touchAction: "none" }}
      gl={{ localClippingEnabled: true }}
    >
      <OrbitControls />
      <Container
        backgroundColor="white"
        sizeX={8}
        sizeY={4}
        flexDirection="row"
        borderWidth={5}
        borderColor="black"
        borderRadius={10}
      ></Container>
    </Canvas>
  );
}
