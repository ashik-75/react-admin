import { createColumnHelper } from "@tanstack/react-table";
import {
  DataTableColumnHeader,
  DataTableRowAction,
} from "../../../components/table";
import { Checkbox } from "../../../components/ui/checkbox";
import { Slider } from "../../../components/ui/slider";
import { ProductType } from "../../../types";
import { cn } from "../../../utils/cn";
import { fDate } from "../../../utils/formatDate";

const columnHelper = createColumnHelper<ProductType>();

export const columnStructure = [
  columnHelper.accessor("id", {
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        onCheckedChange={() => table.toggleAllRowsSelected()}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={() => row.toggleSelected()}
      />
    ),
    enableSorting: false,
    enableColumnFilter: false,
  }),
  columnHelper.accessor("title", {
    header: ({ column }) => (
      <DataTableColumnHeader title="Product" column={column} className="" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <span>{row.original.title}</span>
      </div>
    ),
  }),
  columnHelper.accessor("createdAt", {
    header: ({ column }) => (
      <DataTableColumnHeader title="Created At" column={column} className="" />
    ),
    cell: ({ getValue }) => (
      <div>
        <p>{fDate(getValue())}</p>
      </div>
    ),
  }),
  columnHelper.accessor("stock", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} className="" title="Stock" />
    ),
    cell: ({ row }) => {
      const value = row.original.stock;

      return (
        <div>
          <span>{value}</span>

          <Slider
            color={
              value < 20
                ? "bg-rose-400"
                : value < 50
                ? "bg-yellow-400"
                : "bg-green-400"
            }
            disabled
            defaultValue={[value]}
            max={100}
          />

          <div>{value < 20 ? "too low" : value < 50 ? "medium" : "good"}</div>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      if (!value) {
        return true;
      }
      return (row.getValue(id) as number) >= value;
    },
  }),
  columnHelper.accessor("price", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" className="" />
    ),
    cell: ({ getValue }) => <span>${getValue()}</span>,
  }),
  columnHelper.accessor("status", {
    header: ({ column }) => (
      <DataTableColumnHeader title="Status" className="" column={column} />
    ),
    cell: ({ getValue }) => {
      return (
        <button
          className={cn(
            "rounded px-2 py-1 font-medium shadow",
            getValue() === "published"
              ? "bg-green-500 text-white dark:bg-green-400/20 dark:text-green-400"
              : "bg-zinc-700 text-white dark:bg-zinc-500/20"
          )}
        >
          {getValue()}
        </button>
      );
    },
    filterFn: (row, id, values) => {
      return values.includes(row.getValue(id));
    },
  }),
  columnHelper.display({
    id: "actions",
    cell: () => <DataTableRowAction />,
  }),
];
