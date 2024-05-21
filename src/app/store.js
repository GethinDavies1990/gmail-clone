import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mailSlice";
import { useReducer } from "react";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: useReducer,
  },
});
