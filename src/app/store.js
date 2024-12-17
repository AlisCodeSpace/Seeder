import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice.js";
import authReducer from "../reducers/auth/authSlice";
// import resetPassReducer from "../reducers/auth/resetPassSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    // reset: resetPassReducer,
  },
  middleware: (getDefaultMiddelware) =>
    getDefaultMiddelware().concat(apiSlice.middleware),
  devTools: true,
});
