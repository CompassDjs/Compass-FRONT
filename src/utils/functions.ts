import prettyMilliseconds from "pretty-ms";

export function Wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function FormatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function AgeDate(date: Date) {
  return prettyMilliseconds(Date.now() - date.getTime(), {
    compact: true,
    verbose: true,
  });
}

export function MsToMinutes(ms: number) {
  return Math.floor(ms / 60000);
}
