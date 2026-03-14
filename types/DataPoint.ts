export interface DataPoint {
  date: string;
  value: number;
}

export interface PortfolioChartProps {
  data?: DataPoint[];
  range: Range;
}

export type Range = '1D' | '1M' | '3M' | '6M' | '1Y' | 'YTD' | 'ALL';

export interface PerformanceRangeProps {
  range: Range;
  setRange: (value: Range) => void;
}
