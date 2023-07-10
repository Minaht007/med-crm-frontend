import React from "react";

import { Link, Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <Link to="/clientPage">
        <button type="button">If you need help</button>
      </Link>

      <Link to="/SignUpForm">
        <button type="button">
          If you can help <br /> doctors and admins
        </button>
      </Link>

      <Outlet />
    </>
  );
};

export default MainPage;
