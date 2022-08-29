import { Link } from "react-router-dom";
import logoImg from "../../images/adimera.png";
import Avatar from "@mui/material/Avatar";
import { useMediaQuery } from "react-responsive";
const Logo = () => {
  //logo-mobile
      const showButtom = useMediaQuery({ query: "(max-width: 576px)" });
  return (
    <Link to={"/"}>
      <div className={showButtom ? "logo-mobile" : "logo"}>
        <Avatar alt="Remy Shap" src={logoImg} sx={{ width: 70, height: 70 }} />
        <div className="text" style={{ textAlign: "center" }}>
          Miso<div> Body Works</div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
