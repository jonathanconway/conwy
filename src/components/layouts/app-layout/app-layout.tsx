import { cn } from "@jonathanconway/tailwindjs";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { Scripts } from "../../scripts";

import * as styles from "./app-layout.css";

const inter = Inter({ subsets: ["latin"] });

export function AppLayout({ children }: { readonly children: ReactNode }) {
  return (
    <html lang="en" className={cn(styles.html, inter.className)}>
      <body className={styles.body}>{children}</body>

      <Scripts />
    </html>
  );
}
