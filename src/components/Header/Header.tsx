import { Logo } from "components/Logo";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PagesRoutes } from "views/contansts/routes";
import { Container, Menu, SubContainer, TextLink, CartImage, ProfileImage } from "./Header.styles";
import ProfileIcon from "assets/icons/ProfileIcon.svg";
import CartIcon from "assets/icons/CartIcon.svg";
import { ValueContext } from "contexts";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { totalProductsCart } = React.useContext(ValueContext);

  const onCartButtonClick = () => {
    navigate("/cart");
  };

  return (
    <React.Fragment>
      <Container>
        <SubContainer>
          <Box>
            <Logo/>
          </Box>
          <Menu>
            <TextLink to={PagesRoutes.home}>INICIO</TextLink>
            <TextLink to={PagesRoutes.products}>PRODUTOS</TextLink>
            <TextLink to={PagesRoutes.contact}>CONTATO</TextLink>
            <CartImage onClick={onCartButtonClick}>
              <img src={CartIcon} alt="CartIcon"/>
              <Typography>{totalProductsCart < 10 ? "0" : ""}{totalProductsCart}</Typography>
            </CartImage>
            <ProfileImage>
              <img src={ProfileIcon} alt="ProfileIcon"/>
            </ProfileImage>
          </Menu>
        </SubContainer>
      </Container>
    </React.Fragment>
  );
};