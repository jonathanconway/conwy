import {
  ContactDetails,
  ContactForm,
  MdxContainer,
  NavItems,
  Page,
  Stack,
  TwoColLayout,
} from "@/components";
import { contactFragment, contactPgpFragment, site } from "@/content";

import { contactRoute } from "../routes";

export default function Contact() {
  return (
    <Page title={contactRoute.title} selectedNavItem={NavItems.Contact}>
      <TwoColLayout>
        <Stack gap={1}>
          <Stack gap={0.5}>
            <MdxContainer>{contactFragment.content}</MdxContainer>

            <ContactDetails />
          </Stack>

          <MdxContainer>{contactPgpFragment.content}</MdxContainer>
        </Stack>
        <ContactForm />
      </TwoColLayout>
    </Page>
  );
}

export const metadata = {
  title: `${site.title} - contact`,
};
