const LANGUAGE = 'en-US';

export const formatDate = (d: string): string => {
  const date = new Date(d + 'T00:00:00');
  const month = date.toLocaleDateString(LANGUAGE, { month: 'short' });
  const year = date.toLocaleDateString(LANGUAGE, { year: '2-digit' });
  return `${month} '${year}`;
};

export const formatDateFullShort = (d: string): string => {
  const date = new Date(d + 'T00:00:00');
  return date.toLocaleDateString(LANGUAGE, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

}

export const formatDateFullLong = (d: string): string => {
  const date = new Date(d + 'T00:00:00');
  return date.toLocaleDateString(LANGUAGE, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};