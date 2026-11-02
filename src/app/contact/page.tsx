import {
  ContactDetails,
  ContactForm,
  MdxContainer,
  NavItems,
  Page,
  PageLayoutTwoCol,
  Stack,
} from "@/components";
import { contactFragment, contactPgpFragment, site } from "@/content";

import { contactRoute } from "../routes";

export default function Contact() {
  return (
    <Page title={contactRoute.title} selectedNavItem={NavItems.Contact}>
      <PageLayoutTwoCol>
        <Stack gap={1}>
          <Stack gap={0.5}>
            <MdxContainer>{contactFragment.content}</MdxContainer>

            <ContactDetails />
          </Stack>

          <MdxContainer>{contactPgpFragment.content}</MdxContainer>
        </Stack>
        <ContactForm />
      </PageLayoutTwoCol>
    </Page>
  );
}

export const metadata = {
  title: `${site.title} - contact`,
};
