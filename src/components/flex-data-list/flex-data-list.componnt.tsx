import { useState } from "react";
import { ListItem } from "../list-item";
import "./flex-data-list.style.scss";
import { IFlexDataListProps } from "./flex-data-list.type";

const classNamePrefix = "toto-wui-single-site-zapper-flex-data-list";

export const FlexDataList: React.FC<IFlexDataListProps> = (props) => {
  const { dataType, data } = props;

  const [showWalletList, setShowWalletList] = useState<boolean>(true);
  const [showNftList, setShowNftList] = useState<boolean>(true);
  const [showAppList, setShowAppList] = useState<boolean>(true);

  return (
    <div className={classNamePrefix}>
      {dataType === "wallet-data" && (
        <div className={`${classNamePrefix}__collapse-item`}>
          <div className={`${classNamePrefix}__collapse-item-header`}>
            <span className={`${classNamePrefix}__collapse-item-header-title`}>
              Wallet
            </span>
            <div className={`${classNamePrefix}__collapse-item-balance-group`}>
              <span className={`${classNamePrefix}__collapse-item-balance`}>
                {data.balance}
              </span>
              <div
                className={`${classNamePrefix}__collapse-item-button`}
                onClick={() => setShowWalletList(!showWalletList)}
              >
                {!showWalletList ? "+" : "-"}
              </div>
            </div>
          </div>

          {showWalletList && (
            <div className={`${classNamePrefix}__collapse-item-body`}>
              {data.tokenList.map((item: any) => (
                <div key={item.id} className={`${classNamePrefix}__list-item`}>
                  <ListItem
                    logoUrl={item.logoUrl}
                    leftTitle={item.name}
                    leftSubtitle={item.price}
                    rightTitle={item.total}
                    rightSubtitle={item.quantity}
                    endIcon="bi bi-chevron-right"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {dataType === "nft-data" && (
        <div className={`${classNamePrefix}__collapse-item`}>
          <div className={`${classNamePrefix}__collapse-item-header`}>
            <span className={`${classNamePrefix}__collapse-item-header-title`}>
              NFTs
            </span>
            <div className={`${classNamePrefix}__collapse-item-balance-group`}>
              <span className={`${classNamePrefix}__collapse-item-balance`}>
                {data.balance}
              </span>
              <div
                className={`${classNamePrefix}__collapse-item-button`}
                onClick={() => setShowNftList(!showNftList)}
              >
                {!showNftList ? "+" : "-"}
              </div>
            </div>
          </div>
          {showNftList && (
            <div className={`${classNamePrefix}__collapse-item-body`}>
              <div className={`${classNamePrefix}__nft-list-wrapper`}>
                {data.map((item: any) => (
                  <div className={`${classNamePrefix}__nft-item`} key={item.id}>
                    <div
                      className={`${classNamePrefix}__nft-item-image`}
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                    ></div>

                    <div
                      className={`${classNamePrefix}__nft-item-logo-wrapper`}
                    >
                      <img
                        className={`${classNamePrefix}__nft-item-logo`}
                        src={item.logoUrl}
                        alt=""
                      />
                    </div>

                    <div
                      className={`${classNamePrefix}__nft-item-text-wrapper`}
                    >
                      <span className={`${classNamePrefix}__nft-item-title`}>
                        {item.name}
                      </span>
                      <div className={`${classNamePrefix}__nft-item-subtitle`}>
                        <div className={`${classNamePrefix}__nft-item-price`}>
                          <span
                            className={`${classNamePrefix}__nft-item-price-label`}
                          >
                            Floor Price
                          </span>
                          <span
                            className={`${classNamePrefix}__nft-item-price-content`}
                          >
                            {item.floorPrice}
                          </span>
                        </div>

                        <div
                          className={`${classNamePrefix}__nft-item-estimate`}
                        >
                          <span
                            className={`${classNamePrefix}__nft-item-estimate-label`}
                          >
                            Est. Value
                          </span>
                          <span
                            className={`${classNamePrefix}__nft-item-estimate-content`}
                          >
                            {item.estimateValue}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`${classNamePrefix}__view-all-button`}>
                <span className={`${classNamePrefix}__view-all-button-text`}>
                  View all
                </span>
                <span>{">"}</span>
              </div>
            </div>
          )}
        </div>
      )}

      {dataType === "app-data" && data.length > 1 && (
        <div>
          <div className={`${classNamePrefix}__title`}>
            <span className={`${classNamePrefix}__title-text`}>App</span>
            <a
              className={`${classNamePrefix}__title-link`}
              href="https://studio.zapper.fi/"
            >
              Want to integrate an app?
            </a>
          </div>

          {data.map((app: any) => (
            <div className={`${classNamePrefix}__collapse-item`} key={app.id}>
              <div className={`${classNamePrefix}__collapse-item-header`}>
                <div className={`${classNamePrefix}__wallet-item-left`}>
                  <img
                    className={`${classNamePrefix}__app-item-image`}
                    src={app.logoUrl}
                    alt=""
                  />
                  <div
                    className={`${classNamePrefix}__app-item-info-wrapper-left`}
                  >
                    <span className={`${classNamePrefix}__app-item-title`}>
                      {app.name}
                    </span>
                    <span className={`${classNamePrefix}__app-item-subtitle`}>
                      {app.network}
                    </span>
                  </div>
                </div>
                <div
                  className={`${classNamePrefix}__collapse-item-balance-group`}
                >
                  <span className={`${classNamePrefix}__collapse-item-balance`}>
                    {app.balance}
                  </span>
                  <div
                    className={`${classNamePrefix}__collapse-item-button`}
                    onClick={() => setShowAppList(!showAppList)}
                  >
                    {!showAppList ? "+" : "-"}
                  </div>
                </div>
              </div>
              {showAppList && (
                <div className={`${classNamePrefix}__collapse-item-body`}>
                  <span
                    className={`${classNamePrefix}__collapse-item-body-title`}
                  >
                    {app.name}
                  </span>
                  {app.pool.map((item: any) => (
                    <div className={`${classNamePrefix}__app-wrapper`} key={item.id}>
                      <div className={`${classNamePrefix}__list-item`}>
                        <ListItem
                          logoUrl={item.logoUrl}
                          leftTitle={item.name}
                          leftSubtitle={item.price}
                          rightTitle={item.value}
                          rightSubtitle={item.quantity}
                          endIcon="bi bi-chevron-right"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
