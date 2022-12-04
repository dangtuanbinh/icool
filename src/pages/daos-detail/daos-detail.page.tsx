import { useState } from "react";
import { Dropdown, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { DaosDetailNft, DaosDetailOverview } from "../../views";
import { DaosDetailMember } from "../../views/daos-detail-member";
import "./daos-detail.style.scss";

const classNamePrefix = "toto-wui-single-site-zapper-daos-detail";

export const DaosDetailPage = () => {
  const location = useLocation();

  const data = location.state;

  const [tabSelected, setTabSelected] = useState<any>("overview");

  const renderTabContent = (keys: string) => {
    switch (keys) {
      case "overview":
        return <DaosDetailOverview data={data} />;
      case "member":
        return <DaosDetailMember />;
      case "nft":
        return <DaosDetailNft />;
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
          <div className={`${classNamePrefix}__header-image-wrapper`}>
            <img
              className={`${classNamePrefix}__header-image`}
              src={data.logoUrl}
              alt=""
            />
          </div>

          <div className={`${classNamePrefix}__header-button-group`}>
            <div className={`${classNamePrefix}__header-button copy`}>
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
              {data.title}
            </span>

            <span className={`${classNamePrefix}__header-info-subtitle`}>
              {data.subTitle}
            </span>
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
                tabSelected === "member"
                  ? `${classNamePrefix}__body-nav-link-active`
                  : `${classNamePrefix}__body-nav-link`
              }
              eventKey="member"
            >
              Members
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
        </Nav>
      </div>

      {renderTabContent(tabSelected)}
    </div>
  );
};
