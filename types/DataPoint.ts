export interface DataPoint {
  date: string;
  value: number;
}

export interface PortfolioChartProps {
  data?: DataPoint[]
}

export type Range = '3M' | '6M' | '1Y' | 'ALL';
