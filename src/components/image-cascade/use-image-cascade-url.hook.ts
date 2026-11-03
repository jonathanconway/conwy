import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { Image } from "@/framework";
import { clearSearchParams } from "@/framework/client";

interface UseImageCascadeUrlParams {
  readonly images: readonly Image[];
  readonly defaultSelectedItem?: Image;
  readonly isUrlAddressable?: boolean;
}

export function useImageCascadeUrl(params: UseImageCascadeUrlParams) {
  const searchParams = useSearchParams();

  const defaultOpenedItem = useMemo(() => {
    if (!params.isUrlAddressable) {
      return;
    }

    if (searchParams.get("image")) {
      return params.images[
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
