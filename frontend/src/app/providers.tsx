"use client";

import { SWRConfig } from "swr";
import { NextUIProvider } from "@nextui-org/react";
import { AppProvider } from "@/providers/AppProvider";

interface RequestOptions {
  method: string;
  headers?: Record<string, string>;
  body?: Record<string, any>; // Using Record to define body as an object
}

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

        fetcher: async (resource: [string, RequestOptions]) => {
          const [url, options] = resource;

          // Default headers
          const headers: HeadersInit = {
            Accept: "application/json",
            ...(options?.headers || {}),
          };

          const formData = new FormData();
          let body: BodyInit | null = null;
          let requestUrl: string | URL | Request = url;

          // Handle GET requests with URL parameters
          if (options?.method === "GET" && options?.body) {
            const params = new URLSearchParams(options.body);
            requestUrl = `${url}?${params.toString()}`;
          }

          if (options?.body) {
            let hasFile = false;

            for (const [key, value] of Object.entries(options.body)) {
              if (value instanceof File) {
                hasFile = true;
              }
              formData.append(key, value);
            }

            // Set the body based on the presence of files
            if (hasFile) {
              body = formData; // Use FormData if there's a file
            } else {
              body = JSON.stringify(options.body); // Otherwise, stringify as JSON
              headers["Content-Type"] = "application/json"; // Set Content-Type for JSON
            }
          }

          const response =
            options?.method === "GET"
              ? await fetch(process.env.NEXT_PUBLIC_API_URL! + requestUrl)
              : await fetch(process.env.NEXT_PUBLIC_API_URL! + requestUrl, {
                  method: options?.method || "POST",
                  body,
                  headers,
                });

          if (!response.ok) {
            const errorMessage = await response.text();
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
