import * as styles from "./link-bracketed-item.styles";

interface LinkBracketedItemsProps {
  readonly items?: readonly string[];
}

export function LinkBracketedItems(props: LinkBracketedItemsProps) {
  if (!props.items) {
    return null;
  }

  return (
    <>
      &nbsp;
      <span className={styles.linkBracketedItem}>
        {props.items?.map((item) => `(${item})`).join(" ")}
      </span>
    </>
  );
}
