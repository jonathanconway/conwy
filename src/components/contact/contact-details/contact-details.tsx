import { TwoColLayout } from "../../layouts";
import { Link } from "../../link";
import { Stack } from "../../stack";
import { TextSizes } from "../../text";

import { CONTACTS } from "./contacts";
import { Contact } from "./contacts-types";

interface ContactDetailsColumnProps {
  readonly contacts: readonly Contact[];
}

export function ContactDetails() {
  const [contactsCol1, contactsCol2] = [
    CONTACTS.slice(0, Math.ceil(CONTACTS.length / 2)),
    CONTACTS.slice(Math.ceil(CONTACTS.length / 2)),
  ];

  return (
    <TwoColLayout>
      <ContactDetailsColumn key="contacts-col-1" contacts={contactsCol1} />
      <ContactDetailsColumn key="contacts-col-2" contacts={contactsCol2} />
    </TwoColLayout>
  );
}

export function ContactDetailsColumn(props: ContactDetailsColumnProps) {
  return (
    <Stack gap={0.25}>
      {props.contacts.map(({ iconType, id, label, href }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          bracketedItems={id ? [id] : []}
          icon={iconType}
          size={TextSizes.sm}
        >
          {label}
        </Link>
      ))}
    </Stack>
  );
}
