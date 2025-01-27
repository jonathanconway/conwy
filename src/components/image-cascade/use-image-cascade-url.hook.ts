import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { clearSearchParams } from "@/framework/client";

interface UseImageCascadeUrlParams<T> {
  readonly items: readonly T[];
  readonly defaultSelectedItem?: T;
  readonly isUrlAddressable?: boolean;
}

export function useImageCascadeUrl<T>(params: UseImageCascadeUrlParams<T>) {
  const searchParams = useSearchParams();

  const defaultOpenedItem = useMemo(() => {
    if (!params.isUrlAddressable) {
      return;
    }

    if (searchParams.get("image")) {
      return params.items[
        parseInt(searchParams.get("image")?.toString() ?? "0")
      ];
    }
  }, []);

  function handleClose() {
    if (!params.isUrlAddressable) {
      return;
    }

    clearSearchParams(["image"]);
  }

  return {
    defaultOpenedItem,
    handleClose,
  };
}
