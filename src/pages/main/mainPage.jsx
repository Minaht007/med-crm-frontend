import React from "react";
import style from "./mainPage.module.scss";
import * as IMG from "../../images/logo.jpg";
import { Link } from "react-router-dom";

const MainPage = () => {
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

      <Link to="/SignUpForm">
        <button type="button">If you need help</button>
      </Link>

      <Link to="/clientPage">
        <button type="button">If you can help doctors and admins</button>
      </Link>
    </>
  );
};

export default MainPage;
