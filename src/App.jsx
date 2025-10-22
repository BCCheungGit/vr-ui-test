import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Text, Container } from "@react-three/uikit";
import { colors, Button, Slider } from "@react-three/uikit-default";
import { useState } from "react";
import { DialogDemo } from "./components/DialogDemo";

export default function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
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
        flexDirection="column"
        borderWidth={5}
        borderColor="black"
        gapRow={30}
        borderRadius={10}
        alignItems="center"
        justifyContent="center"
      >
        <DialogDemo dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />{" "}
        <Button
          onClick={() => {
            console.log("dialog open");
            setDialogOpen(true);
          }}
        >
          <Text>Open Dialog</Text>
        </Button>
        <Slider defaultValue={50} max={100} step={1} maxWidth="50%" />
        <Container
          sizeX={6}
          sizeY={2.5}
          overflow="scroll"
          borderWidth={2}
          borderColor="gray"
          borderRadius={8}
          backgroundColor={colors.surface}
          padding={10}
          flexDirection="column"
          gapRow={10}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <Container
              key={i}
              sizeX="100%"
              sizeY={0.3}
              backgroundColor={colors.primary}
              borderRadius={5}
              alignItems="center"
              justifyContent="center"
            >
              <Text color={colors.textOnPrimary}>Test stuff</Text>
            </Container>
          ))}
          <Button>
            <Text>Next Page</Text>
          </Button>
        </Container>
      </Container>
    </Canvas>
  );
}
