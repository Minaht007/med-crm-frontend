import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "./footer.module.scss";

const Footer = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className={Style.footerContainer}>
      <button className={Style.buttonFoot} onClick={navigateBack}>
        Go Back
      </button>
      <button className={Style.buttonFoot} onClick={navigateHome}>
        Go Home
      </button>
    </div>
  );
};

export default Footer;
