import Image from "next/image";
import Link from "next/link";

import { ArticleMeta } from "@/framework/client";

import { Date } from "../../../date";
import { SocialLinksIcons } from "../../../social-links";

import * as styles from "./articles-list-item.styles";

export type ArticlesListItemProps = ArticleMeta;

export function ArticlesListItem({
  date,
  slug,
  title,
  blurb,
  shortBlurb,
  socialLinks,
  type,
  mainImage,
}: ArticlesListItemProps) {
  return (
    <div className={styles.container}>
      <Link className={styles.mainColumn} href={`articles/${slug}`}>
        <div className={styles.date}>
          <Date>{date}</Date>
        </div>

        <div className={styles.title}>{title}</div>

        <p className={styles.blurb}>{shortBlurb ?? blurb}</p>
      </Link>
      <div className={styles.asideColumn}>
        <Image
          className={styles.image}
          src={`/images/articles/${slug}/${mainImage ?? "main.jpg"}`}
          alt="Article main image"
          priority
          unoptimized={true}
          width={125}
          height={93.75}
        />

        {socialLinks && <SocialLinksIcons socialLinks={socialLinks} />}

        <span className={styles.type}>{type}</span>
      </div>
    </div>
  );
}
