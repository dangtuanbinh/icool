import { useState } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  CustomPagination,
  ListItem,
  NetworkDropdown,
  SearchBar,
} from "../../components";
import { DefiSlider } from "../../components/defi-slider";
import { DefiCollectionMock, NetworkMock } from "../../mocks";
import "./defi.style.scss";

const classNamePrefix = "toto-wui-single-site-defi";

export const DefiPage = () => {
  const navigate = useNavigate();

  const [networkSelected, setNetworkSelected] = useState<string>(
    NetworkMock[0].name
  );

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
          <span>Explore DeFi on {networkTitle}</span>
        </div>

        <div className={`${classNamePrefix}__header-layer`}></div>
      </div>

      <div className={`${classNamePrefix}__slider`}>
        <DefiSlider
          title="Discovery the latest apps"
          data={DefiCollectionMock}
        />
      </div>

      <div className={`${classNamePrefix}__body`}>
        <div className={`${classNamePrefix}__text-group`}>
          <span className={`${classNamePrefix}__body-title`}>TIV Rankings</span>
          <span className={`${classNamePrefix}__body-subtitle`}>
            Not seeing an app? Integrate its TIV via
            <a
              className={`${classNamePrefix}__body-subtitle-link`}
              href="https://studio.zapper.fi/"
              target="_blank"
              rel="noreferrer"
            >
              {" Zapper Studio!"}
            </a>  
          </span> 
        </div>

        <div className={`${classNamePrefix}__toolbar`}>
          <div className={`${classNamePrefix}__search-bar`}>
            <SearchBar placeholder="Filter by token" />
          </div>

          <div className={`${classNamePrefix}__network-dropdown`}>
            <NetworkDropdown />
          </div>

          <div className={`${classNamePrefix}__pagination`}>
            <CustomPagination currentPage={1} maxPage={6} />
          </div>
        </div>

        <div className={`${classNamePrefix}__list`}>
          <div className={`${classNamePrefix}__list-title`}>
            <span className={`${classNamePrefix}__rank-title`}>#</span>
            <div className={`${classNamePrefix}__list-app-name`}>
              App
              <i className="bi bi-chevron-expand"></i>
            </div>
            <div className={`${classNamePrefix}__list-tiv`}>
              TIV
              <i className="bi bi-info-circle"></i>
              <i className="bi bi-chevron-expand"></i>
            </div>
          </div>

          <div className={`${classNamePrefix}__list-container`}>
            {DefiCollectionMock.map((item: any) => (
              <div
                className={`${classNamePrefix}__list-item`}
                key={item.id}
                onClick={() => navigate("/defi/" + item.name, { state: item })}
              >
                <ListItem
                  rank={item.id}
                  logoUrl={item.logoUrl}
                  leftTitle={item.name}
                  rightTitle={item.tiv}
                />
              </div>
            ))}
          </div>

          <div className={`${classNamePrefix}__pagination-wrapper`}>
            <CustomPagination currentPage={1} maxPage={6} />
          </div>
        </div>
      </div>
    </div>
  );
};
