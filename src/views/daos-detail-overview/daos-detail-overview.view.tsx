import React from "react";
import { FlexDataList, ListItem } from "../../components";
import { AccountCollectionMock } from "../../mocks";
import { IDaosDetailOverviewProps } from "./daos-detail-oveerview.type";
import "./daos-detail-overview.style.scss";

const classNamePrefix = "toto-wui-single-site-daos-detail-overview";

export const DaosDetailOverview: React.FC<IDaosDetailOverviewProps> = (
  props
) => {
  const { data } = props;

  const { wallet, nft, apps, daoMembership,netWorth} = data;

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__body`}>
        <div className={`${classNamePrefix}__collapse-group`}>
          <div className={`${classNamePrefix}__header-net-worth-wrapper`}>
            <div className={`${classNamePrefix}__header-net-worth-title`}>
              <span>Net Worth</span>
              <div className={`${classNamePrefix}__header-net-worth-refresh`}>
                <i className="bi bi-arrow-clockwise"></i>
              </div>
            </div>

            <span>{netWorth}</span>
          </div>

          <FlexDataList dataType="wallet-data" data={wallet} />

          <FlexDataList dataType="nft-data" data={nft} />

          <FlexDataList dataType="app-data" data={apps} />
        </div>

        <div className={`${classNamePrefix}__portfolio`}>
          <div className={`${classNamePrefix}__portfolio-item`}>
            <span className={`${classNamePrefix}__portfolio-item-header`}>
              Treasury Addresses
            </span>

            {AccountCollectionMock.slice(0, 5).map((item: any) => (
              <div
                className={`${classNamePrefix}__portfolio-treasury-item`}
                key={item.id}
              >
                <ListItem logoUrl={item.imageUrl} leftTitle={item.name} />
              </div>
            ))}
          </div>

          <div className={`${classNamePrefix}__portfolio-item`}>
            <span className={`${classNamePrefix}__portfolio-item-header`}>
              Related NFT Collections
            </span>

            <div className={`${classNamePrefix}__portfolio-item-body`}>
              {daoMembership.map((item: any) => (
                <div className={`${classNamePrefix}__list-item`} key={item.id}>
                  <ListItem
                    key={item.id}
                    logoUrl={item.logoUrl}
                    leftTitle={item.name}
                    rightTitle={item.quantity}
                    rightSubtitle={item.share}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={`${classNamePrefix}__portfolio-item`}>
            <span className={`${classNamePrefix}__portfolio-item-header`}>
              App Holdings
            </span>

            <div className={`${classNamePrefix}__portfolio-item-body`}>
              {apps.map((item: any) => (
                <div className={`${classNamePrefix}__list-item`} key={item.id}>
                  <ListItem
                    key={item.id}
                    logoUrl={item.logoUrl}
                    leftTitle={item.name}
                    leftSubtitle={item.network}
                    rightTitle={item.balance}
                    rightSubtitle="1 position"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
