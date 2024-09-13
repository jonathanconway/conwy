import { FavIcons } from "./fav-icons";
import { PrismJSThemeLink } from "./prismjs-theme";

export function Head() {
  return (
    <head>
      <FavIcons />

      <PrismJSThemeLink />

      <script src="//embed.typeform.com/next/embed.js" defer></script>
    </head>
  );
}
