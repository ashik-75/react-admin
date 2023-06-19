import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { users } from "../../../_mock/users";
import { Button } from "../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { Input } from "../../../components/ui/input";
import { SetTableSize } from "./SetTableSize";
import { columns } from "./columns";

function UsersTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const {
    getHeaderGroups,
    getRowModel,
    getColumn,
    getState,
    getCanNextPage,
    getCanPreviousPage,
    nextPage,
    previousPage,
    setPageSize,
    getAllColumns,
  } = useReactTable({
    columns,
    data: users,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
  });
  return (
    <div>
      <div className="mb-5 flex max-w-md gap-5">
        <Input
          onChange={(event) =>
            getColumn("name")?.setFilterValue(event.target.value)
          }
          value={(getColumn("name")?.getFilterValue() as string) ?? ""}
          placeholder="Enter name ..."
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"}>Column</Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            {getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  checked={column.getIsVisible()}
                  onCheckedChange={() => column.toggleVisibility()}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <table className="w-full">
        <thead>
          {getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="bg border bg-slate-100 px-2 py-3 text-left">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className="border border-zinc-100 px-2 py-1" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-5 flex space-x-4">
        <Button onClick={() => previousPage()} disabled={!getCanPreviousPage()}>
          <ChevronLeft className="icon" />
        </Button>

        <span className="flex items-center  text-lg font-bold">
          {getState().pagination.pageIndex + 1}{" "}
        </span>
        <Button onClick={() => nextPage()} disabled={!getCanNextPage()}>
          <ChevronRight className="icon" />
        </Button>

        <SetTableSize setPageSize={setPageSize} />
      </div>
    </div>
  );
}

export default UsersTable;
