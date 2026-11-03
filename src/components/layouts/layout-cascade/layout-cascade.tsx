import { LayoutCascadeProps } from "./layout-cascade-props";
import {
  CHILD_CASCADE_IMAGE_SIZE_PX,
  CHILD_CASCADE_SIZE_PX,
} from "./layout-cascade.consts";
import * as styles from "./layout-cascade.css";
import * as inlineStyles from "./layout-cascade.css-inline";

/**
 * Lays out children in a 'cascade' - a sequence of overlapping equally sized rectangular regions flowing diagonally from top-left to bottom-right.
 */
export function LayoutCascade(props: LayoutCascadeProps) {
  const { children, frontChild, renderChildWrapper = (child) => child } = props;

  return (
    <div className={styles.container}>
      {children.length > 1 && (
        <div className={styles.cascadeContainer} style={CHILD_CASCADE_SIZE_PX}>
          {children.map((child, childIndex) =>
            renderChildWrapper(
              <div
                className={styles.childContainer}
                style={inlineStyles.childContainer({
                  children,
                  childIndex,
                  isSelected: frontChild === child,
                })}
              >
                <div
                  className={styles.childInner}
                  style={CHILD_CASCADE_IMAGE_SIZE_PX}
                >
                  {child}
                </div>
              </div>,
              childIndex,
            ),
          )}
        </div>
      )}
    </div>
  );
}
