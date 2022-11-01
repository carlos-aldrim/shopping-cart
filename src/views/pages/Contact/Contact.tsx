import { Box, Typography } from "@mui/material";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { PageContainer } from "components/PageContainer/PageContainer";
import React from "react";
import { useStyles } from "./Contact.styles";
import WhatsappIcon from "assets/icons/WhatsappIcon.svg";
import InstagramIcon from "assets/icons/InstagramIcon.svg";
import FacebookIcon from "assets/icons/FacebookIcon.svg";
import EmailIcon from "assets/icons/EmailIcon.svg";
import PhoneIcon from "assets/icons/PhoneIcon.svg";
import UserIcon from "assets/icons/UserIcon.svg";
import { useNavigate } from "react-router-dom";

export const Contact: React.FC = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  const onWhatsappButtonClick = () => {
    navigate("#");
  };
  const onFacebookButtonClick = () => {
    navigate("#");
  };
  const onInstagramButtonClick = () => {
    navigate("#");
  };

  return (
    <PageContainer>
      <Header/>
      <Box className={styles.main}>
        <Box className={styles.email}>
          <img src={EmailIcon} alt="EmailIcon"/>
          <Typography className={styles.title}>Email</Typography>
          <Typography className={styles.subtitle}>Tem alguma dúvida?</Typography>
          <Typography className={styles.info}>meajuda@firestone.com.br</Typography>
        </Box>
        <Box className={styles.phone}>
          <img src={PhoneIcon} alt="PhoneIcon"/>
          <Typography className={styles.title}>Telefone</Typography>
          <Typography className={styles.subtitle}>Você pode ligar qualquer hora</Typography>
          <Typography className={styles.info}>0800 591 2117</Typography>
        </Box>
        <Box className={styles.socialNetworks}>
          <img src={UserIcon} alt="UserIcon"/>
          <Typography className={styles.title}>Siga-nos</Typography>
          <Typography className={styles.subtitle}>Redes sociais para acompanhamento</Typography>
          <Box className={styles.icons}>
            <img onClick={onWhatsappButtonClick} src={WhatsappIcon} alt="WhatsappIcon"/>
            <img onClick={onFacebookButtonClick} src={InstagramIcon} alt="InstagramIcon"/>
            <img onClick={onInstagramButtonClick} src={FacebookIcon} alt="FacebookIcon"/>
          </Box>
        </Box>
      </Box>
      <Footer/>
    </PageContainer>
  );
};