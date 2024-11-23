import { FavIcons } from "./fav-icons";
import { GoogleTagManager } from "./google-tag-manager";
import { PrismJSThemeLink } from "./prismjs-theme";
import { TypeformEmbed } from "./typeform-embed";

export function Scripts() {
  return (
    <>
      <FavIcons />
      <PrismJSThemeLink />
      <TypeformEmbed />
      <GoogleTagManager />
    </>
  );
}
