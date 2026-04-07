import { configureStore } from "@reduxjs/toolkit";
import reservsReducer from "./features/posts/reservsSlice";

export default configureStore({
  reducer: {
    reservs: reservsReducer,
  },
});
