import React from "react";
import style from "./header.module.scss";
import * as IMG from "../../images/logo.jpg";

const Header = () => {
  return (
    <div className="container">
      <div className={style.headerTitle}>
        <a href="/">
          <img
            className={style.imgLogo}
            src={IMG.default}
            alt="logo"
            width={200}
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
