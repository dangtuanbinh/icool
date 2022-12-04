import React from "react";
import { ConnectWalletRequired } from "../connect-wallet-required";
import "./defi-detail-holding.style.scss";

const classNamePrefix = "toto-wui-single-site-defi-detail-holding";

export const DefiDetailHolding = () => {
  return (
    <div className={classNamePrefix}>
      <ConnectWalletRequired />
    </div>
  );
};
