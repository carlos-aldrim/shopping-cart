import { Box, Typography } from "@mui/material";
import { Logo } from "components/Logo";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PagesRoutes } from "views/contansts/routes";
import { useStyles } from "./Header.styles";
import ProfileIcon from "assets/icons/ProfileIcon.svg";
import CartIcon from "assets/icons/CartIcon.svg";
import { ValueContext } from "contexts";

export const Header: React.FC = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const { totalProductsCart } = React.useContext(ValueContext);

  const onCartButtonClick = () => {
    navigate("/cart");
  };

  return (
    <React.Fragment>
      <Box className={styles.container}>
        <Box className={styles.subContainer}>
          <Box>
            <Logo/>
          </Box>
          <Box className={styles.menu}>
            <Link className={styles.link} to={PagesRoutes.home}>INICIO</Link>
            <Link className={styles.link} to={PagesRoutes.products}>PRODUTOS</Link>
            <Link className={styles.link} to={PagesRoutes.contact}>CONTATO</Link>
            <Box onClick={onCartButtonClick} className={styles.CartIcon}>
              <img src={CartIcon} alt="CartIcon"/>
              <Typography>{totalProductsCart < 10 ? "0" : ""}{totalProductsCart}</Typography>
            </Box>
            <Box className={styles.profileIcon}>
              <img src={ProfileIcon} alt="ProfileIcon"/>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};