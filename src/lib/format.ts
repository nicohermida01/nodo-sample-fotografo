import { site } from '../config/site';

/** "marzo de 2026" style date for project metadata. */
export const formatMonthYear = (date: Date): string =>
  new Intl.DateTimeFormat(site.lang, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date);

/** ISO date (YYYY-MM-DD) for <time datetime>. */
export const isoDate = (date: Date): string => date.toISOString().slice(0, 10);
