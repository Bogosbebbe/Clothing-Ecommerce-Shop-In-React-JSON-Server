import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
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
      const itemId = action.payload.productId;
      state.wishItems = state.wishItems.filter((item) => item.id !== itemId);
      toast.error("Product removed from the wishlist!");
    },
    updateWishlist: (state, action) => {

      state.wishItems = action.payload.userObj.userWishlist;

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
  updateWishlist,
  calculateWishlistAmount,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
