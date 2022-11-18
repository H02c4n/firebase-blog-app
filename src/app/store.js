import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import blogReducer from "../features/blogSlice";
const store = configureStore({
  reducer: {
    authReducer,
    blogReducer,
  },
});

export default store;
