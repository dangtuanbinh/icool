import React from "react";
import { ConnectWalletRequired } from "../../views";
import "./bridge.style.scss";

const classNamePrefix = "toto-wui-single-site-bridge";

export const BridgePage = () => {
  return (
    <div className={classNamePrefix}>
      <ConnectWalletRequired />
    </div>
  );
};
