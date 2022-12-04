import { ConnectWalletRequired } from "../connect-wallet-required";
import "./nft-portfolio.style.scss";

const classNamePrefix = "toto-wui-single-site-nft-portfolio";

export const NftPortfolio = () => {
  return (
    <div className={classNamePrefix}>
      <ConnectWalletRequired />
    </div>
  );
};
