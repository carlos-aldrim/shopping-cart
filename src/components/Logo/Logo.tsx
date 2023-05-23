import React from "react";
import IconLogo from "assets/icons/LogoIcon.svg";
import { PagesRoutes } from "views/contansts/routes";
import { Container } from "./Logo.styles";

export const Logo: React.FC = () => {
  return (
    <Container to={PagesRoutes.home}>
      <img src={IconLogo} alt="IconLogo"/>
    </Container>
  );
};