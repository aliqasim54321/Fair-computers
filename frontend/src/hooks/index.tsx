"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import useSWR, { SWRResponse, SWRConfiguration } from "swr";

type RequestBody = Record<string, unknown>;

interface AsyncFnProps<T> extends Omit<SWRResponse<T, any>, "mutate"> {
  mutate: (options: RequestBody) => void; // Method to trigger a refetch
}

export function useAsyncFn<T>(
  url: string = "",
  method: "GET" | "POST" = "GET",
  initialBody: RequestBody = {},
  swrConfiguration?: SWRConfiguration,
): AsyncFnProps<T> {
  const isFirstRender = useRef(true);
  const [requestBody, setRequestBody] =
    useState<Record<string, unknown>>(initialBody);

  const options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method,
    body: requestBody,
  };

  const { mutate: refetch, ...props } = useSWR([url, options], null, {
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
    revalidate: false,
    ...swrConfiguration,
  });

  const mutate = useCallback((formBody?: any) => {
    if (isFirstRender.current === true) {
      isFirstRender.current = false;
    }
    setRequestBody((prevBody) => ({
      ...prevBody,
      ...formBody,
      t: new Date().getTime(),
    }));
    if (!isFirstRender) {
      refetch();
    }
  }, []); //eslint-disable-line

  return {
    ...props,
    mutate,
  };
}

export const setSessionStorageItem = (key: string, value: any) => {
  const stringifiedValue = JSON.stringify(value);
  if (typeof window !== "undefined") {
    window.sessionStorage.setItem(key, stringifiedValue);
  }
};

export const removeSessionStorageItem = (key: string) => {
  if (typeof window !== "undefined") {
    window.sessionStorage.removeItem(key);
  }
};

export const getSessionStorageItem = (key: string) => {
  let item = null;
  if (typeof window !== "undefined") {
    item = window.sessionStorage.getItem(key);
  }
  return item ? JSON.parse(item) : null;
};
