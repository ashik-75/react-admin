import { formatDistanceToNow } from "date-fns";

export function fToNow(date:Date) {
    return date ? formatDistanceToNow(date,{
        addSuffix: true,
    }) : ""
}