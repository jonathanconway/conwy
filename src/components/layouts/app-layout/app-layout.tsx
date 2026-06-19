import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { cn } from "@/framework/client";

import { ScriptsBodyFirst, ScriptsBodyLast, ScriptsHead } from "../../scripts";
import { Verifications } from "../../verifications";

import { AppLayoutClient } from "./app-layout-client";
import * as styles from "./app-layout.css";

const inter = Inter({ subsets: ["latin"] });

interface AppLayoutProps {
  readonly children: ReactNode;
}

export function AppLayout(props: AppLayoutProps) {
  const { children } = props;

  return (
    <html lang="en" className={cn(styles.html, inter.className)}>
      <head>
        <Verifications />

        <ScriptsHead />
      </head>
      <body className={styles.body}>
        <ScriptsBodyFirst />
        {children}
        <ScriptsBodyLast />
      </body>
      <AppLayoutClient />
    </html>
  );
}
