import { useState } from "react";
import { Dropdown, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { DefiDetailExplore, DefiDetailHolding } from "../../views";
import "./defi-detail.style.scss";

const classNamePrefix = "toto-wui-single-site-zapper-defi-detail";

export const DefiDetailPage = () => {
  const location = useLocation();

  const data = location.state;

  const [tabSelected, setTabSelected] = useState<any>("explore");

  const renderTabContent = (keys: string) => {
    switch (keys) {
      case "explore":
        return <DefiDetailExplore data={data} />;
      case "holdings":
        return <DefiDetailHolding />;
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
            <div className={`${classNamePrefix}__header-statistic-wrapper`}>
              <div className={`${classNamePrefix}__header-statistic`}>
                <div className={`${classNamePrefix}__header-statistic-title`}>
                  TIV
                  <i className="bi bi-info-circle"></i>
                </div>
                <div
                  className={`${classNamePrefix}__header-statistic-subtitle`}
                >
                  {data.tiv}
                </div>
              </div>

              <div className={`${classNamePrefix}__header-statistic`}>
                <div className={`${classNamePrefix}__header-statistic-title`}>
                  Networks
                </div>
                <div
                  className={`${classNamePrefix}__header-statistic-subtitle`}
                >
                  {data.networks.length}
                </div>
              </div>
            </div>
          </div>

          <div className={`${classNamePrefix}__header-button-group`}>
            <div className={`${classNamePrefix}__header-button follow`}>
              <i className="bi bi-person-plus"></i>
            </div>

            <div className={`${classNamePrefix}__header-button link`}>
              <i className="bi bi-link"></i>
            </div>

            <div className={`${classNamePrefix}__header-button request`}>
              <Dropdown className={`${classNamePrefix}__dropdown-copy`}>
                <Dropdown.Toggle
                  className={`${classNamePrefix}__dropdown-toggle-copy`}
                >
                  <div className={`${classNamePrefix}__copy-button`}>
                    <i className="bi bi-flag-fill"></i>
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
                tabSelected === "holdings"
                  ? `${classNamePrefix}__body-nav-link-active`
                  : `${classNamePrefix}__body-nav-link`
              }
              eventKey="holdings"
            >
              Holdings
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      {renderTabContent(tabSelected)}
    </div>
  );
};
