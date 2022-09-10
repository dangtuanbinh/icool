import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";


const rootReducer = {
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

export default store;
