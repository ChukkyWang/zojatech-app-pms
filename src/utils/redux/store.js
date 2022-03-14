import { configureStore } from "@reduxjs/toolkit";
// import appReducer from "./transactionSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: { app: authReducer },
});

export default store;
