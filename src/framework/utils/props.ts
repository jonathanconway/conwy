import { FunctionComponent } from "react";

export type Props<T extends FunctionComponent> = Parameters<T>[0];
