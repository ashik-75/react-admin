import { format, formatDistanceToNow } from "date-fns";

export function fToNow(date: Date) {
  return date
    ? formatDistanceToNow(date, {
        addSuffix: true,
      })
    : "";
}

export function fDate(date: Date) {
  return date ? format(date, "dd MMM yyyy") : null;
}
