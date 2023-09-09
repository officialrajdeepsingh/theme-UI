"use client";
/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from "theme-ui";
import { theme } from "./theme";
import * as React from "react";
import { Header } from "@/components/Header";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
/**
 * @see https://emotion.sh/docs/@emotion/cache
 */
const key = "custom";
const cache = createCache({ key });
// const cache = createCache()
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <CacheProvider value={cache}>
    <ThemeUIProvider theme={theme}>
      <Header />
      {children}
    </ThemeUIProvider>
  </CacheProvider>
);
