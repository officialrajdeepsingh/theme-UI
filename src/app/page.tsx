"use client";

import { AspectImage, Box, Card, Container, Text } from "theme-ui";
export default function Home() {
  return (
    <>
      <Container p={4} bg="muted">
        <Card
          sx={{
            maxWidth: 460
          }}
        >
          <AspectImage
            ratio={4 / 3}
            src={"https://cdn.pixabay.com/photo/2023/04/15/14/42/baby-7927864_1280.jpg"}
          />
          <Box p={"10px"}>
            <Text as={"h1"} mb={"8px"} variant="caps">
              Lorem ipsum dolor sit amet cillum sint consectetur cupidatat.
            </Text>
            <Text as={"p"}
              sx={{
                fontSize: 2,
                display: "block",
              }}
            >
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </Text>
          </Box>
        </Card>
      </Container>
    </>
  );
}
