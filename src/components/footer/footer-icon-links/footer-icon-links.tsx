import {
  CONTACT_DETAILS_BLUESKY,
  CONTACT_DETAILS_EMAIL,
  CONTACT_DETAILS_LINKEDIN,
  CONTACT_DETAILS_TWITTER,
} from "../../contact";
import { Link } from "../../link";
import { Stack, StackDirections } from "../../stack";

const CONTACTS_FOOTER = [
  CONTACT_DETAILS_EMAIL,
  CONTACT_DETAILS_TWITTER,
  CONTACT_DETAILS_BLUESKY,
  CONTACT_DETAILS_LINKEDIN,
];

export function FooterIconLinks() {
  return (
    <Stack direction={StackDirections.Row} gap={0.5}>
      {CONTACTS_FOOTER.map((socialLink) => (
        <Link
          key={socialLink.id}
          href={socialLink.href}
          target="_blank"
          showOpenInNew={false}
          icon={socialLink.iconType}
          tooltip={{
            contents: socialLink.label,
          }}
        />
      ))}
    </Stack>
  );
}
