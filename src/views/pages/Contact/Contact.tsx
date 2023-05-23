import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { PageContainer } from "components/PageContainer/PageContainer";
import React from "react";
import { Email, Icons, Info, Main, Phone, SocialNetworks, Subtitle, Title } from "./Contact.styles";
import WhatsappIcon from "assets/icons/WhatsappIcon.svg";
import InstagramIcon from "assets/icons/InstagramIcon.svg";
import FacebookIcon from "assets/icons/FacebookIcon.svg";
import EmailIcon from "assets/icons/EmailIcon.svg";
import PhoneIcon from "assets/icons/PhoneIcon.svg";
import UserIcon from "assets/icons/UserIcon.svg";
import { useNavigate } from "react-router-dom";

export const Contact: React.FC = () => {
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
      <Main>
        <Email>
          <img src={EmailIcon} alt="EmailIcon"/>
          <Title>Email</Title>
          <Subtitle>Tem alguma dúvida?</Subtitle>
          <Info>meajuda@firestone.com.br</Info>
        </Email>
        <Phone>
          <img src={PhoneIcon} alt="PhoneIcon"/>
          <Title>Telefone</Title>
          <Subtitle>Você pode ligar qualquer hora</Subtitle>
          <Info>0800 591 2117</Info>
        </Phone>
        <SocialNetworks>
          <img src={UserIcon} alt="UserIcon"/>
          <Title>Siga-nos</Title>
          <Subtitle>Redes sociais para acompanhamento</Subtitle>
          <Icons>
            <img onClick={onWhatsappButtonClick} src={WhatsappIcon} alt="WhatsappIcon"/>
            <img onClick={onFacebookButtonClick} src={InstagramIcon} alt="InstagramIcon"/>
            <img onClick={onInstagramButtonClick} src={FacebookIcon} alt="FacebookIcon"/>
          </Icons>
        </SocialNetworks>
      </Main>
      <Footer/>
    </PageContainer>
  );
};