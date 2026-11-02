import { NextPageProps } from "@/framework";

export interface ChecklistItemPagePropsParams {
  readonly slug: string;
  readonly itemslug: string;
}

export type ChecklistItemPageProps =
  NextPageProps<ChecklistItemPagePropsParams>;
