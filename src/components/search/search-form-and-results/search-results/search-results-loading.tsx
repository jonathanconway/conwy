import { LayoutCentered } from "../../../layouts";
import { Text } from "../../../text";

import * as styles from "./search-results.css";

export function SearchResultsLoading() {
  return (
    <div className={styles.resultsContainer}>
      <LayoutCentered>
        <Text>Loading ...</Text>
      </LayoutCentered>
    </div>
  );
}
