export interface PageProps<
  T = {
    readonly slug: string;
  },
> {
  readonly params: Promise<T>;
}
