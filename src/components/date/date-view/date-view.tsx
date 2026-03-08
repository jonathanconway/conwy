import { DateTime } from "luxon";

import { DateFormat, DateFormats } from "./date-view-format";

export interface DateViewProps {
  readonly children: string;
  readonly formatString?: string;
  readonly format?: DateFormat;
}

const DATE_FORMAT_STRING_FULL = "d MMMM yyyy";
const DATE_FORMAT_STRING_SHORT = "MMMM yyyy";

const DATE_FORMAT_STRINGS = {
  [DateFormats.Full]: DATE_FORMAT_STRING_FULL,
  [DateFormats.Short]: DATE_FORMAT_STRING_SHORT,
};

function getFormatString(props: DateViewProps) {
  if (props.formatString) {
    return props.formatString;
  }

  if (props.format) {
    return DATE_FORMAT_STRINGS[props.format];
  }

  return DATE_FORMAT_STRING_FULL;
}

export function DateView(props: DateViewProps) {
  const formatString = getFormatString(props);

  return (
    <>
      {DateTime.fromFormat(String(props.children), "yyyy-MM-dd").toFormat(
        formatString,
      )}
    </>
  );
}
