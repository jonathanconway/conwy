export interface StudyGenParams {
  readonly slug: string;
  readonly title: string;
  readonly mainUrl?: string;
  readonly institution: string;
  readonly type: string;
  readonly date: string;
  readonly status: string;
  readonly credential?: string;
  readonly mark?: string;
  readonly description?: string;
  readonly category: string;
  readonly linkUrls: readonly string[];
}
