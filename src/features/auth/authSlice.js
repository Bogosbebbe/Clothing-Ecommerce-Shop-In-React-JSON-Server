import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem('id') ? true : false,
  darkMode: true
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
    },
    changeMode: (state) => {
      state.darkMode = !state.darkMode;
      if(state.darkMode){
        document.querySelector('html').setAttribute('data-theme', "dark");
      }else{
        document.querySelector('html').setAttribute('data-theme', "winter");
      }
    }
  },
});

// console.log(cartSlice);
export const { loginUser, logoutUser, changeMode } = authSlice.actions;

export default authSlice.reducer;
