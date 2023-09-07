"use client";
import { Box, Button, Flex, Heading } from "theme-ui";
import { Toggle } from "@/components/Toggle";
export default function Home() {
  return (
    <Box p={4} bg="highlight">
      <Flex
        sx={{
          alignItems: "center",
        }}
      >
        <Heading>Components</Heading>
        <Button ml="auto">Beep</Button>
        <Toggle />
      </Flex>
    </Box>
  );
}
