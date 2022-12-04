import React, { useState } from "react";
import { Dropdown, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import {
  AccountDetailHistory,
  AccountDetailNft,
  AccountDetailOverview,
} from "../../views";
import "./account-detail.style.scss";

const classNamePrefix = "toto-wui-single-site-account-detail";

export const AccountDetailPage = () => {
  const location = useLocation();

  const data = location.state;

  const [tabSelected, setTabSelected] = useState<any>("overview");

  const renderTabContent = (keys: string) => {
    switch (keys) {
      case "overview":
        return <AccountDetailOverview data={data} />;
      case "nft":
        return <AccountDetailNft />;
      case "history":
        return <AccountDetailHistory />;
      default:
    }
  };

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__header`}>
        <div
          className={`${classNamePrefix}__header-top`}
          style={{ backgroundImage: `url(${data.imageUrl})` }}
        >
          <div className={`${classNamePrefix}__header-top-layer`}></div>
          <div className={`${classNamePrefix}__header-image-wrapper`}>
            <img
              className={`${classNamePrefix}__header-image`}
              src={data.imageUrl}
              alt=""
            />
          </div>

          <div className={`${classNamePrefix}__header-button-group`}>
            <div className={`${classNamePrefix}__header-button follow`}>
              Follow
              <i className="bi bi-person-plus"></i>
            </div>

            <div className={`${classNamePrefix}__header-button send`}>
              Send
              <i className="bi bi-send-fill"></i>
            </div>

            <div className={`${classNamePrefix}__header-button copy`}>
              <Dropdown className={`${classNamePrefix}__dropdown-copy`}>
                <Dropdown.Toggle
                  className={`${classNamePrefix}__dropdown-toggle-copy`}
                >
                  <div className={`${classNamePrefix}__copy-button`}>
                    <i className="bi bi-folder-symlink-fill"></i>
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
            <div className={`${classNamePrefix}__header-info-address-wrapper`}>
              <span>{data.address}</span>
              <div className={`${classNamePrefix}__header-info-address-icon`}>
              <i className="bi bi-files"></i>
              </div>
            </div>
            <div className={`${classNamePrefix}__header-info-social`}>
              <span>
                {data.following.length < 1 ? "0" : data.following} Following
              </span>
              <span>{data.follower} Follower</span>
            </div>
          </div>

          <div className={`${classNamePrefix}__header-net-worth-wrapper`}>
            <div className={`${classNamePrefix}__header-net-worth-title`}>
              <span>Net Worth</span>
              <div className={`${classNamePrefix}__header-net-worth-refresh`}>
              <i className="bi bi-arrow-clockwise"></i>
              </div>
            </div>

            <span>{data.netWorth}</span>
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
                tabSelected === "overview"
                  ? `${classNamePrefix}__body-nav-link-active`
                  : `${classNamePrefix}__body-nav-link`
              }
              eventKey="overview"
            >
              Overview
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={
                tabSelected === "nft"
                  ? `${classNamePrefix}__body-nav-link-active`
                  : `${classNamePrefix}__body-nav-link`
              }
              eventKey="nft"
            >
              NFTs
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={
                tabSelected === "history"
                  ? `${classNamePrefix}__body-nav-link-active`
                  : `${classNamePrefix}__body-nav-link`
              }
              eventKey="history"
            >
              History
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      {renderTabContent(tabSelected)}
    </div>
  );
};
