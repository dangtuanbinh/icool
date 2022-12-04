import { useState } from "react";
import { Nav } from "react-bootstrap";
import { SearchBar, SingleNft, StyledTab } from "../../components";
import { NetworkMock, TopSaleNftMock } from "../../mocks";
import "./account-detail-nft.style.scss";

const classNamePrefix = "toto-wui-single-site-zapper-account-detail-nft";

const tabMock = [
  {
    id: 1,
    title: "Single",
  },
  {
    id: 1,
    title: "Collection",
  },
];

export const AccountDetailNft = () => {
  const [networkSelected, setNetworkSelected] = useState<string>(
    NetworkMock[0].name
  );
  const [tabSelected, setTabSelected] = useState<string>(tabMock[0].title);

  return (
    <div className={classNamePrefix}>
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
              <Nav.Link className={`${classNamePrefix}__network-nav-link`}>
                <img
                  className={`${classNamePrefix}__network-nav-logo`}
                  src={item.logoUrl}
                  alt=""
                />
                <span>{item.name}</span>
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>

      <div className={`${classNamePrefix}__toolbar`}>
        <div className={`${classNamePrefix}__tab`}>
          <StyledTab
            tabs={tabMock}
            tabSelected={tabSelected}
            setTabSelected={setTabSelected}
          />
        </div>

        <div className={`${classNamePrefix}__search-bar`}>
          <SearchBar placeholder="Filter by Collection" />
        </div>
      </div>

      <div className={`${classNamePrefix}__body`}>
        <span>{TopSaleNftMock.length} results</span>

        <div className={`${classNamePrefix}__nft-list`}>
          {TopSaleNftMock.map((item) => (
            <SingleNft data={item}/>
          ))}
        </div>
      </div>
    </div>
  );
};
