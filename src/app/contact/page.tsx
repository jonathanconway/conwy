import {
  ContactDetails,
  ContactForm,
  MdxContainer,
  PageLayout,
  TwoColLayout,
} from "@/components";
import { contactFragment, contactPgpFragment, site } from "@/content";

export default function Contact() {
  return (
    <PageLayout
      selectedNavPath="/contact"
      main={
        <TwoColLayout>
          <div>
            <MdxContainer>{contactFragment.content}</MdxContainer>

            <ContactDetails />

            <MdxContainer>{contactPgpFragment.content}</MdxContainer>
          </div>
          <ContactForm />
        </TwoColLayout>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - contact`,
};
