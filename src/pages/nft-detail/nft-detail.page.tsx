import { useState } from "react";
import { Dropdown, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import {
  NftDetailActivity,
  NftDetailExplore,
  NftDetailOwners,
} from "../../views";
import "./nft-detail.style.scss";

const classNamePrefix = "toto-wui-single-site-zapper-nft-detail";

export const NftDetailPage = () => {
  const location = useLocation();

  const data = location.state;

  const [tabSelected, setTabSelected] = useState<any>("explore");

  const renderTabContent = (keys: string) => {
    switch (keys) {
      case "explore":
        return <NftDetailExplore data={data} />;
      case "activity":
        return <NftDetailActivity />;
      case "owners":
        return <NftDetailOwners />;
      default:
    }
  };

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__header`}>
        <div
          className={`${classNamePrefix}__header-top`}
          style={{ backgroundImage: `url(${data.logoUrl})` }}
        >
          <div className={`${classNamePrefix}__header-top-layer`}></div>
          <div className={`${classNamePrefix}__header-info-container`}>
            <div className={`${classNamePrefix}__header-image-wrapper`}>
              <img
                className={`${classNamePrefix}__header-image`}
                src={data.logoUrl}
                alt=""
              />
            </div>

            <div
              className={`${classNamePrefix}__header-info-wrapper responsive`}
            >
              <span className={`${classNamePrefix}__header-info-name`}>
                {data.name}
              </span>
              <div className={`${classNamePrefix}__header-info-desc-wrapper`}>
                <span>{data.desc}</span>
              </div>
            </div>

            <div className={`${classNamePrefix}__header-statistic-wrapper`}>
              <div className={`${classNamePrefix}__header-statistic`}>
                <div className={`${classNamePrefix}__header-statistic-title`}>
                  # Holders
                </div>
                <div
                  className={`${classNamePrefix}__header-statistic-subtitle`}
                >
                  {data.holders}
                </div>
              </div>

              <div
                className={`${classNamePrefix}__header-statistic floor-price`}
              >
                <div className={`${classNamePrefix}__header-statistic-title`}>
                  Floor Price
                </div>
                <div
                  className={`${classNamePrefix}__header-statistic-subtitle`}
                >
                  {data.floorPrice}
                </div>
              </div>

              <div className={`${classNamePrefix}__header-statistic`}>
                <div className={`${classNamePrefix}__header-statistic-title`}>
                  24h Volume
                </div>
                <div
                  className={`${classNamePrefix}__header-statistic-subtitle`}
                >
                  {data.volume}
                </div>
              </div>

              <div className={`${classNamePrefix}__header-statistic`}>
                <div className={`${classNamePrefix}__header-statistic-title`}>
                  Networks
                </div>
                <div
                  className={`${classNamePrefix}__header-statistic-subtitle`}
                >
                  {data.network}
                </div>
              </div>
            </div>
          </div>

          <div className={`${classNamePrefix}__header-button-group`}>
            <div className={`${classNamePrefix}__header-button`}>
              <Dropdown className={`${classNamePrefix}__dropdown-copy`}>
                <Dropdown.Toggle
                  className={`${classNamePrefix}__dropdown-toggle-copy`}
                >
                  <div className={`${classNamePrefix}__copy-button`}>
                    <i className="bi bi-three-dots"></i>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu
                  className={`${classNamePrefix}__dropdown-menu`}
                ></Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>

        <div className={`${classNamePrefix}__header-bottom`}>
          <div className={`${classNamePrefix}__header-info-wrapper`}>
            <span className={`${classNamePrefix}__header-info-name`}>
              {data.name}
            </span>
            <div className={`${classNamePrefix}__header-info-desc-wrapper`}>
              <span>{data.desc}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`${classNamePrefix}__body`}>
        <Nav
          className={`${classNamePrefix}__body-nav`}
          activeKey={tabSelected}
          onSelect={(selectedKey: any) => setTabSelected(selectedKey)}
        >
          <Nav.Item className={`${classNamePrefix}__body-nav-item`}>
            <Nav.Link
              className={
                tabSelected === "explore"
                  ? `${classNamePrefix}__body-nav-link-active`
                  : `${classNamePrefix}__body-nav-link`
              }
              eventKey="explore"
            >
              Explore
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={
                tabSelected === "activity"
                  ? `${classNamePrefix}__body-nav-link-active`
                  : `${classNamePrefix}__body-nav-link`
              }
              eventKey="activity"
            >
              Activity
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={
                tabSelected === "owners"
                  ? `${classNamePrefix}__body-nav-link-active`
                  : `${classNamePrefix}__body-nav-link`
              }
              eventKey="owners"
            >
              Owners
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      {renderTabContent(tabSelected)}
    </div>
  );
};
