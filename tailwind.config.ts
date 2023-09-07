import type { Config } from "tailwindcss";
import toTailwind from "@theme-ui/tailwind";
import { theme } from "@/app/theme"; // Path to Theme UI config

// module.exports = toTailwind(theme)

// console.log("toTailwind(theme):", toTailwind(theme))

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
