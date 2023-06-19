import { Table } from "@tanstack/react-table";
import { Input } from "../../../components/ui/input";

interface PropsType<TData> {
  table: Table<TData>;
}

function DataTableToolBar<TData>({ table }: PropsType<TData>) {
  return (
    <div>
      <div>
        <Input
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="w-[350px]"
          placeholder="Enter name ..."
        />
      </div>
    </div>
  );
}

export default DataTableToolBar;
