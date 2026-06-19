"use client";

import { Inter } from "next/font/google";
import Head from "next/head";
import { ReactNode } from "react";

import { cn } from "@/framework/client";

import { useFocusOutline } from "../../focus-outline/use-focus-outline.hook";
import { ScriptsBodyFirst, ScriptsBodyLast, ScriptsHead } from "../../scripts";
import { Verifications } from "../../verifications";

import * as styles from "./app-layout.css";

const inter = Inter({ subsets: ["latin"] });

interface AppLayoutProps {
  readonly children: ReactNode;
}

export function AppLayout(props: AppLayoutProps) {
  const { children } = props;

  useFocusOutline();

  return (
    <html lang="en" className={cn(styles.html, inter.className)}>
      <Head>
        <Verifications />

        <ScriptsHead />
      </Head>
      <body className={styles.body}>
        <ScriptsBodyFirst />

        {children}

        <ScriptsBodyLast />
      </body>
    </html>
  );
}
