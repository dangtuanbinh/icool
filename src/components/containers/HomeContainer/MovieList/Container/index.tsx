import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Spin } from "antd";

import {
  getFetchingStatus,
  getMovieList,
} from "../../../../../state/selectors/RootSelector";
import LoadingIndicator from "../../../../commons/LoadingIndicator";
import Item from "../Item";
import "./styles.scss";

const Container = () => {
  const dispatch = useDispatch<any>();

  const [loading, setLoading] = useState(false);
  const movieList = useSelector(getMovieList);
  const fetchingStatus = useSelector(getFetchingStatus);

  useEffect(() => {
    if (fetchingStatus === "loading") setLoading(!loading);
    setInterval(() => setLoading(false), 1500);
  }, [fetchingStatus]);

  return (
    <div className="movieContainer">
      {loading ? (
        <Space size="middle">
          <Spin size="large" />
        </Space>
      ) : (
        <div className="movieContainer__list">
          {movieList.map((item: any, index: any) => (
            <Item key={index} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Container;
