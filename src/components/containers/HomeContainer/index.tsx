import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchMovielist } from "../../../state/asyncThunks/movie/movieThunks";
import MovieList from "./MovieList";
import { apiKey } from "../../../state/api";
import "./styles.scss";

const HomeContainer = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(
      fetchMovielist({
        api_key: apiKey,
        language: "en-US",
        page: 1,
      })
    );
  }, []);

  return (
    <div className="homeContainer">
      <MovieList />
    </div>
  );
};

export default HomeContainer;
