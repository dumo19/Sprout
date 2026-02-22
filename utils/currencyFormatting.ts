const LANGUAGE = "en-US"

export const formatCurrencyFull = (v: number): string => {
  return new Intl.NumberFormat(LANGUAGE, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(v);
};

export const formatCurrencyRounded = (v: number): string => {
  return new Intl.NumberFormat(LANGUAGE, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(v);
};

export const formatCurrencyChangeFull = (v: number): string => {
  const formattedChange = formatCurrencyFull(v);
  if (v >= 0) return `+${formattedChange}`;
  return `-${formattedChange}`;
};

export const formatPercentChange = (pctChange: number): string => {
  pctChange *= 100;
  const sign = pctChange >= 0 ? '+' : '-';
  return `${sign}${pctChange.toFixed(2)}%`;
};