import { useNavigate, Link } from "react-router-dom";

import "./styles.scss";

const Logo = () => {
  const navigate = useNavigate();

  const toHome = () => navigate("/");

  return (
    <div className="logo" onClick={toHome}>
      <Link to="/">
        <img src={require("../../../../assets/logo.png")} alt="Logo" className="logo__image" />
      </Link>
    </div>
  );
};

export default Logo;
