import React from "react";
import { ConnectWalletRequired } from "../../views";
import "./profile.style.scss";

const classNamePrefix = "toto-wui-single-site-profile";

export const ProfilePage = () => {
  return (
    <div className={classNamePrefix}>
      <ConnectWalletRequired />
    </div>
  );
};
