import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlide";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
