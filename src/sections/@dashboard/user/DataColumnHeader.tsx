import { Column } from "@tanstack/react-table";
import { ArrowUpDown, EyeOff, SortAsc, SortDesc } from "lucide-react";
import { Button } from "../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { cn } from "../../../utils/cn";

interface DataColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  column: Column<TData, TValue>;
  className: string;
}

function DataColumnHeader<TData, TValue>({
  title,
  column,
  className,
}: DataColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant={"ghost"} className="space-x-2">
          <span>{title}</span>

          {column.getIsSorted() === "asc" ? (
            <SortAsc className="h-3.5 w-3.5" />
          ) : column.getIsSorted() === "desc" ? (
            <SortDesc className="h-3.5 w-3.5" />
          ) : (
            <ArrowUpDown className="h-3.5 w-3.5" />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
          <span>
            <SortAsc className="h-3.5 w-3.5" />
          </span>
          <span>Asc</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
          <span>
            <SortDesc className="h-3.5 w-3.5" />
          </span>
          <span>Desc</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
          <span>
            <EyeOff className="h-3.5 w-3.5" />
          </span>
          <span>Hide</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DataColumnHeader;
