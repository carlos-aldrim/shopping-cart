import React from "react";
import { Link } from "react-router-dom";
import IconLogo from "assets/icons/LogoIcon.svg";
import { PagesRoutes } from "views/contansts/routes";
import { useStyles } from "./Logo.styles";

export const Logo: React.FC = () => {
  const styles = useStyles();

  return (
    <Link to={PagesRoutes.home} className={styles.container}>
      <img src={IconLogo} alt="IconLogo"/>
    </Link>
  );
};