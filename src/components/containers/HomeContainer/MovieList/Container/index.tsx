import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Spin } from "antd";
import PullToRefresh from "react-simple-pull-to-refresh";

import {
  getFetchingStatus,
  getMovieList,
} from "../../../../../state/selectors/RootSelector";
import Item from "../Item";
import "./styles.scss";
import { fetchMovielist } from "../../../../../state/asyncThunks/movie/movieThunks";
import { apiKey } from "../../../../../state/api";

const Container = () => {
  const dispatch = useDispatch<any>();

  const [loading, setLoading] = useState(false);
  const movieList = useSelector(getMovieList);
  const fetchingStatus = useSelector(getFetchingStatus);

  useEffect(() => {
    if (fetchingStatus === "loading") setLoading(!loading);
    setInterval(() => setLoading(false), 1500);
  }, [fetchingStatus]);

  const handleRefresh = () =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log("refreshed");
        resolve();
      }, 2000);
    });

  return (
    <div className="movieContainer">
      {loading ? (
        <Space size="middle">
          <Spin size="large" />
        </Space>
      ) : (
        <div className="pullContainer">
          <PullToRefresh onRefresh={handleRefresh} isPullable>
            <div className="movieContainer__list">
              {movieList.map((item: any, index: any) => (
                <Item key={index} data={item} />
              ))}
            </div>
          </PullToRefresh>
        </div>
      )}
    </div>
  );
};

export default Container;
