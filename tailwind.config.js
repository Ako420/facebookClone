/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0866FF",
          pressed: "#075CE5",
          tint: "#E7F3FF",
        },
        canvas: {
          light: "#F0F2F5",
          dark: "#18191A",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#242526",
        },
        "surface-raised": {
          light: "#FFFFFF",
          dark: "#3A3B3C",
        },
        foreground: {
          light: "#1C1E21",
          dark: "#E4E6EB",
        },
        muted: {
          light: "#65676B",
          dark: "#B0B3B8",
        },
        border: {
          light: "#DADDE1",
          dark: "#3E4042",
        },
        danger: {
          light: "#D93025",
          dark: "#FF6B6B",
        },
      },
      fontSize: {
        display: ["2.25rem", { lineHeight: "2.75rem", letterSpacing: "-0.04em" }],
        title: ["1.25rem", { lineHeight: "1.75rem" }],
        body: ["1rem", { lineHeight: "1.5rem" }],
        label: ["0.875rem", { lineHeight: "1.25rem" }],
        caption: ["0.75rem", { lineHeight: "1rem" }],
      },
    },
  },
  plugins: [],
}