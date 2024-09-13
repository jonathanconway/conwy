import { ReactNode } from "react";

import { Layout } from "@/components";

import "./globals.css";

export const metadata = {
  title: "conwy - Homepage of Jonathan Conway",
  description: "Homepage of Jonathan Conway",
};

export default function RootLayout(props: { children: ReactNode }) {
  return <Layout {...props} />;
}
