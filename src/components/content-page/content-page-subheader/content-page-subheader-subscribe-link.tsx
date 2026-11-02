import { CONTENT_TYPE_LABELS_PLURAL } from "@/framework";
import { packageInfo } from "@/package-info";

import { Link } from "../../link";
import { TextSizes } from "../../text";

import { ContentPageSubHeaderPartProps } from "./content-page-subheader-part-props";

export function ContentPageSubHeaderSubscribeLink(
  props: ContentPageSubHeaderPartProps,
) {
  const subject = encodeURIComponent("Subscribe to Updates");
  const body = encodeURIComponent(
    `Please subscribe me to updates on this article: https://conwy.co/${CONTENT_TYPE_LABELS_PLURAL[props.content.type]}/${props.content.meta.slug}`,
  );
  const email = packageInfo.author.email;
  const href = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <Link
      href={href}
      size={TextSizes.XS}
      tooltip={{ contents: "Subscribe to updates on this article" }}
      showOpenInNew={false}
    >
      Subscribe
    </Link>
  );
}
