import { createColumnHelper } from "@tanstack/react-table";
import { Checkbox } from "../../../components/ui/checkbox";
import { UserType } from "../../../types";
import { cn } from "../../../utils/cn";
import DataColumnHeader from "./DataColumnHeader";
import DataTableRowAction from "./DataTableRowAction";

const columnHelper = createColumnHelper<UserType>();

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
        className=""
        checked={row.getIsSelected()}
        onCheckedChange={() => row.toggleSelected()}
      />
    ),
  }),
  columnHelper.accessor("name", {
    header: ({ column }) => (
      <DataColumnHeader title="Name" column={column} className="" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-3">
          <img
            src={row.original.avatar}
            className="h-10 w-10 rounded-full"
            alt=""
          />
          <h1 className="font-medium">{row.original.name}</h1>
        </div>
      );
    },
  }),
  columnHelper.accessor("company", {
    header: ({ column }) => (
      <DataColumnHeader title="Company" column={column} className="" />
    ),
  }),
  columnHelper.accessor("role", {
    header: ({ column }) => (
      <DataColumnHeader title="Role" column={column} className="" />
    ),
  }),
  columnHelper.accessor("isVerified", {
    header: "Verified",
    cell: ({ getValue }) => {
      const out = getValue() ? "Yes" : "No";

      return <button>{out}</button>;
    },
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ getValue }) => {
      return (
        <button
          className={cn(
            "py-.5 rounded-full px-2 font-semibold",
            getValue() === "active"
              ? "bg-green-600/20 text-green-600"
              : "bg-pink-600/20 text-pink-600"
          )}
        >
          {getValue()}
        </button>
      );
    },
  }),
  columnHelper.display({
    id: "actions",
    cell: ({ row }) => <DataTableRowAction id={row.original.id} />,
  }),
];
