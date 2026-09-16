import { Content } from "../content";
import { ContentTypes } from "../content-type";

import { ToolMeta } from "./tool-meta";

/**
 * A `Tool` is something I use frequently – either software or a physical device or belonging.
 */
export interface Tool extends Content<typeof ContentTypes.Tool, ToolMeta> {}
