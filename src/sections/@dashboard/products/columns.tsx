import { createColumnHelper } from "@tanstack/react-table";
import {
  DataTableColumnHeader,
  DataTableRowAction,
} from "../../../components/table";
import { Checkbox } from "../../../components/ui/checkbox";
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
  }),
  columnHelper.accessor("title", {
    header: ({ column }) => (
      <DataTableColumnHeader title="Product" column={column} className="" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <img src={row.original.image} className="h-14 w-14 rounded-lg" alt="" />
        <span>{row.original.title}</span>
      </div>
    ),
  }),
  columnHelper.accessor("createdAt", {
    header: "Create At",
    cell: ({ getValue }) => (
      <div>
        <p>{fDate(getValue())}</p>
      </div>
    ),
  }),
  columnHelper.accessor("stock", {
    header: "Stock",
    cell: ({ getValue }) => <span>{getValue()}</span>,
  }),
  columnHelper.accessor("price", {
    header: "Price",
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
            "py-.5 rounded px-1 font-medium",
            getValue() === "published"
              ? "bg-green-400/20 text-green-600"
              : "bg-zinc-500/20 text-white"
          )}
        >
          {getValue()}
        </button>
      );
    },
  }),
  columnHelper.display({
    id: "actions",
    cell: () => <DataTableRowAction />,
  }),
];
