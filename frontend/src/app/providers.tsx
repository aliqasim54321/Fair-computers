"use client";

import { SWRConfig } from "swr";
import { NextUIProvider } from "@nextui-org/react";
import { AppProvider } from "@/providers/AppProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false,
        refreshInterval: 0,
        onError: (error) => alert(error.message),

        fetcher: async (
          resource: Parameters<typeof fetch>,
          // init: RequestInit | undefined,
        ) => {
          const [url, options] = resource;

          if (options?.body) {
            // delete options.body.t;
            options.body = JSON.stringify(options.body);
          }

          const response =
            options?.method === "GET"
              ? await fetch(process.env.NEXT_PUBLIC_API_URL! + url)
              : await fetch(process.env.NEXT_PUBLIC_API_URL! + url, options);

          if (!response.ok) {
            const errorMessage = await response.text(); // 或用 response.json() 根據你的需求
            throw new Error(`Error: ${response.status} - ${errorMessage}`);
          }

          return await response.json();
        },
      }}
    >
      <NextUIProvider>
        <AppProvider>{children}</AppProvider>
      </NextUIProvider>
    </SWRConfig>
  );
}
