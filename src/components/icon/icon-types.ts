import { TypeOfConst } from "@/framework/client";

export const IconTypes = {
  ArrowChevronLeft: "arrow-chevron-left",
  ArrowChevronRight: "arrow-chevron-right",
  ArrowChevronUp: "arrow-chevron-up",
  ArrowChevronDown: "arrow-chevron-down",
  ArrowTriangleLeft: "arrow-triangle-left",
  ArrowTriangleRight: "arrow-triangle-right",
  Close: "close",
  CheckBox: "check-box",
  Dev: "dev",
  Email: "email",
  Github: "github",
  Hamburger: "hamburger",
  LinkedIn: "linkedin",
  Like: "like",
  Mastodon: "mastodon",
  Medium: "medium",
  OpenInNew: "open-in-new",
  ProductHunt: "product-hunt",
  Quote: "quote",
  Substack: "substack",
  Telegram: "telegram",
  Twitter: "twitter",
  Website: "website",
  X: "x",
  YouTube: "youtube",
} as const;

export type IconType = TypeOfConst<typeof IconTypes>;
