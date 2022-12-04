import "./single-nft.style.scss";
import { ISingleNftProps } from "./single-nft.type";

const classNamePrefix = "toto-wui-single-site-zapper-single-nft";

export const SingleNft: React.FC<ISingleNftProps> = (props) => {
  const { data } = props;

  return (
    <div className={classNamePrefix}>
      <div
        className={`${classNamePrefix}__image`}
        style={{ backgroundImage: `url(${data.nftUrl})` }}
      ></div>

      <div className={`${classNamePrefix}__logo-wrapper`}>
        <img className={`${classNamePrefix}__logo`} src={data.logoUrl} alt="" />
      </div>

      <div className={`${classNamePrefix}__text-wrapper`}>
        <div className={`${classNamePrefix}__title`}>
          {data.code} - {data.name}
        </div>
        <div className={`${classNamePrefix}__subtitle`}>
          <div className={`${classNamePrefix}__estimate`}>
            <span className={`${classNamePrefix}__estimate-label`}>
              Top Sale
            </span>
            <span className={`${classNamePrefix}__estimate-content`}>
              {data.lastPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
