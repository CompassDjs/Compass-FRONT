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
