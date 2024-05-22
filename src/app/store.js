import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mailSlice";
import userReducer from "../features/userSlice"; // Correct import

const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer, // Use the default export from userSlice
  },
});

export default store;
