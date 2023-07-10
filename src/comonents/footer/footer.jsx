import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  const navigateHome = () => {
    navigate("/pages/main/mainPage.jsx");
  };

  return (
    <div>
      <button onClick={navigateBack}>Go Back</button>
      <button onClick={navigateHome}>Go Home</button>
    </div>
  );
};

export default Footer;
