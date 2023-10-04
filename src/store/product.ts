import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types";

const initialProductState = {
  productList: [
    {
      id: 1,
      product_name: "iPhone 9",
      brand: "Apple",
      category: "smartphones",
      price: "549",
    },
    {
      id: 2,
      product_name: "Samsung Universe 9",
      brand: "Samsung",
      category: "smartphones",
      price: "1249",
    },
    {
      id: 3,
      product_name: "OPPOF19",
      brand: "OPPO",
      category: "smartphones",
      price: "280",
    },
  ] as Product[],
  id: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {
    addProduct: (state, action) => ({
      ...state,
      productList: [...state.productList, action.payload.productList],
    }),
    removeProduct: (state, action) => ({
      ...state,
      productList: [
        ...state.productList.filter(
          (item, index) => index !== action.payload.id
        ),
      ],
    }),
    updateProduct: (state, action) => ({
      ...state,
      productList: [
        ...state.productList.map((item, index) => {
          if (item.id === action.payload.productList.id) {
            return action.payload.productList;
          } else {
            return item;
          }
        }),
      ],
    }),
  },
});

export const productActions = productSlice.actions;

export default productSlice;
