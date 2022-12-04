import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { FlexDataList, ListItem } from "../../components";
import "./account-detail-overview.style.scss";
import { IAccountDetailOverviewProps } from "./account-detail-overview.type";

const classNamePrefix = "toto-wui-single-site-account-detail-overview";

export const AccountDetailOverview = (props: IAccountDetailOverviewProps) => {
  const { data } = props;

  const { wallet, network, nft, apps, daoMembership } = data;

  const [filterBalance, setFilterBalance] = useState<number | string>(0.01);

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__toolbar`}>
        <Dropdown className={`${classNamePrefix}__dropdown-network`}>
          <Dropdown.Toggle
            className={`${classNamePrefix}__dropdown-toggle-network`}
          >
            <div className={`${classNamePrefix}__network-button`}>
              <span>All Networks</span>
              <i className="bi bi-chevron-down" />
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu
            className={`${classNamePrefix}__dropdown-menu-network`}
          >
            <ListItem
              leftTitle="All network"
              icon="bi bi-grid"
              rightTitle="$2.3M"
            />
            {network.map((item: any) => (
              <ListItem
                key={item.id}
                logoUrl={item.logoUrl}
                leftTitle={item.name}
                rightTitle="$2.3M"
              />
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className={`${classNamePrefix}__dropdown-filter`}>
          <Dropdown.Toggle
            className={`${classNamePrefix}__dropdown-toggle-filter`}
          >
            <div className={`${classNamePrefix}__filter-button`}>
              <span>above {filterBalance ? filterBalance : "0.01"}</span>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu className={`${classNamePrefix}__dropdown-menu-filter`}>
            <span className={`${classNamePrefix}__filter-title`}>
              Only Show Balances Above
            </span>
            <div className={`${classNamePrefix}__filter-input-group`}>
              <input
                className={`${classNamePrefix}__filter-input`}
                value={filterBalance}
                onChange={(e) => setFilterBalance(e.target.value)}
                placeholder="1.00"
              />
              <span className={`${classNamePrefix}__filter-currency`}>USD</span>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className={`${classNamePrefix}__body`}>
        <div className={`${classNamePrefix}__collapse-group`}>

          <FlexDataList dataType="wallet-data" data={wallet} />

          <FlexDataList dataType="nft-data" data={nft} />

          <FlexDataList dataType="app-data" data={apps} />
        </div>

        <div className={`${classNamePrefix}__portfolio`}>
          <div className={`${classNamePrefix}__portfolio-item`}>
            <span className={`${classNamePrefix}__portfolio-item-header`}>
              Portfolio Breakdown
            </span>

            <div className={`${classNamePrefix}__portfolio-claimable`}>
              <ListItem leftTitle="Claimable" rightTitle="$85.5" />
            </div>

            <div className={`${classNamePrefix}__portfolio-bar-container`}>
              <div className={`${classNamePrefix}__portfolio-bar-item`}>
                <div className={`${classNamePrefix}__portfolio-bar-title`}>
                  NFTs
                </div>

                <div className={`${classNamePrefix}__portfolio-bar`}>
                  <div
                    className={`${classNamePrefix}__portfolio-bar-layer nft-layer`}
                  ></div>
                </div>

                <div className={`${classNamePrefix}__portfolio-bar-percent`}>
                  90.75%
                </div>
              </div>

              <div className={`${classNamePrefix}__portfolio-bar-item`}>
                <div className={`${classNamePrefix}__portfolio-bar-title`}>
                  Wallet
                </div>

                <div className={`${classNamePrefix}__portfolio-bar`}>
                  <div
                    className={`${classNamePrefix}__portfolio-bar-layer wallet-layer`}
                  ></div>
                </div>

                <div className={`${classNamePrefix}__portfolio-bar-percent`}>
                  9.75%
                </div>
              </div>

              <div className={`${classNamePrefix}__portfolio-bar-item`}>
                <div className={`${classNamePrefix}__portfolio-bar-title`}>
                  LooksRare
                </div>

                <div className={`${classNamePrefix}__portfolio-bar`}>
                  <div
                    className={`${classNamePrefix}__portfolio-bar-layer app-layer`}
                  ></div>
                </div>
                <div className={`${classNamePrefix}__portfolio-bar-percent`}>
                  0.75%
                </div>
              </div>
            </div>
          </div>

          <div className={`${classNamePrefix}__portfolio-item`}>
            <span className={`${classNamePrefix}__portfolio-item-header`}>
              DAO Memberships
            </span>

            <div className={`${classNamePrefix}__portfolio-item-body`}>
              {daoMembership.map((item: any) => (
                <div className={`${classNamePrefix}__list-item`}>
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
                <div className={`${classNamePrefix}__list-item`}>
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
