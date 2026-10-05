/**
 * Credit: https://blog.logrocket.com/handling-date-strings-typescript/
 */
import { DateTime } from "luxon";

type NumberOneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type NumberZeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/**
 * Years
 */
type DatePartYYYY =
  | `19${NumberZeroToNine}${NumberZeroToNine}`
  | `20${NumberZeroToNine}${NumberZeroToNine}`;

/**
 * Months
 */
type DatePartMM = `0${NumberOneToNine}` | `1${0 | 1 | 2}`;

/**
 * Days
 */
type DatePartDD =
  | `${0}${NumberOneToNine}`
  | `${1 | 2}${NumberZeroToNine}`
  | `3${0 | 1}`;

/**
 * YYYYMMDD
 */
export type DateString = `${DatePartYYYY}-${DatePartMM}-${DatePartDD}`;

export const DATE_STRING_FORMAT = "yyyy-MM-dd";

export function checkIsDateString(input: string): input is DateString {
  return DateTime.fromFormat(input, DATE_STRING_FORMAT).isValid;
}
