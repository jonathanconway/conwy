import {
  ContactDetails,
  ContactForm,
  MdxContainer,
  PageLayout,
  TwoColLayout,
} from "@/components";
import { contactFragment, site } from "@/content";

export default function Contact() {
  return (
    <PageLayout
      selectedNavPath="/contact"
      main={
        <TwoColLayout>
          <div>
            <MdxContainer>{contactFragment.content}</MdxContainer>

            <ContactDetails />
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
