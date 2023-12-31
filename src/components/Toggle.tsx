import { useColorMode } from "theme-ui";

export function Toggle() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <header>
      <button
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
      >
        {colorMode === "default" ? "Dark" : "Light"}
      </button>
    </header>
  );
}
