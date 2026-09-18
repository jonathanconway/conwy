import { CenteredLayout } from "../../../layouts";
import { Text } from "../../../text";

import * as styles from "./search-results.css";

export function SearchResultsLoading() {
  return (
    <div className={styles.resultsContainer}>
      <CenteredLayout>
        <Text>Loading ...</Text>
      </CenteredLayout>
    </div>
  );
}
