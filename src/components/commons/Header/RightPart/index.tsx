import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";

import "./styles.scss";
import CustomDropdown from "../../CustomDropdown";
import useComponentVisible from "../../../../utils/windowClick";

interface NavigateOptions {
  label: string;
  action: () => void;
}
interface Props {
  handleLogin?: () => void;
  navigateOptions: NavigateOptions[];
  data?: any;
}

const RightPart = ({ handleLogin, navigateOptions, data }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const showDropdown = () => setIsComponentVisible(!isComponentVisible);

  const showLogoutDropdown = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="rightPart" ref={ref}>
      <div className="rightPart__holder" onClick={showDropdown}>
        <Typography className="rightPart__text" style={{ cursor: "pointer" }}>
         Menu
        </Typography>
        <CustomDropdown items={navigateOptions} collapse={isComponentVisible} />
      </div>
    </div>
  );
};

export default RightPart;
