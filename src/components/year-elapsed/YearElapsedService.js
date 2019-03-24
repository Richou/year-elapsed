import getYear from 'date-fns/get_year';
import differenceInMilliseconds from 'date-fns/difference_in_milliseconds';

export const getSecondsElapsedFrom = (fromDate) => {
  const currentYear = getCurrentYear();
  const beginDate = new Date(currentYear, 0, 1, 0, 0, 0);
  return differenceInMilliseconds(fromDate, beginDate);
};

export const getSecondsForYear = () => {
  const currentYear = getCurrentYear();
  return getSecondsElapsedFrom(new Date(currentYear, 11, 31, 0, 0))
};

export const getYearElaspedPercent = () => {
  const current = getSecondsElapsedFrom(new Date());
  const total = getSecondsForYear();
  return (current / total) * 100;
};

export const getCurrentYear = () => {
  return getYear(new Date());
};
