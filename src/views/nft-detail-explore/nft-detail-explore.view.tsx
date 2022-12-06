import { INftDetailExploreProps } from "./nft-detail-explore.type";
import "./nft-detail-explore.style.scss";
import { NetworkDropdown, SearchBar, SingleNft } from "../../components";

const classNamePrefix = "toto-wui-single-site-zapper-nft-detail-explore";

export const NftDetailExplore = (props: INftDetailExploreProps) => {
  const { data } = props;

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__left`}>
        <div className={`${classNamePrefix}__left-toolbar`}>
          <div className={`${classNamePrefix}__left-search-bar`}>
            <SearchBar placeholder="Filter by account or token ID" />
          </div>

          <div className={`${classNamePrefix}__left-filter-group`}>
            <NetworkDropdown />

            <div className={`${classNamePrefix}__left-filter-icon`}>
              <i className="bi bi-funnel"></i>
            </div>
          </div>
        </div>

        <div className={`${classNamePrefix}__body`}>
          <div className={`${classNamePrefix}__body-title`}>
            {data.collection.length} results
          </div>

          <div className={`${classNamePrefix}__body-nft-list`}>
            {data.collection.map((item: any) => (
              <div className={`${classNamePrefix}__list-item`} key={item.id}>
                <SingleNft type="collection" data={item} />
              </div>
            ))}

            {data.collection.map((item: any) => (
              <div className={`${classNamePrefix}__list-item`} key={item.id}>
                <SingleNft type="collection" data={item} />
              </div>
            ))}

            {data.collection.map((item: any) => (
              <div className={`${classNamePrefix}__list-item`} key={item.id}>
                <SingleNft type="collection" data={item} />
              </div>
            ))}

            {data.collection.map((item: any) => (
              <div className={`${classNamePrefix}__list-item`} key={item.id}>
                <SingleNft type="collection" data={item} />
              </div>
            ))}

            {data.collection.map((item: any) => (
              <div className={`${classNamePrefix}__list-item`} key={item.id}>
                <SingleNft type="collection" data={item} />
              </div>
            ))}

            {data.collection.map((item: any) => (
              <div className={`${classNamePrefix}__list-item`} key={item.id}>
                <SingleNft type="collection" data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${classNamePrefix}__right`}>
        <div className={`${classNamePrefix}__right-title`}>Traits</div>

        <div></div>
      </div>
    </div>
  );
};
