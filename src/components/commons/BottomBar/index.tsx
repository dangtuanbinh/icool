import "./styles.scss";

import { Typography } from "antd";
import IconGroup from "../Header/IconGroup";

const BottomBar = () => {
  return (
    <div className="bottomBar">
      <div className="bottomBar__left">
        <div className="bottomBar__logo">
          <img
            src={require("../../../assets/logo.png")}
            className="bottomBar__logo__image"
            alt="Suhosin logo"
          />
        </div>
        <div className="bottomBar__text">
          <Typography>Term of use</Typography>
          <Typography>ⓒ 2022 RobinDang All rights reserved.</Typography>
        </div>
      </div>
      <div className="bottomBar__right">
        <IconGroup />
      </div>
    </div>
  );
};

export default BottomBar;
