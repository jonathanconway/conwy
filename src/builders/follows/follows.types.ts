import { Link } from "@/framework";

export type FollowsBySection = Record<string, Link[]>;

export type FollowsEntries = readonly (readonly [string, readonly Link[]])[];
