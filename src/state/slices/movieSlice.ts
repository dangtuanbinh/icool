import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {fetchMovielist} from "../asyncThunks/movie/movieThunks"

interface Movie {
  data: Array<any>;
  isLoading: string;
  errorMsg: string;
}

const initialState: Movie = {
  data: [],
  isLoading: "idle",
  errorMsg: "",
};

const movie = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchMovielist.pending, (state: Movie) => {
        state.isLoading = "loading";
      })
      .addCase(
        fetchMovielist.fulfilled,
        (state: Movie, action: PayloadAction<any>) => {
          state.isLoading = "success";
          state.data = action.payload;
        }
      )
      .addCase(fetchMovielist.rejected, (state: Movie) => {
        state.isLoading = "fail";
      });
  },
});

const { reducer, actions } = movie;
export const { } = actions;
export default reducer;
