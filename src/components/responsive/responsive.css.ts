import { style } from "@vanilla-extract/css";

import { media } from "../styling";

export const [hiddenSm, hiddenMd] = [media.sm, media.md].map((b) =>
  style({
    "@media": {
      [b]: {
        display: "none",
      },
    },
  }),
);

// export const hiddenSm = style({
//   "@media": {
//     [media.sm]: {
//       display: "none",
//     },
//   },
// });

// export const hiddenMd = style({
//   "@media": {
//     [media.md]: {
//       display: "none",
//     },
//   },
// });
