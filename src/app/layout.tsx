import { ReactNode } from "react";

import { AppLayout } from "@/components";

/* @ts-ignore */
import "./globals.css";

export const metadata = {
  title: "conwy - home",
  description: "Homepage of Jonathan Conway",
};

export default function RootLayout(props: { children: ReactNode }) {
  return <AppLayout {...props} />;
}
