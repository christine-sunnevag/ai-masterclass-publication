export type Conference = {
  title: string;
  subtitle?: string;
  date?: string;
  location?: string;
};

export type Abstract = {
  id: string;
  title: string;
  authors: string[];
  supervisor?: string;
  session?: string;
  keywords: string[];
  pdf?: string;
  order: number;
  html: string;      // rendered Markdown
  text: string;      // plain text, used for search
};
