import { upperCase } from "lodash";

import { isNotNil } from "@/framework/client";

interface BookAuthorsProps {
  readonly authors: readonly string[];
}

function formatAuthorName(authorName: string) {
  const authorNameParts = authorName.trim().split(" ").filter(isNotNil);
  const [authorFirstName, ...authorRestNames] = authorNameParts;

  const authorLastNamesUpper = authorRestNames.map(upperCase).join(" ");

  return `${authorFirstName} ${authorLastNamesUpper}`;
}

export function BookAuthors(props: BookAuthorsProps) {
  return <>{props.authors.map(formatAuthorName).join(", ")}</>;
}
