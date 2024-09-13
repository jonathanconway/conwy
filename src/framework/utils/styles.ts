import { cn } from "@jonathanconway/tailwindjs";
import { trim } from "lodash";

export function convertClassStringToClassList(...inputs: string[]) {
  return inputs.join("\n").split("\n").map(trim).filter(Boolean);
}

export function cnOverride(
  classNames: string,
  classNameProp: string,
  classNameOverride?: boolean,
) {
  if (classNameOverride) {
    return classNameProp;
  } else {
    return cn(classNames, classNameProp);
  }
}
