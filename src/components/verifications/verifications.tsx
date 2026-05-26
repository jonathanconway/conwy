import { CONTACT_DETAILS_MASTODON } from "../contact";

export function Verifications() {
  // Mastodon
  return (
    <a rel="me" href={CONTACT_DETAILS_MASTODON.href} hidden>
      Mastodon
    </a>
  );
}
