import { cn } from "@jonathanconway/tailwindjs";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { Scripts } from "../../scripts";

import * as styles from "./layout.css";

const inter = Inter({ subsets: ["latin"] });

export function Layout({ children }: { readonly children: ReactNode }) {
  return (
    <html lang="en" className={cn(styles.html, inter.className)}>
      <body className={cn(styles.body)}>{children}</body>

      <Scripts />
    </html>
  );
}
