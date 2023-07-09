import React from "react";
import style from "./mainPage.module.scss";
import * as IMG from "../../images/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  // const handleHelpClick = () => {
  //   window.location.assign("../clientPage/pationSelectDoctors.jsx");
  // };
  // const handleCanHelpClick = () => {
  //   window.location.assign("../registry/SignUpForm.jsx");
  // };

  return (
    <>
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
        </div>
      </div>

      <Link to="/clientPage/pationSelectDoctors">
        <button type="button">If you need help</button>
      </Link>

      <Link to="/registry/SignUpForm">
        <button type="button">If you can help doctors and admins</button>
      </Link>

      {/* <button type="click" onClick={handleHelpClick}>
        If you need help
      </button>
      <button type="click" onClick={handleCanHelpClick}>
        If you can help <br /> doctors and admins
      </button> */}
    </>
  );
};

export default Header;
