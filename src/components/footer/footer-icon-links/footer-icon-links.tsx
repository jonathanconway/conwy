import { CONTACTS } from "../../contact";
import { Link } from "../../link";
import { Stack, StackDirections } from "../../stack";

export function FooterIconLinks() {
  return (
    <Stack direction={StackDirections.Row} gap={0.5}>
      {CONTACTS.slice(0, 6).map((socialLink) => (
        <>
          {/* <span>{socialLink.id}</span> */}
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
        </>
      ))}
    </Stack>
  );
}
