"use client";

import { Button as BaseButton, extendVariants } from "@nextui-org/react";

const Button = extendVariants(BaseButton, {
  variants: {
    color: {
      light: "bg-white text-dark",
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
  },
});

export default Button;
