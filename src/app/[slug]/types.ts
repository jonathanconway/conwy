export interface PageProps {
  readonly params: Promise<{
    readonly slug: string;
  }>;
}
