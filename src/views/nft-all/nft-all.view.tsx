import { CustomPagination } from "../../components";
import { ConnectWalletRequired } from "../connect-wallet-required";
import "./nft-all.style.scss";

const classNamePrefix = "toto-wui-single-site-nft-all";

export const NftAll = () => {
  return (
    <div className={classNamePrefix}>
      <ConnectWalletRequired />

      <div className={`${classNamePrefix}__pagination-wrapper`}>
        <div className={`${classNamePrefix}__pagination`}>
          <CustomPagination currentPage={1} maxPage={2} />
        </div>
      </div>
    </div>
  );
};
