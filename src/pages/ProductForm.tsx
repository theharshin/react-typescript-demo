import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Product } from "../types";
import { productActions } from "../store/product";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ProductForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const product = location?.state?.product;

  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm({
    defaultValues: {
      product_name: product?.product_name || "",
      brand: product?.brand || "",
      category: product?.category || "",
      price: product?.price || "",
    },
  });

  const onSubmit = (data: Product) => {
    const id = Math.floor(Math.random() * 100);
    if (params?.id) {
      console.log("data", { ...data, id: product?.id });
      dispatch(
        productActions.updateProduct({
          productList: { ...data, id: product?.id },
        })
      );
    } else {
      dispatch(
        productActions.addProduct({
          productList: { ...data, id },
        })
      );
    }
    navigate("/");
  };

  return (
    <div className="container mx-auto px-10 md:w-6/12 w-full">
      <div className="p-6 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md mt-6">
        <h1 className="font-normal text-lg">Product Form</h1>
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          <h5>Product Name:</h5>
          <input
            type="text"
            placeholder="Product Name"
            className="border p-1 rounded w-full"
            {...register("product_name", {
              required: "Product Name is required",
            })}
          />
          {errors.product_name && (
            <p className="text-[#b91c1c] mb-0">
              {errors.product_name?.message}
            </p>
          )}
          <h5 className="mt-2">Brand Name:</h5>
          <input
            type="text"
            placeholder="Brand Name"
            className="border p-1 rounded w-full"
            {...register("brand", {
              required: "Brand is required",
            })}
          />
          {errors.brand && (
            <p className="text-[#b91c1c] mb-0">{errors.brand?.message}</p>
          )}
          <h5 className="mt-2">Category:</h5>
          <input
            type="text"
            placeholder="Category"
            className="border p-1 rounded w-full"
            {...register("category", {
              required: "Category is required",
            })}
          />
          {errors.category && (
            <p className="text-[#b91c1c] mb-0">{errors.category?.message}</p>
          )}
          <h5 className="mt-2">Price:</h5>
          <input
            type="text"
            placeholder="Price"
            className="border p-1 rounded w-full"
            {...register("price", {
              required: "Price is required",
            })}
          />
          {errors.price && (
            <p className="text-[#b91c1c] mb-0">{errors.price?.message}</p>
          )}
          <button
            className="text-white bg-blue-500 px-4 py-2 rounded mt-4"
            type="submit"
          >
            {params?.id ? "Update product" : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
