"use client";

import { createContext, useContext } from "react";

interface ChecklistItemContextProps {
  readonly checklistItemId: string;
}

export const ChecklistItemContext = createContext<
  ChecklistItemContextProps | undefined
>(undefined);

export const useChecklistItemContext = () => useContext(ChecklistItemContext);
