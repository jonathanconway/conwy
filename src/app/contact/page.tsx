import {
  ContactDetails,
  Fragment,
  PageLayout,
  TwoColLayout,
} from "@/components";
import { site } from "@/content";
import { Contact as Contact_ } from "@/content/fragments/contact";

export default function Contact() {
  return (
    <PageLayout
      selectedNavPath="/contact"
      main={
        <TwoColLayout>
          <div>
            <Fragment>
              <Contact_ />
            </Fragment>

            <ContactDetails />
          </div>
          <div data-tf-live="01J5CTN8SVZAQS11N9ZXMN3RRQ"></div>
        </TwoColLayout>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - contact`,
};
