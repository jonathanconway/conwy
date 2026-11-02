export interface NextPageProps<T extends object = NextPagePropsParams> {
  readonly params: Promise<T>;
}

export interface NextPagePropsParams {
  readonly slug: string;
}
