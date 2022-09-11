import { useDispatch, useSelector } from "react-redux";
import { Typography } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

import "./styles.scss";
import CustomButton from "../../../../commons/CusomButton";
import { imageRequest } from "../../../../../state/api";
import { useNavigate } from "react-router-dom";

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;

interface Props {
  data?: any;
}

const Item = ({ data }: Props) => {
  const navigate = useNavigate();

  const { poster_path, id } = data;

  return (
    <FadeInDiv className="item">
      <LazyLoadImage
        alt="movie image"
        src={imageRequest(poster_path)}
        effect="blur"
        className="item__image"
      />
      <div className="item__group">
        <CustomButton
          label="View Detail"
          className="item__button"
          onClick={() => navigate("/movie/detail/" + id, { state: data })}
        />
        <CustomButton label="Book a ticket" className="item__button" />
      </div>
    </FadeInDiv>
  );
};

export default Item;
