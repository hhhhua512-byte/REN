
export interface KeywordItem {
  word: string;
  color: string;
}

export interface MonthStatus {
  month: string;
  status: 'busy' | 'leisure';
}

export interface YearReview {
  year: string;
  title: string;
  keywords: KeywordItem[];
  description: string;
  quote: string;
  themeColor: string;
  secondaryColor: string;
}
