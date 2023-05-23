import React from "react";
import IconLogo from "assets/icons/LogoIcon.svg";
import { Container } from "./Footer.styles";

export const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <img src={IconLogo} alt="IconLogo"/>
      </Container>
    </React.Fragment>
  );
};