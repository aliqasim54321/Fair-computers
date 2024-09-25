"use client";

import { Input as BaseInput, extendVariants } from "@nextui-org/react";

const Input = extendVariants(BaseInput, {
  variants: {
    variant: {
      default: {
        input: "font-open-sans placeholder:text-powerful-gray",
        label: "text-xs !text-primary font-open-sans font-open-sans",
      },
      rectangle: {
        inputWrapper: "rounded-none border-1 border-powerful-gray",
        input: "font-open-sans placeholder:text-powerful-gray",
        label: "text-xs !text-primary font-open-sans",
      },
    },
  },
});

export default Input;
