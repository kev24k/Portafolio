type Lang = "es" | "en";

const PRESENT: Record<Lang, string> = { es: "Presente", en: "Present" };

export function formatYear(date: string | null, lang: Lang = "es"): string {
  if (!date || date === "Presente") return PRESENT[lang];
  return /^\d{4}(?:-|$)/.test(date) ? date.slice(0, 4) : "Fecha por confirmar";
}

export function formatMonthYear(date: string | null, lang: Lang = "es"): string {
  if (!date || date === "Presente") return PRESENT[lang];

  const match = /^(\d{4})-(\d{2})(?:-\d{2})?$/.exec(date);
  if (!match) return formatYear(date, lang);

  const [, year, month] = match;
  const monthNumber = Number(month);
  if (monthNumber < 1 || monthNumber > 12) return "Fecha por confirmar";

  return new Intl.DateTimeFormat(lang === "en" ? "en-US" : "es-ES", {
    year: "numeric",
    month: "short",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(Number(year), monthNumber - 1, 1)));
}
