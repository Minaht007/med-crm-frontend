import style from "./mainPage.module.scss";
import * as IMG from "../../images/logo.jpg";
import HeaderNav from "../../comonents/headerNavigation/headerNav";

const Header = () => {
  return (
    <div className="container">
      <div className={style.headerTitle}>
        <a href="./mainPage.jsx">
          <img
            className={style.imgLogo}
            src={IMG.default}
            alt="logo"
            width={200}
          />
        </a>
        <HeaderNav />
      </div>
    </div>
  );
};

export default Header;
