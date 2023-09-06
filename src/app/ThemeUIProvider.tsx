/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from "theme-ui";
import { theme } from "./theme";
import * as React from "react";
export const App = ({ children }: { children: React.ReactNode }) => (
  <ThemeUIProvider theme={theme}>
    {children}
  </ThemeUIProvider>
);
