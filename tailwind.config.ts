import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollbarHide: {
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "scrollbar-width": "none",
        "-ms-overflow-style": "none",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
export default config;
