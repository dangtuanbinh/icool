import React from "react";
import "./connect-wallet-required.style.scss";

const classNamePrefix = "connect-wallet-required";

export const ConnectWalletRequired = () => {
  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__container`}>
        <div className={`${classNamePrefix}__icon-wrapper`}>
          <i className="bi bi-wallet-fill" />
          <div className={`${classNamePrefix}__icon-close`}>x</div>
        </div>
        <div className={`${classNamePrefix}__title`}>No Wallet Connected</div>
        <div className={`${classNamePrefix}__subtitle`}>
          Get started by connecting your wallet.
        </div>
        <div className={`${classNamePrefix}__button`}>Connect Wallet</div>
        <a
          className={`${classNamePrefix}__link`}
          href="https://zapperfi.zendesk.com/hc/en-us/articles/7762343912209-How-do-I-connect-a-wallet-to-Zapper-"
          target="_blank"
          rel="noreferrer"
        >
          How to setup a wallet?
        </a>
      </div>
    </div>
  );
};
