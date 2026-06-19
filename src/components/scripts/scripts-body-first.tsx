import { GoogleAnalytics } from "./google-analytics";
import { GoogleTagManagerBodyFirst } from "./google-tag-manager";

export function ScriptsBodyFirst() {
  return (
    <>
      <GoogleAnalytics />
      <GoogleTagManagerBodyFirst />
    </>
  );
}
