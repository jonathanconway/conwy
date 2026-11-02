import { WorksPage } from "@/components";
import { site } from "@/content";
import * as worksMap from "@/content/works";

export default function WorksPage_() {
  const works = Object.values(worksMap);

  return <WorksPage works={works} />;
}

export const metadata = {
  title: `${site.title} - work`,
};
