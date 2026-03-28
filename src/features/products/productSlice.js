import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const response = await axios.get(
      "https://dummyjson.com/products"
    );
    return response.data.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },

    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      state.products[index] = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  }
});

export const {
  addProduct,
  deleteProduct,
  updateProduct
} = productSlice.actions;

export default productSlice.reducer;