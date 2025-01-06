"use client";

import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { cn } from "@/framework/client";

import { useFocusOutline } from "../../focus-outline/use-focus-outline.hook";
import { Scripts } from "../../scripts";

import * as styles from "./app-layout.css";

const inter = Inter({ subsets: ["latin"] });

export function AppLayout({ children }: { readonly children: ReactNode }) {
  useFocusOutline();

  return (
    <html lang="en" className={cn(styles.html, inter.className)}>
      <body className={styles.body}>{children}</body>
      <Scripts />
    </html>
  );
}
