import { FavIcons } from "./fav-icons";
import { GoogleTagManager } from "./google-tag-manager";
import { PrismJSThemeLink } from "./prismjs-theme";

export function Scripts() {
  return (
    <>
      <FavIcons />
      <PrismJSThemeLink />
      <GoogleTagManager />
    </>
  );
}
