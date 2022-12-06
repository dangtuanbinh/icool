import { ConnectWalletRequired } from "../connect-wallet-required";
import { INftDetailActivityProps } from "./nft-detail-activity.type";
import "./nft-detail-activity.style.scss";
import { SearchBar, StyledTab } from "../../components";
import { useState } from "react";
import { NftActivityMock } from "../../mocks";

const classNamePrefix = "toto-wui-single-site-zapper-nft-detail-activity";

const rangeMock = [
  {
    id: 1,
    title: "1W",
  },
  {
    id: 2,
    title: "1M",
  },
  {
    id: 3,
    title: "3M",
  },
];

const tabMock = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Following",
  },
];

const tableHeaderMock = [
  {
    id: 1,
    title: "Item",
  },
  {
    id: 2,
    title: "From",
  },
  {
    id: 3,
    title: "To",
  },
  {
    id: 4,
    title: "Price",
  },
  {
    id: 5,
    title: "",
  },
];

export const NftDetailActivity = (props: INftDetailActivityProps) => {
  const { data } = props;

  const [rangeSelected, setRangeSelected] = useState<string>(
    rangeMock[0].title
  );
  const [tabSelected, setTabSelected] = useState<string>(tabMock[0].title);

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__toolbar`}>
        <div className={`${classNamePrefix}__toolbar-percent`}>+6%</div>
        <div className={`${classNamePrefix}__toolbar-range`}>
          <StyledTab
            tabs={rangeMock}
            tabSelected={rangeSelected}
            setTabSelected={setRangeSelected}
          />
        </div>
      </div>

      <div className={`${classNamePrefix}__chart-title`}>
        Median Price Change ({rangeSelected})
      </div>

      <div className={`${classNamePrefix}__chart`}></div>

      <div className={`${classNamePrefix}__list`}>
        <div className={`${classNamePrefix}__list-toolbar`}>
          <div className={`${classNamePrefix}__list-search-bar`}>
            <SearchBar placeholder="Filter by account or token ID" />
          </div>

          <div className={`${classNamePrefix}__list-tab`}>
            <StyledTab
              tabs={tabMock}
              tabSelected={tabSelected}
              setTabSelected={setTabSelected}
            />
          </div>
        </div>

        <div className={`${classNamePrefix}__list-table`}>
          <div className={`${classNamePrefix}__list-table-header`}>
            <div className={`${classNamePrefix}__list-table-header-item`}>
              Item{" "}
            </div>

            <div className={`${classNamePrefix}__list-table-header-item from`}>
              From
            </div>

            <div className={`${classNamePrefix}__list-table-header-item to`}>
              To
            </div>

            <div className={`${classNamePrefix}__list-table-header-item price`}>
              Price
            </div>
          </div>

          <div className={`${classNamePrefix}__list-table-body`}>
            {NftActivityMock.map((item: any) => (
              <div
                className={`${classNamePrefix}__list-table-body-item-wrapper`} key={item.id}
              >
                <div className={`${classNamePrefix}__list-table-item`}>
                  <div
                    className={`${classNamePrefix}__list-table-item-nft-image`}
                  >
                    <img src={item.item.logoUrl} alt="" />
                  </div>
                  <div
                    className={`${classNamePrefix}__list-table-item-horizontal-text`}
                  >
                    <span
                      className={`${classNamePrefix}__list-table-item-horizontal-title`}
                    >
                      {item.item.code}
                    </span>
                    <span
                      className={`${classNamePrefix}__list-table-item-horizontal-subtitle`}
                    >
                      {item.item.timestamp}
                    </span>
                  </div>
                </div>

                <div className={`${classNamePrefix}__list-table-item sendFrom`}>
                  <div className={`${classNamePrefix}__list-table-item-image`}>
                    <img src={item.sendFrom.logoUrl} alt="" />
                  </div>

                  <span className={`${classNamePrefix}__list-table-item-name`}>
                    {item.sendFrom.name}
                  </span>
                </div>

                <div className={`${classNamePrefix}__list-table-item receivedBy`}>
                  <div className={`${classNamePrefix}__list-table-item-image`}>
                    <img src={item.receivedBy.logoUrl} alt="" />
                  </div>

                  <span className={`${classNamePrefix}__list-table-item-name`}>
                    {item.receivedBy.name}
                  </span>
                </div>

                <div className={`${classNamePrefix}__list-table-item-price`}>
                  <div
                    className={`${classNamePrefix}__list-table-item-horizontal-text price-text`}
                  >
                    <span
                      className={`${classNamePrefix}__list-table-item-horizontal-title`}
                    >
                      {item.value.price}
                    </span>
                    <span
                      className={`${classNamePrefix}__list-table-item-horizontal-subtitle`}
                    >
                      {item.value.total}
                    </span>
                  </div>

                  <a
                    className={`${classNamePrefix}__list-table-item-icon`}
                    href="https://etherscan.io/tx/0xe03cdfef66ac8f4e470df424e4878b1c7b2906a9ec48fecf114f4b90b7f36529"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-arrow-up-right-square"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
