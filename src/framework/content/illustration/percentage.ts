import { isNumber, isString } from "lodash";

import { assert } from "../../utils";

export type Percentage = `${number}%`;

export function percentage(value: number): Percentage {
  return `${value}%`;
}

export const pc = percentage;

export function percentageValue(percentage: Percentage) {
  return parseFloat(percentage);
}

export const pcValue = percentageValue;

export function checkIsPercentage(input: string | number): input is Percentage {
  return isString(input) && input.endsWith("%");
}

export function parseNumberOrApplyPercentage(
  input: string | number,
  total: number,
): number {
  if (checkIsPercentage(input)) {
    return (total / 100) * percentageValue(input);
  }
  assert(isNumber(input));
  return input;
}
