import style from "./mainPage.module.scss";
import * as IMG from "../../images/logo.jpg";

console.log(IMG);

const Header = () => {
  return (
    <div>
      <a href="./mainPage.jsx">
        <img
          className={style.imgLogo}
          src={IMG.default}
          alt="logo"
          width={200}
        />
      </a>
    </div>
  );
};

export default Header;
