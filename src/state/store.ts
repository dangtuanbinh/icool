import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import movieReducer from "../state/slices/movieSlice";
import commonReducer from "../state/slices/commonSlices"

const rootReducer = {
  movie: movieReducer,
  common: commonReducer
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

export default store;
