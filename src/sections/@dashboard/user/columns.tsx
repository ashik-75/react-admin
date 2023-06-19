import { createColumnHelper } from "@tanstack/react-table";
import { Play } from "lucide-react";
import { Checkbox } from "../../../components/ui/checkbox";
import { UserType } from "../../../types";
import { cn } from "../../../utils/cn";

const columnHelper = createColumnHelper<UserType>();

export const columns = [
  columnHelper.accessor("id", {
    header: ({ table }) => (
      <>
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected()}
        />
      </>
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={() => row.toggleSelected()}
      />
    ),
  }),
  columnHelper.accessor("avatar", {
    header: "Image",
    cell: ({ getValue }) => (
      <img src={getValue()} className="h-10 w-10" alt="" />
    ),
  }),
  columnHelper.accessor("name", {
    header: ({ column }) => {
      return (
        <button
          className="flex items-center gap-2"
          onClick={() => column.toggleSorting()}
        >
          <span>Name</span>
          {!column.getIsSorted() ? null : column.getIsSorted() === "asc" ? (
            <Play className="icon rotate-90" />
          ) : (
            <Play className="icon -rotate-90 " />
          )}
        </button>
      );
    },
  }),
  columnHelper.accessor("company", {
    header: "Company",
  }),
  columnHelper.accessor("role", {
    header: "Role",
  }),
  columnHelper.accessor("isVerified", {
    header: "Verified",
    cell: ({ getValue }) => {
      const isVerified = getValue();
      return (
        <span
          className={cn(
            "py-.5 inline-block rounded-full px-2 text-xs font-semibold text-white",
            isVerified ? "bg-green-500" : "bg-rose-500"
          )}
        >
          {isVerified ? "Verified" : "Not Verified"}
        </span>
      );
    },
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ getValue }) => {
      return (
        <span
          className={cn(
            "py-.5 rounded-full px-2 text-xs font-semibold",
            getValue() === "active"
              ? "bg-green-400/20  text-green-600"
              : "bg-rose-500/20 text-rose-600"
          )}
        >
          {getValue()}
        </span>
      );
    },
  }),
];
