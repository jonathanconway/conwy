import { SvgProps } from "../icon/icon-svg-props";

import { IllustrationType } from "./illustration-types";

export type IllustrationProps = SvgProps & {
  readonly illustration: IllustrationType;
  readonly size?: string;
  readonly color?: string;
};
