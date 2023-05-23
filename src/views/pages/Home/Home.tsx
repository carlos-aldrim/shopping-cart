import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { PageContainer } from "components/PageContainer/PageContainer";
import React from "react";
import { Main, Animation, Text, Logo, OpeningText } from "./Home.styles";
import Lottie from "react-lottie";
import ShoppingCart from "assets/lotties/ShoppingCart.json";
import VectorIcon from "assets/icons/VectorIcon.svg";

export const Home: React.FC = () => {
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
      <Main>
        <Animation>
          <Lottie
            options={defaultOptions}
          />
        </Animation>
        <Text>
          <OpeningText>BEM-VINDO AO</OpeningText>
          <Logo>
            <div>
              <OpeningText>FIRE</OpeningText>
              <OpeningText>STORE</OpeningText>
            </div>
            <img src={VectorIcon} alt="VectorIcon"/>
          </Logo>
        </Text>
      </Main>
      <Footer/>
    </PageContainer>
  );
};