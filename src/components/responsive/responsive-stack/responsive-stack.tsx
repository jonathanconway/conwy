"use client";

import { isObject } from "lodash";
import { ReactNode } from "react";

import { Stack, StackProps } from "../../stack";
import { Breakpoint, Breakpoints } from "../../styling";
import { useGetBreakpoint } from "../use-get-breakpoint.hook";

type BreakpointMap<T> = Partial<Record<Breakpoint, T>>;

type ResponsiveStackProps = {
  [key in keyof Omit<StackProps, "children">]:
    | BreakpointMap<StackProps[key]>
    | StackProps[key];
} & {
  readonly children?: ReactNode;
};

const breakpointsValues = Object.values(Breakpoints);

function getIsBreakpoint<T extends string>(
  input: T | Breakpoint,
): input is Breakpoint {
  return breakpointsValues.includes(input as Breakpoint);
}

function getIsBreakpointsMap<T>(
  input: Partial<Record<Breakpoint, T>> | T,
): input is BreakpointMap<T> {
  return isObject(input) && Object.keys(input).every(getIsBreakpoint);
}

function getFallbackPropValue(
  propValue: BreakpointMap<unknown>,
  breakpoint: Breakpoint,
): unknown | undefined {
  switch (breakpoint) {
    case Breakpoints.Large:
      return (
        propValue[Breakpoints.Medium] ??
        getFallbackPropValue(propValue, Breakpoints.Medium)
      );
    case Breakpoints.Medium:
      return (
        propValue[Breakpoints.Small] ??
        getFallbackPropValue(propValue, Breakpoints.Small)
      );
    case Breakpoints.Small:
    default:
      return undefined;
  }
}

export function ResponsiveStack(props: ResponsiveStackProps) {
  const breakpoint = useGetBreakpoint();

  const stackProps = Object.fromEntries(
    Object.entries(props).map(([propKey, propValue]) => [
      propKey,
      getIsBreakpointsMap(propValue)
        ? (propValue[breakpoint] ?? getFallbackPropValue(propValue, breakpoint))
        : propValue,
    ]),
  ) as unknown as StackProps;

  return <Stack {...stackProps} />;
}
