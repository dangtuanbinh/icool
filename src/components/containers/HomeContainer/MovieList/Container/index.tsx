import { Typography } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFetchingStatus,
  getMovieList,
} from "../../../../../state/selectors/RootSelector";

import Item from "../Item";
import "./styles.scss";

const Container = () => {
  const dispatch = useDispatch<any>();

  const movieList = useSelector(getMovieList);
  const fetchingStatus = useSelector(getFetchingStatus);
  console.log(fetchingStatus);

  return (
    <div className="movieContainer">
      <div className="movieContainer__list">
        {fetchingStatus === "loading" ? (
          <Typography.Text type="warning">Fetching data</Typography.Text>
        ) : (
          movieList.map((item: any, index: any) => (
            <Item key={index} data={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Container;
