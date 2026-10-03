export interface ProjectGenParams {
  readonly title: string;
  readonly slug: string;
  readonly blurb: string;

  readonly subType: string;

  readonly mainImageUrl: string;
  readonly imageUrls: readonly string[];
  readonly tags: readonly string[];
  readonly socialLinkUrls: readonly string[];
  readonly techsCategoryNames: readonly string[];
  readonly platforms: readonly string[];
}
