import { LayoutCentered } from "../../../layouts";
import { Text } from "../../../text";

import * as styles from "./search-results.css";

export function SearchResultsEmpty() {
  return (
    <div className={styles.resultsContainer}>
      <LayoutCentered>
        <Text>Please type in some search text ⤴</Text>
      </LayoutCentered>
    </div>
  );
}
