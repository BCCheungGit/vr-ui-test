import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Text, Container } from "@react-three/uikit";
import { colors, Button } from "@react-three/uikit-default";

export default function App() {
  return (
    <Canvas
      style={{ position: "absolute", inset: "0", touchAction: "none" }}
      gl={{ localClippingEnabled: true }}
    >
      <OrbitControls />
      <Container
        backgroundColor={colors.background}
        sizeX={8}
        sizeY={4}
        flexDirection="row"
        borderWidth={5}
        borderColor="black"
        borderRadius={10}
        alignItems="center"
        justifyContent="center"
      >
        <Button onClick={() => console.log("Button Clicked")}>
          <Text>Test Button</Text>
        </Button>
      </Container>
    </Canvas>
  );
}
