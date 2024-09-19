"use client";

import { Button as BaseButton, extendVariants } from "@nextui-org/react";

const Button = extendVariants(BaseButton, {
  variants: {
    variant: {
      black: "border-black",
      light: "border-black",
    },
    color: {
      light: "bg-white text-dark",
      gray: "bg-gray text-dark",
      black: "bg-dark text-white",
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
  },
});

export default Button;
