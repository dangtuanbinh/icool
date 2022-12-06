import {
  CustomPagination,
  ListItem,
  SearchBar,
} from "../../components";
import "./defi-detail-explore.style.scss";
import { IDefiDetailExploreProps } from "./defi-detail-explore.type";

const classNamePrefix = "toto-wui-single-site-defi-detail-explore";

export const DefiDetailExplore = (props: IDefiDetailExploreProps) => {
  const { data } = props;

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__toolbar`}>
        <div className={`${classNamePrefix}__search-bar`}>
          <SearchBar placeholder="Filter by app name" />
        </div>

        <div className={`${classNamePrefix}__pagination`}>
          <CustomPagination currentPage={1} maxPage={6} />
        </div>
      </div>

      <div className={`${classNamePrefix}__list`}>
        <div className={`${classNamePrefix}__list-title`}>
          <div className={`${classNamePrefix}__list-app-name`}>
            Assets
            <i className="bi bi-chevron-expand"></i>
          </div>
          <div className={`${classNamePrefix}__list-tiv`}>
            Liquidity
            <i className="bi bi-chevron-expand"></i>
          </div>
        </div>

        <div className={`${classNamePrefix}__list-container`}>
          {data.assets.map((item: any) => (
            <div className={`${classNamePrefix}__list-item`} key={item.id}>
              <ListItem
                logoUrl={item.logoUrl}
                leftTitle={item.title}
                rightTitle={item.liquidity}
              />
            </div>
          ))}
        </div>

        <div className={`${classNamePrefix}__pagination-wrapper`}>
            <CustomPagination currentPage={1} maxPage={1} />
        </div>
      </div>
    </div>
  );
};
