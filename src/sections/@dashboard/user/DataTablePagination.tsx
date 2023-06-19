import { Table } from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex justify-between">
      <div>
        {table.getSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length}
      </div>

      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <p>Rows per page </p>
          <Select
            defaultValue="10"
            onValueChange={(value) => table.setPageSize(Number(value))}
          >
            <SelectTrigger className="h-8 w-[100px]">
              <SelectValue placeholder="Rows Per Page" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value={"10"}>10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="30">30</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </div>

        <div className="flex gap-3">
          <Button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.setPageIndex(0)}
            variant={"outline"}
            className="h-8 w-8 p-0"
          >
            <ChevronsLeft className="h-3.5 w-3.5" />
          </Button>
          <Button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            variant={"outline"}
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            variant={"outline"}
            className="h-8 w-8 p-0"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            variant={"outline"}
            className="h-8 w-8 p-0"
          >
            <ChevronsRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DataTablePagination;
