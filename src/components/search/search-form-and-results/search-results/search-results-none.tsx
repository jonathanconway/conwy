import { LayoutCentered } from "../../../layouts";
import { Text } from "../../../text";

import * as styles from "./search-results.css";

export function SearchResultsNoResults() {
  return (
    <div className={styles.resultsContainer}>
      <LayoutCentered>
        <Text>No results found ✗</Text>
      </LayoutCentered>
    </div>
  );
}
