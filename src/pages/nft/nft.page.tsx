import { useState } from "react";
import { Nav } from "react-bootstrap";
import { NftSlider, StyledTab } from "../../components";
import { NetworkMock, NftCollectionMock, TopSaleNftMock } from "../../mocks";
import { NftAll, NftPortfolio } from "../../views";
import "./nft.style.scss";

const classNamePrefix = "toto-wui-single-site-nft";

const segmentTabMock = [
  { id: 1, title: "All" },
  { id: 2, title: "Portfolio" },
];

const timeRangeMock = [
  { id: 1, title: "1H" },
  { id: 2, title: "1D" },
  { id: 3, title: "7D" },
  { id: 4, title: "30D" },
];

export const NftPage = () => {
  const [networkSelected, setNetworkSelected] = useState<string>(
    NetworkMock[0].name
  );

  const [segmentTabSelected, setSegmentTabSelected] = useState<any>(
    segmentTabMock[0].title
  );
  const [timeRangeSelected, setTimeRangeSelected] = useState<any>(
    timeRangeMock[0].title
  );

  const renderTabContent = (keys: string) => {
    switch (keys) {
      case "All":
        return <NftAll />;
      case "Portfolio":
        return <NftPortfolio />;

      default:
    }
  };

  const headerBackgroundColor = NetworkMock.find(
    (item) => item.name === networkSelected
  )?.color;

  const networkTitle = NetworkMock.find(
    (item) => item.name === networkSelected
  )?.name;

  return (
    <div className={classNamePrefix}>
      <div
        className={`${classNamePrefix}__header`}
        style={{ background: `${headerBackgroundColor}` }}
      >
        <div className={`${classNamePrefix}__network-toolbar`}>
          <Nav
            className={`${classNamePrefix}__network-nav`}
            activeKey={networkSelected}
            onSelect={(selectedKey: any) => setNetworkSelected(selectedKey)}
          >
            {NetworkMock.map((item: any) => (
              <Nav.Item
                className={`${classNamePrefix}__network-nav-item`}
                key={item.id}
              >
                <Nav.Link
                  className={`${classNamePrefix}__network-nav-link`}
                  style={{
                    background: networkSelected === item.name ? `#ffffff` : "",
                    color:
                      networkSelected === item.name
                        ? `${headerBackgroundColor}`
                        : "",
                    fontWeight: networkSelected === item.name ? "bold" : "",
                  }}
                  eventKey={item.name}
                >
                  <span>{item.name}</span>
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>

        <div className={`${classNamePrefix}__network-title`}>
          <span>Explore NFTs on {networkTitle}</span>
        </div>

        <div className={`${classNamePrefix}__header-layer`}></div>
      </div>

      <div className={`${classNamePrefix}__slider`}>
        <NftSlider title="Top Sales by Collection" data={TopSaleNftMock} />
      </div>

      <div className={`${classNamePrefix}__navbar-container`}>
        <div className={`${classNamePrefix}__navbar-left`}>
          <StyledTab
            tabs={segmentTabMock}
            tabSelected={segmentTabSelected}
            setTabSelected={setSegmentTabSelected}
          />
        </div>

        <div className={`${classNamePrefix}__navbar-right`}>
          <StyledTab
            tabs={timeRangeMock}
            tabSelected={timeRangeSelected}
            setTabSelected={setTimeRangeSelected}
          />
        </div>
      </div>

      {renderTabContent(segmentTabSelected)}
    </div>
  );
};
