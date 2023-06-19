import { createColumnHelper } from "@tanstack/react-table";
import { Checkbox } from "../../../components/ui/checkbox";
import { UserType } from "../../../types";

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
    header: "Name",
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
    header: "Company",
  }),
  columnHelper.accessor("role", {
    header: "Role",
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
  }),
];
