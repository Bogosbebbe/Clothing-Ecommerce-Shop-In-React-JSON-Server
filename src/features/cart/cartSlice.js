import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },
        updateCartAmount: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload.id);
            cartItem.amount = action.payload.amount;
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload);
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach(item => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
        addToCart: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload.id);
            if(!cartItem){
                state.cartItems.push(action.payload);
                state.amount += action.payload.amount;
            }else{
                state.amount += action.payload.amount;
                cartItem.amount += action.payload.amount;
            }

        }
    }
})

// console.log(cartSlice);
export const { clearCart, removeItem, updateCartAmount, decrease, calculateTotals, addToCart } = cartSlice.actions;

export default cartSlice.reducer;