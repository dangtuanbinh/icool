import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./grid-data-list.style.scss";
import { IGridDataListProps } from "./grid-data-list.type";

const classNamePrefix = "toto-wui-single-site-zapper-grid-data-list";

export const GridDataList: React.FC<IGridDataListProps> = (props) => {
  const { title, data } = props;

  const navigate = useNavigate();

  const [showMoreButton, setShowMoreButton] = useState<boolean>(false);

  useEffect(() => {
    if (data.length > data.slice(0, 12).length) setShowMoreButton(true);
  }, [data]);

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__title`}>{title}</div>

      <div className={`${classNamePrefix}__list-container`}>
        {data.slice(0, 12).map((item: any) => (
          <div
            className={`${classNamePrefix}__list-item`}
            key={item.id}
            onClick={() => navigate("/daos/" + item.id, { state: item })}
          >
            <img
              className={`${classNamePrefix}__list-logo`}
              src={item.logoUrl}
              alt=""
            />
            <div className={`${classNamePrefix}__list-item-text-wrapper`}>
              <span className={`${classNamePrefix}__list-item-title`}>
                {item.title}
              </span>
              <div className={`${classNamePrefix}__list-item-categories`}>
                {item.categories.map((item: any) => (
                  <div
                    className={`${classNamePrefix}__list-item-categories-item`}
                    key={item.id}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showMoreButton && (
        <div className={`${classNamePrefix}__view-more`}>
          <div className={`${classNamePrefix}__view-more-button`}>
            View {data.length - data.slice(0, 12).length} More...
          </div>
        </div>
      )}
    </div>
  );
};
