import packageInfoObject from "../package.json";

import { Url } from "./framework";

export interface PackageInfo {
  readonly name: string;
  readonly version: string;
  readonly description: string;
  readonly homepage: string;
  readonly author: {
    readonly name: string;
    readonly email: string;
    readonly url: Url;
  };
  readonly repository: {
    readonly url: Url;
  };
}

const packageInfo = packageInfoObject as PackageInfo;

export { packageInfo };
