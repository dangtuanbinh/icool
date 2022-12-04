import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ListItem } from "../../components";
import { AccountSlider } from "../../components/account-slider";
import { DaosSlider } from "../../components/daos-slider/daos-slider.component";
import { DefiSlider } from "../../components/defi-slider";
import {
  AccountCollectionMock,
  DaosCollectionMock,
  DefiCollectionMock,
  NftCollection,
  NftCollectionMock,
} from "../../mocks";

import "./home.style.scss";

const classNamePrefix = "toto-wui-single-site-zapper-home-page";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__carousel`}>
        <Carousel fade controls={false} indicators={false} interval={3000}>
          {NftCollectionMock.map((item) => (
            <Carousel.Item
              className={`${classNamePrefix}__carousel-item`}
              key={item.id}
            >
              <div
                className={`${classNamePrefix}__carousel-image`}
                style={{ backgroundImage: `url(${item.logoUrl})` }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        <div className={`${classNamePrefix}__carousel-layer`}>
          <Carousel
            className={`${classNamePrefix}__carousel-layer-inner`}
            fade
            controls={false}
            indicators={false}
            interval={3000}
            slide={false}
          >
            {NftCollectionMock.map((item) => (
              <Carousel.Item
                className={`${classNamePrefix}__carousel-layer-item`}
                key={item.id}
              >
                <div
                  className={`${classNamePrefix}__carousel-layer-item-wrapper`}
                >
                  <div className={`${classNamePrefix}__carousel-layer-text`}>
                    <div className={`${classNamePrefix}__carousel-layer-title`}>
                      Explore {item.name}
                    </div>
                    <div className={`${classNamePrefix}__carousel-layer-desc`}>
                      Zapper is your home to Web3. Track your wallets. Follow
                      other wallets. Discover NFTs, DAOs, DeFi...
                    </div>

                    <div
                      className={`${classNamePrefix}__carousel-layer-button`}
                    >
                      Connect Wallet
                    </div>
                  </div>

                  <div
                    className={`${classNamePrefix}__carousel-layer-image-wrapper`}
                  >
                    <div
                      className={`${classNamePrefix}__carousel-layer-image`}
                      style={{ backgroundImage: `url(${item.logoUrl})` }}
                    />

                    <div
                      className={`${classNamePrefix}__carousel-layer-image-info`}
                    >
                      <div
                        className={`${classNamePrefix}__carousel-layer-info-item`}
                      >
                        <div
                          className={`${classNamePrefix}__carousel-layer-info-title`}
                        >
                          {item.network}
                        </div>
                        <div
                          className={`${classNamePrefix}__carousel-layer-info-title floor-price-text`}
                        >
                          floor
                        </div>
                      </div>

                      <div
                        className={`${classNamePrefix}__carousel-layer-info-item`}
                      >
                        <div
                          className={`${classNamePrefix}__carousel-layer-info-name`}
                        >
                          {item.name}
                        </div>
                        <div
                          className={`${classNamePrefix}__carousel-layer-info-text floor-price-text`}
                        >
                          {item.floorPrice}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>

      <div className={`${classNamePrefix}__trending-nft`}>
        <div className={`${classNamePrefix}__trending-nft-title`}>
          <div className={`${classNamePrefix}__trending-nft-title-left`}>
            Trending NFT Collections
          </div>
          <div
            className={`${classNamePrefix}__trending-nft-title-right`}
            onClick={() => navigate("/nft/")}
          >
            View all
          </div>
        </div>

        <div className={`${classNamePrefix}__trending-nft-list-header-wrapper`}>
          <div className={`${classNamePrefix}__trending-nft-list-header`}>
            <span>Name</span>
            <span>Volume</span>
          </div>

          <div className={`${classNamePrefix}__trending-nft-list-header second-header`}>
            <span>Name</span>
            <span>Volume</span>
          </div>
        </div>

        <div className={`${classNamePrefix}__trending-nft-list-wrapper`}>
          {NftCollectionMock.map((item: NftCollection) => (
            <div className={`${classNamePrefix}__list-item`}>
              <ListItem
                rank={item.id}
                logoUrl={item.logoUrl}
                leftTitle={item.name}
                leftSubtitle={`Floor ${item.floorPrice}`}
                rightTitle={item.volume}
                rightSubtitle="-1.4%"
              />
            </div>
          ))}
        </div>
      </div>

      <AccountSlider title="Popular Accounts" data={AccountCollectionMock} />

      <DaosSlider title="Discovery DAOs" data={DaosCollectionMock} />

      <DefiSlider title="Discovery DeFi" data={DefiCollectionMock} />
    </div>
  );
};
