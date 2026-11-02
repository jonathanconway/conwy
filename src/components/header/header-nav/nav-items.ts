import { TypeOfConst } from "@/framework";

export const NavItems = {
  Articles: "articles",
  Projects: "projects",
  Work: "work",
  Contact: "contact",
} as const;

export type NavItem = TypeOfConst<typeof NavItems>;
