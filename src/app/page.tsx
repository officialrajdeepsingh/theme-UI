"use client";
import { Box, Button, Flex, Heading, Container, Alert, Close } from "theme-ui";
import { Toggle } from "@/components/Toggle";
export default function Home() {
  return (
    <>
      <Container p={4} bg="muted">
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
      </Container>
      
      <Container mt={"10px"} p={"10px"} >
        <Alert>
          Beep boop, this is an alert!
          <Close ml="auto" mr={-2} />
        </Alert>
      </Container>

    </>
  );
}