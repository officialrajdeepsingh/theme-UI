"use client";
import React from "react";
import { Box, Container, Message, Paragraph, Text } from "theme-ui";

export default function Blog() {
  return (
    <Container
      p={4}
      sx={{
        justifyContent: "center",
        mx: "auto",
        px: 3,
        py: 4,
      }}
      bg="mediumslateblue"
    >
      <Text as={"h1"} mb={"6px"}>About us</Text>
      <Paragraph as={"p"} mt={"20px"} variant="block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc
        elit, feugiat ut velit eget, pellentesque accumsan libero. Duis interdum
        ante sed ipsum imperdiet congue nec non mauris.
      </Paragraph>
    </Container>
  );
}
