import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishItems: [],
  amount: 0,
  isLoading: true,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    clearWishlist: (state) => {
      state.wishItems = [];
    },
    removeFromWishlist: (state, action) => {
      const itemId = action.payload;
      state.wishItems = state.wishItems.filter((item) => item.id !== itemId);
      toast.error("Product removed from the wishlist!");
    },
    addToWishlist: (state, action) => {
      const wishItem = state.wishItems.find(
        (item) => item.id === action.payload.id
      );

      state.wishItems.push(action.payload);

      toast.success("Product added to the wishlist!");
    },
    calculateWishlistAmount: (state) => {
      let amount = 0;
      state.wishItems.forEach((item) => {
        amount += item.amount;
      });
      state.amount = amount;
    },
  },
});

// console.log(cartSlice);
export const {
  clearWishlist,
  removeFromWishlist,
  addToWishlist,
  calculateWishlistAmount,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
