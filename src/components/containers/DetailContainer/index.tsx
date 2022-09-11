import { Typography } from "antd";
import { useLocation } from "react-router-dom";
import { imageRequest } from "../../../state/api";
import { Movie } from "../../../utils/types/types";

import "./styles.scss";

const DetailContainer = () => {
  const location = useLocation();

  const data = location.state as Movie;

  console.log(data);
  return (
    <div className="detail">
      <div className="detail__left">
        <img
          src={imageRequest(data.poster_path)}
          alt="Image"
          className="detail__left__image"
        />
        <div className="detail__left__statistic">
          <Typography.Text>Score: {data.vote_average}</Typography.Text>
          <Typography.Text>{data.vote_count} voted</Typography.Text>
        </div>
      </div>

      <div className="detail__right">
        <div className="detail__right__title">
          <Typography.Text>{data.title}</Typography.Text>
          <Typography>Release date: {data.release_date}</Typography>
        </div>
        <div className="detail__right__description">
          <Typography.Text>{data.overview}</Typography.Text>
        </div>
      </div>
    </div>
  );
};

export default DetailContainer;
