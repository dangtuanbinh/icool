import React from "react";
import { useNavigate } from "react-router-dom";
import "./daos-slider.style.scss";
import { IDaosSliderProps } from "./daos-slider.type";

const classNamePrefix = "daos-slider";

export const DaosSlider = (props: IDaosSliderProps) => {
  const { title, data } = props;

  const navigate = useNavigate();

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__header`}>
        <div className={`${classNamePrefix}__header-wrapper`}>
          <span className={`${classNamePrefix}__header-title`}>{title}</span>
          <div
            className={`${classNamePrefix}__header-more`}
            onClick={() => navigate("/daos")}
          >
            View all
          </div>
        </div>
      </div>
      <div className={`${classNamePrefix}__container`}>
        <div className={`${classNamePrefix}__item-wrapper`}>
          {data?.slice(0, 9).map((item) => (
            <div
              className={`${classNamePrefix}__item`}
              key={item.id}
              onClick={() => navigate("/daos/" + item.id, { state: item })}
            >
              <div
                className={`${classNamePrefix}__item-image`}
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              ></div>

              <div className={`${classNamePrefix}__item-logo-wrapper`}>
                <img
                  className={`${classNamePrefix}__item-logo`}
                  src={item.logoUrl}
                  alt=""
                />
              </div>

              <div className={`${classNamePrefix}__item-text-wrapper`}>
                <span className={`${classNamePrefix}__item-title`}>
                  {item.title}
                </span>
                <div className={`${classNamePrefix}__item-subtitle`}>
                  {item.subTitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
