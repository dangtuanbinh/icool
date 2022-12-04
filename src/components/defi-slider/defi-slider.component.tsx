import React from "react";
import { useNavigate } from "react-router-dom";
import "./defi-slider.style.scss";
import { IDefiSliderProps } from "./defi-slider.type";

const classNamePrefix = "defi-slider";

export const DefiSlider = (props: IDefiSliderProps) => {
  const { title, data } = props;

  const navigate = useNavigate();

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__header`}>
        <div className={`${classNamePrefix}__header-wrapper`}>
          <span className={`${classNamePrefix}__header-title`}>{title}</span>
          <div
            className={`${classNamePrefix}__header-more`}
            onClick={() => navigate("/defi")}
          >
            View all
          </div>
        </div>
      </div>
      <div className={`${classNamePrefix}__container`}>
        <div className={`${classNamePrefix}__item-wrapper`}>
          {data?.map((item) => (
            <div
              className={`${classNamePrefix}__item`}
              key={item.id}
              onClick={() => navigate("/defi/" + item.id, { state: item })}
            >
              <div className={`${classNamePrefix}__item-image-wrapper`}>
                <div
                  className={`${classNamePrefix}__item-image`}
                  style={{ backgroundImage: `url(${item.logoUrl})` }}
                ></div>
                <div className={`${classNamePrefix}__item-image-layer`}></div>
                <div className={`${classNamePrefix}__item-logo-wrapper`}>
                  <img
                    className={`${classNamePrefix}__item-logo`}
                    src={item.logoUrl}
                    alt=""
                  />
                </div>
              </div>

              <div className={`${classNamePrefix}__item-text-wrapper`}>
                <span className={`${classNamePrefix}__item-title`}>
                  {item.name}
                </span>
                <div className={`${classNamePrefix}__item-subtitle`}>
                  <span>TIV</span>
                  {item.tiv}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
