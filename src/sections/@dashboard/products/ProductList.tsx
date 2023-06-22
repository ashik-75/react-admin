import { products } from "../../../_mock/products";

import { columnStructure } from "./columns";
import DataTable from "./data-table";

function ProductList() {
  return (
    <div>
      <DataTable data={products} column={columnStructure} />
    </div>
  );
}

export default ProductList;
