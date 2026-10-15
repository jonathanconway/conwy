import { spacingRems } from "../../spacing/spacing.consts";

export const div = {
  selectors: {
    "&:not(:first-child)": {
      paddingTop: spacingRems.s,
    },
  },
};
