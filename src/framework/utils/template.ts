interface ParseTemplateParams {
  readonly input: string;
  readonly tokenDelimiters: {
    readonly open: string;
    readonly close: string;
  };
}

/**
 * Parses a templated expression for fields.
 * Token opening and closing delimiters can be customised.
 */
export function parseTemplate({
  input,
  tokenDelimiters: { open, close } = {
    open: "{",
    close: "}",
  },
}: ParseTemplateParams) {
  const fieldPattern = new RegExp([open, "(.*?)", close].join(""), "g");

  const inputMatches = Array.from(input.matchAll(fieldPattern));

  return inputMatches;
}

interface Fences {
  readonly begin: string;
  readonly end: string;
}

interface ParseFencesParams {
  readonly input: string;
  readonly fences: Fences;
}

export function parseFences({
  input,
  fences: { begin, end },
}: ParseFencesParams) {
  return input.split(begin)[1].split(end)[0];
}

interface UpdateInsideFencesParams {
  readonly input: string;
  readonly update: string;
  readonly fences: Fences;
}

export function updateInsideFences({
  input,
  update,
  fences: { begin, end },
}: UpdateInsideFencesParams) {
  const [beforeBegin, afterBegin] = input.split(begin);
  const [, afterEnd] = afterBegin.split(end);
  return [beforeBegin, begin, update, end, afterEnd].join("");
}
