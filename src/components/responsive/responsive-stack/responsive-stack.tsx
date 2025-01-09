"use client";

import { useGetBreakpoint } from "..";

import { isObject } from "lodash";
import { ReactNode } from "react";

import { Stack, StackProps } from "../../stack";
import { Breakpoint, Breakpoints } from "../../styling";

type BreakpointMap<T> = Partial<Record<Breakpoint, T>>;

type ResponsiveStackProps = {
  [key in keyof Omit<StackProps, "children">]:
    | BreakpointMap<StackProps[key]>
    | StackProps[key];
} & {
  readonly children?: ReactNode;
};

function getIsBreakpoint<T>(input: T | Breakpoint): input is Breakpoint {
  return String(input) in Breakpoints;
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
    case Breakpoints.lg:
      return (
        propValue[Breakpoints.md] ??
        getFallbackPropValue(propValue, Breakpoints.md)
      );
    case Breakpoints.md:
      return (
        propValue[Breakpoints.sm] ??
        getFallbackPropValue(propValue, Breakpoints.sm)
      );
    case Breakpoints.sm:
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
        ? propValue[breakpoint] ?? getFallbackPropValue(propValue, breakpoint)
        : propValue,
    ]),
  ) as unknown as StackProps;

  return <Stack {...stackProps} />;
}
