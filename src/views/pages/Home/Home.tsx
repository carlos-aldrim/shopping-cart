import { Box, Typography } from "@mui/material";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { PageContainer } from "components/PageContainer/PageContainer";
import React from "react";
import { useStyles } from "./Home.styles";
import Lottie from "react-lottie";
import ShoppingCart from "assets/lotties/ShoppingCart.json";
import VectorIcon from "assets/icons/VectorIcon.svg";

export const Home: React.FC = () => {
  const styles = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ShoppingCart,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <PageContainer>
      <Header/>
      <Box className={styles.main}>
        <Box className={styles.animation}>
          <Lottie
            options={defaultOptions}
          />
        </Box>
        <Box className={styles.text}>
          <Typography className={styles.openingText}>BEM-VINDO AO</Typography>
          <Box className={styles.logo}>
            <Box>
              <Typography className={styles.openingText}>FIRE</Typography>
              <Typography className={styles.openingText}>STORE</Typography>
            </Box>
            <img src={VectorIcon} alt="VectorIcon"/>
          </Box>
        </Box>
      </Box>
      <Footer/>
    </PageContainer>
  );
};