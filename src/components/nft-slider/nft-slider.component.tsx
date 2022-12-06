import React from "react";
import { useNavigate } from "react-router-dom";
import { SingleNft } from "../single-nft";
import "./nft-slider.style.scss";
import { INftSliderProps } from "./nft-slider.type";

const classNamePrefix = "nft-slider";

export const NftSlider = (props: INftSliderProps) => {
  const { title, data } = props;

  const navigate = useNavigate();

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__header`}>
        <div className={`${classNamePrefix}__header-wrapper`}>
          <span className={`${classNamePrefix}__header-title`}>{title}</span>
        </div>
      </div>
      <div className={`${classNamePrefix}__container`}>
        <div className={`${classNamePrefix}__item-wrapper`}>
          {data?.map((item) => (
            <SingleNft data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
