import { Breadcrumb, Fragment, PageLayout, Testimonials } from "@/components";
import { site } from "@/content";
import { Testimonials as Testimonials_ } from "@/content/fragments";
import * as works from "@/content/works";
import { getTestimonials } from "@/framework/client";

export default function Page() {
  const testimonials = getTestimonials(works);

  return (
    <PageLayout
      selectedNavPath="/work"
      main={
        <>
          <Breadcrumb
            segments={[
              {
                title: "Work",
                url: "/work",
              },
              {
                title: "Testimonials",
              },
            ]}
          />

          <Fragment>
            <Testimonials_ />
          </Fragment>

          <Testimonials testimonials={testimonials} />
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - work - testimonials`,
};
