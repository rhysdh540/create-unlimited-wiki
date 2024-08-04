/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "cu-text": "#fce7d4",
        "cu-background": "#4c3115",
        "cu-primary": "#f5c27f",
        "cu-secondary": "#0b8e55",
        "cu-accent": "#1dc3ed",
      },
      fontFamily: {
        headings: ["Pixelify Sans Variable", "sans-serif"],
        body: ["Wellfleet", "sans-serif"],
      },
      maxWidth: {
        blog: "80ch",
        extraBlog: "90ch",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

// https://www.realtimecolors.com/?colors=fce6d3-4d3216-f5c17d-0b8e55-1dc2ed&fonts=Pixelify%20Sans-Wellfleet
