import { Table } from "@tanstack/react-table";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { statusData } from "./data";
import DataTableFacedFilter from "./data-table-faced-filter";
import DataTableViewOptions from "./data-table-view-options";

interface PropsType<TData> {
  table: Table<TData>;
}

function DataTableToolBar<TData>({ table }: PropsType<TData>) {
  const isFiltered =
    table.getPreFilteredRowModel().rows.length >
    table.getFilteredRowModel().rows.length;

  return (
    <div className="mb-2 flex justify-between">
      <div className="flex gap-5">
        <div>
          <Input
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
            className="h-8 w-[300px]"
            placeholder="product name ..."
          />
        </div>
        <div>
          <Input
            value={(table.getColumn("stock")?.getFilterValue() as string) ?? ""}
            type="number"
            onChange={(event) =>
              table
                .getColumn("stock")
                ?.setFilterValue(event.target.valueAsNumber)
            }
            className="h-8 w-[300px] focus:border-zinc-600 focus:ring-offset-transparent"
            placeholder="stock unit equal to or more (>=) ..."
          />
        </div>

        <div>
          <DataTableFacedFilter
            title="Status"
            column={table.getColumn("status")}
            options={statusData}
          />
        </div>

        {isFiltered && (
          <Button
            onClick={() => table.resetColumnFilters()}
            variant={"outline"}
            size={"sm"}
            className="h-8"
          >
            Reset
          </Button>
        )}
      </div>

      <div>
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}

export default DataTableToolBar;
