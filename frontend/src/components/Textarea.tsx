"use client";

import { Textarea as BaseTextarea, extendVariants } from "@nextui-org/react";

const Textarea = extendVariants(BaseTextarea, {
  variants: {
    variant: {
      rectangle: {
        inputWrapper: "rounded-none border-1 border-powerful-gray",
        textarea: "font-open-sans placeholder:text-powerful-gray",
        label: "text-xs !text-primary font-open-sans",
      },
    },
  },
});

export default Textarea;
