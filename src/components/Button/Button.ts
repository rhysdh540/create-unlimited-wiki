import { cva } from "class-variance-authority";

const button = cva(["rounded flex items-center"], {
  variants: {
    intent: {
      primary: ["bg-cu-primary text-cu-background border-transparent outline-none hover:bg-cu-primary/75"],
      secondary: ["bg-cu-secondary text-cu-text border-transparent outline-none hover:bg-cu-secondary/75"],
      accent: ["bg-cu-accent text-cu-text border-transparent outline-none hover:bg-cu-accent/75"],
    },
    size: {
      sm: ["px-2 py-1 text-sm"],
      base: ["px-4 py-2 text-base"],
      lg: ["px-8 py-4 text-2xl"],
    },
    width: {
      hybrid: ["w-full md:w-auto"],
      auto: ["w-auto"],
    },
  },

  defaultVariants: {
    intent: "primary",
    width: "hybrid",
    size: "base",
  },
});

export default button;
