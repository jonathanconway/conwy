import { createWithHOC } from "@/framework";

import { Copyable } from "./copyable";

export const withCopyable = createWithHOC(Copyable, "copyable");
