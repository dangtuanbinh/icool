import React from "react";
import { ConnectWalletRequired } from "../../views";
import "./swap.style.scss";

const classNamePrefix = "toto-wui-single-site-swap";

export const SwapPage = () => {
  return (
    <div className={classNamePrefix}>
      <ConnectWalletRequired />
    </div>
  );
};
