"use client"
import Image from "next/image";
import { Box, Button, Input, Label } from "theme-ui";
export default function Home() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
      <Label htmlFor="search">Search</Label>
      <Input id="search" name="search"  />
      <Button>Go</Button>
    </Box>
  );
}
