import { TypeOfConst } from "@/framework";

export const Orders = {
  Pre: "pre",
  Post: "post",
};

export type Order = TypeOfConst<typeof Orders>;
