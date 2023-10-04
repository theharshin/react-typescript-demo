import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Product } from "../types";
import { productActions } from "../store/product";
import { useNavigate } from "react-router-dom";
import { EditIcon } from "../components/icons/EditIcon";
import { DeleteIcon } from "../components/icons/DeleteIcon";

export default function home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productList: Product[] = useSelector(
    (state: any) => state?.product?.productList
  );

  const removeProduct = (id: number) => {
    dispatch(
      productActions.removeProduct({
        id: id,
      })
    );
  };

  const handleEdit = (id: number, item: Product) => {
    console.log("id", id);
    navigate(`/edit-product/${id}`, { state: { product: item } });
  };

  const addProduct = () => {
    navigate("/create-product");
  };

  return (
    <div className="container mx-auto">
      <div className="bg-white p-4 rounded-md mt-6 h-[570px] overflow-auto">
        <div className="flex justify-between">
          <h3 className="mt-4 font-medium text-lg">Product List</h3>
          <button
            className="text-white bg-blue-500 px-2 py-1 rounded mt-4"
            onClick={addProduct}
          >
            Add Product
          </button>
        </div>
        <table className="mt-4 divide-y divide-gray-200 table-fixed border-spacing-2 border-collapse border-slate-500 w-full">
          <thead>
            <tr>
              <th className="border-slate-600 text-left">Product Name</th>
              <th className="border-slate-600 text-left">Brand</th>
              <th className="border-slate-600 text-left">Category</th>
              <th className="border-slate-600 text-left">Price</th>
              <th className="border-slate-600">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {productList?.map((item, index) => {
              return (
                <tr key={index} className="hover:bg-gray-200">
                  <td className="border-slate-600">{item.product_name}</td>
                  <td className="border-slate-600">{item.brand}</td>
                  <td className="border-slate-600">{item.category}</td>
                  <td className="border-slate-600">{item.price}</td>
                  <td className="border-slate-600 py-2 text-center">
                    <div className="flex items-center justify-center">
                      <EditIcon
                        onClick={() => handleEdit(index, item)}
                        className="h-6 w-6 cursor-pointer"
                      />
                      <DeleteIcon
                        className="h-6 w-6 cursor-pointer ml-2"
                        onClick={() => removeProduct(index)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
