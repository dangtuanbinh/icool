import { useState } from "react";

import "./styles.scss";

const Tabs = () => {
  const [isFirstTabSelected, setIsFirstTabSelected] = useState(false);
  const [isSecondTabSelected, setIsSecondTabSelected] = useState(false);

  const handleNowPlaying = () => {
    setIsFirstTabSelected(!isFirstTabSelected);
    setIsSecondTabSelected(false);
  };

  const handleTopRated = () => {
    setIsSecondTabSelected(!isSecondTabSelected);
    setIsFirstTabSelected(false);
  };
  return (
    <div className="tabs">
      <div className="tabs__label">
        <div
          className="tabs__item"
          onClick={handleNowPlaying}
          style={{ color: isFirstTabSelected ? "#f96d10" : "#000000" }}
        >
          <p>Now Playing</p>
        </div>
        <p>|</p>
        <div
          className="tabs__item"
          onClick={handleTopRated}
          style={{ color: isSecondTabSelected ? "#f96d10" : "#000000" }}
        >
          <p>Top Rated</p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
