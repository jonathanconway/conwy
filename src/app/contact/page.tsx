import {
  ContactDetails,
  ContactForm,
  MdxContainer,
  PageLayout,
  Stack,
  TwoColLayout,
} from "@/components";
import { contactFragment, contactPgpFragment, site } from "@/content";

export default function Contact() {
  return (
    <PageLayout
      selectedNavPath="/contact"
      main={
        <TwoColLayout>
          <Stack gap={0.5}>
            <MdxContainer>{contactFragment.content}</MdxContainer>

            <ContactDetails />

            <MdxContainer>{contactPgpFragment.content}</MdxContainer>
          </Stack>
          <ContactForm />
        </TwoColLayout>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - contact`,
};
