import { ReactNode } from "react";

import { PageLayout } from "@/components";

interface LayoutProps {
  readonly children: ReactNode;
}

export default async function Layout(props: LayoutProps) {
  return <PageLayout main={props.children} />;
}
