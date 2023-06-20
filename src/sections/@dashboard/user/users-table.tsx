import { users } from "../../../_mock/users";
import { DataTable } from "../../../components/table";
import { columnStructure } from "./columnStructure";

function UsersTable() {
  return (
    <div>
      <DataTable data={users} column={columnStructure} />
    </div>
  );
}

export default UsersTable;
