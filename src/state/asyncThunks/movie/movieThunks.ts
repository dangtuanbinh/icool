import { createAsyncThunk } from "@reduxjs/toolkit";
import { connectMovieApi } from "./movieApi";

export const fetchMovielist = createAsyncThunk(
  "movie list",
  async (params: any) => {
    const resp = await connectMovieApi(params)
      .then((response: any) => {
        return response.results;
      })
      .catch((error: any) => {
        return error.response;
      });
    console.log("Movie List", resp);

    if (resp) {
      return resp;
    } else {
      return [];
    }
  }
);
