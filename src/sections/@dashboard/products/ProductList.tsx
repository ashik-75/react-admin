import { products } from "../../../_mock/products";
import { DataTable } from "../../../components/table";
import { columnStructure } from "./columns";

function ProductList() {
  return (
    <div>
      <DataTable data={products} column={columnStructure} />
    </div>
  );
}

export default ProductList;
