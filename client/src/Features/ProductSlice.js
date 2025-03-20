import { createSlice } from "@reduxjs/toolkit";
//Import the ProductsData from the ProductsData.js file.
import { ProductsData } from "../ProductsData";
//Create a variable for the initialState and assign the data from the ProductsData
const initialState = { value: ProductsData };
export const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.value.push(action.payload);
    },
    deleteProduct: (state, action) => {},
    updateProduct: (state, action) => {},
  },
  //create the reducters
});
//export all the action
export const { addProduct, deleteProduct, updateProduct } =
  productSlice.actions;
//export the reducer
export default productSlice.reducer;
