import "./single-nft.style.scss";
import { ISingleNftProps } from "./single-nft.type";

const classNamePrefix = "toto-wui-single-site-zapper-single-nft";

export const SingleNft: React.FC<ISingleNftProps> = (props) => {
  const { data, type } = props;

  return (
    <div
      className={
        type === "collection"
          ? `${classNamePrefix}__collection-item`
          : classNamePrefix
      }
    >
      <div
        className={`${classNamePrefix}__image`}
        style={{
          backgroundImage:
            type === "collection"
              ? `url(${data.imgUrl})`
              : `url(${data.nftUrl})`,
        }}
      ></div>

      <div className={`${classNamePrefix}__logo-wrapper`}>
        <img
          className={`${classNamePrefix}__logo`}
          src={type === "collection" ? data.imgUrl : data.logoUrl}
          alt=""
        />
      </div>

      <div
        className={
          type === "collection"
            ? `${classNamePrefix}__collection-text-wrapper`
            : `${classNamePrefix}__text-wrapper`
        }
      >
        <div
          className={
            type === "collection"
              ? `${classNamePrefix}__collection-title`
              : `${classNamePrefix}__title`
          }
        >
          {type === "collection"
            ? `# ${data.id}`
            : `${data.code} - ${data.name}`}

          {data.lastValue && (
            <div className={`${classNamePrefix}__last-value`}>
              <span>Last</span> {data.lastValue}
            </div>
          )}
        </div>
        <div className={`${classNamePrefix}__subtitle`}>
          <div
            className={
              type === "collection"
                ? `${classNamePrefix}__collection-subtitle-wrapper`
                : `${classNamePrefix}__subtitle-wrapper`
            }
          >
            {type === "collection" ? (
              <span className={`${classNamePrefix}__estimate-value-label`}>
                Est. Value
              </span>
            ) : (
              <span className={`${classNamePrefix}__top-sale-label`}>
                Top Sale
              </span>
            )}
           
            <span className={`${classNamePrefix}__subtitle-content`}>
              {type === "collection" ? data.estValue : data.lastPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
