import { StoryBoxProps } from "./story-box-props";
import * as styles from "./story-box.css";

export function StoryBox(props: StoryBoxProps) {
  const { children } = props;
  return <div className={styles.storyBox}>{children}</div>;
}
