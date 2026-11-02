export interface EngagementTech {
  readonly categoryName: string;
  readonly items: readonly {
    readonly itemName: string;
  }[];
}
