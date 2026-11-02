import { BooksPage } from "@/components";
import { site } from "@/content";

import { readingsRoute } from "../routes";

export default function ReadingsPage() {
  return <BooksPage />;
}

export const metadata = {
  title: `${site.title} - ${readingsRoute.title}`,
};
