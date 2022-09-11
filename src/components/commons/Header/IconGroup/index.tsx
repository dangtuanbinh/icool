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
        <FaFacebook size={20} color="#F96D06" />
      </a>
      <a
        href="https://opensea.io/collection/suhosin-official"
        target="_blank"
        rel="noreferrer"
      >
        <RiInstagramFill size={20} color="#F96D06" />
      </a>
      <a
        href="https://twitter.com/SuhosinWorld"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitterSquare size={20} color="#F96D06" />
      </a>
    </div>
  );
};

export default IconGroup;
