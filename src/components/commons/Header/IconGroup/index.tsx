import "./styles.scss";

import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const IconGroup = () => {
  return (
    <div className="iconGroup">
      <a
        href="https://discord.com/invite/HWk9kqy3Yg"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://opensea.io/collection/suhosin-official"
        target="_blank"
        rel="noreferrer"
      >
        <RiInstagramFill />
      </a>
      <a
        href="https://twitter.com/SuhosinWorld"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitterSquare />
      </a>
    </div>
  );
};

export default IconGroup;
