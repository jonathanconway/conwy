import { createWithHOC } from "@/framework/client-utils";

import { Copyable } from "./copyable";

export const withCopyable = createWithHOC(Copyable, "copyable");
