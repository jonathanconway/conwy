import { cn } from "@jonathanconway/tailwindjs";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { Head } from "../../head";

import * as styles from "./layout.styles";

const inter = Inter({ subsets: ["latin"] });

export function Layout({ children }: { readonly children: ReactNode }) {
  return (
    <html lang="en" className={cn(styles.html, inter.className)}>
      <Head />

      <body className={cn(styles.body)}>{children}</body>
    </html>
  );
}
