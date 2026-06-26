"use client";

import { useSyncExternalStore } from "react";

const localStorageChangeEvent = "celestium-local-storage-change";

export function avisarMudancaLocalStorage() {
  window.dispatchEvent(new Event(localStorageChangeEvent));
}

export function useLocalStorageItem(chave: string) {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener("storage", callback);
      window.addEventListener(localStorageChangeEvent, callback);

      return () => {
        window.removeEventListener("storage", callback);
        window.removeEventListener(localStorageChangeEvent, callback);
      };
    },
    () => localStorage.getItem(chave) || "",
    () => ""
  );
}
