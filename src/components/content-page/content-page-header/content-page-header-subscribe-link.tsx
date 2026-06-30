import { TextSizes } from "@/components/text/text-size/text-size";
import { CONTENT_TYPES_PLURALIZED } from "@/framework/client";
import { packageInfo } from "@/package-info";

import { Link } from "../../link";

import { ContentPageHeaderPart } from "./content-page-header-part";

export const ContentPageHeaderSubscribeLink: ContentPageHeaderPart = (
  props,
) => {
  const subject = encodeURIComponent("Subscribe to Updates");
  const body = encodeURIComponent(
    `Please subscribe me to updates on this article: https://conwy.co/${CONTENT_TYPES_PLURALIZED[props.content.type]}/${props.content.meta.slug}`,
  );
  const email = packageInfo.author.email;
  const href = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <Link
      href={href}
      size={TextSizes.xs}
      tooltip={{ contents: "Subscribe to updates on this article" }}
    >
      Subscribe
    </Link>
  );
};
