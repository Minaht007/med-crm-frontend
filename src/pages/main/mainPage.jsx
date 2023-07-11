import React from "react";
import { Link, Outlet } from "react-router-dom";
import Style from "./mainPage.module.scss";

const MainPage = () => {
  return (
    <div className={Style.linkContainer}>
      <Link to="/clientPage">
        <button className={Style.linkButton} type="button">
          <span className={Style.textButton}> If you need help</span>
        </button>
      </Link>

      <Link to="/SignUpForm">
        <button className={Style.linkButton} type="button">
          <span className={Style.textButton}>
            {" "}
            If you can help <br />{" "}
            <span className={Style.textButtonAdd}> (doctors and admins)</span>
          </span>
        </button>
      </Link>

      <Outlet />
    </div>
  );
};

export default MainPage;
