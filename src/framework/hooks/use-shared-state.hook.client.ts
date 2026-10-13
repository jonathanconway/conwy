"use client";

import { useState } from "react";

export function useSharedState() {
  const [localValue, setLocalValue] = useState();
}
