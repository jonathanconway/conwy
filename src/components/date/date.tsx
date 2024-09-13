import { DateTime } from "luxon";

export interface DateProps {
  readonly children: string;
  readonly format?: string;
}

const DEFAULT_FORMAT = "d MMMM yyyy";

export function Date(props: DateProps) {
  return (
    <>
      {DateTime.fromFormat(String(props.children), "yyyy-MM-dd").toFormat(
        props.format ?? DEFAULT_FORMAT,
      )}
    </>
  );
}
