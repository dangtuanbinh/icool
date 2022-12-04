import React from "react";
import { useNavigate } from "react-router-dom";
import "./account-slider.style.scss";
import { IAccountSliderProps } from "./account-slider.type";

const classNamePrefix = "account-slider";

export const AccountSlider = (props: IAccountSliderProps) => {
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
            <div
              className={`${classNamePrefix}__item`}
              key={item.id}
              onClick={() => navigate("/account/" + item.id , {state: item})}
            >
              <div
                className={`${classNamePrefix}__item-image`}
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              ></div>

              <div className={`${classNamePrefix}__item-text-wrapper`}>
                <span className={`${classNamePrefix}__item-title`}>
                  {item.name}
                </span>
                <div className={`${classNamePrefix}__item-subtitle`}>
                  <span>Follower</span>
                  {item.follower}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
