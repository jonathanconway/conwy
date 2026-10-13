import { createWithHOC } from "@/framework/client";

import { Copyable } from "./copyable";

export const withCopyable = createWithHOC(Copyable, "copyable");
