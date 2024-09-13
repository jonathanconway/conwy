import packageInfoObject from "../package.json";

export interface PackageInfo {
  readonly name: string;
  readonly version: string;
  readonly description: string;
  readonly homepage: string;
  readonly author: {
    readonly name: string;
    readonly email: string;
    readonly url: string;
  };
}

const packageInfo = packageInfoObject as PackageInfo;

export { packageInfo };
