import { CenteredLayout } from "../../../layouts";
import { Text } from "../../../text";

export function SearchResultsEmpty() {
  return (
    <CenteredLayout>
      <Text>Please type in some search text ⤴</Text>
    </CenteredLayout>
  );
}
