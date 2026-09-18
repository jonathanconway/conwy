import { CenteredLayout } from "../../../layouts";
import { Text } from "../../../text";

import * as styles from "./search-results.css";

export function SearchResultsNoResults() {
  return (
    <div className={styles.resultsContainer}>
      <CenteredLayout>
        <Text>No results found ✗</Text>
      </CenteredLayout>
    </div>
  );
}
