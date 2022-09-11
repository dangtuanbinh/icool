import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import IconGroup from "./IconGroup";
import Logo from "./Logo";
import RightPart from "./RightPart";
import "./styles.scss";

const Header = () => {
  const dispatch = useDispatch<any>();
  const navigateToPage = useNavigate();

  const pageNavigate = (link: string) => {
    return navigateToPage(link);
  };

  const options = [
    { label: "Now Showing", action: () => pageNavigate("/") },
    { label: "Up-coming", action: () => pageNavigate("/") },
    { label: "Buy a Ticket", action: () => pageNavigate("/") },
    { label: "Career", action: () => pageNavigate("/") },
    { label: "Contact", action: () => pageNavigate("/") },
  ];

  return (
    <div className="header">
      <div className="header__left">
        <Logo />
        <IconGroup />
      </div>
      <div className="header__right">
        <RightPart
          navigateOptions={options}
        />
      </div>
    </div>
  );
};

export default Header;
