import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { ValueContext } from "contexts";
import React from "react";
import { useLocation } from "react-router-dom";
import { API } from "services/API";
import { Container, Body, Image, Title, Description, Rate, ButtonContainer, Price, DetailsProduct } from "./Details.styles";
import { Button, Rating } from "@mui/material";

export const Details: React.FC = () => {
  const location = useLocation();
  const {products, setProducts, countCartProducts} = React.useContext(ValueContext);
  const [productID] = React.useState((Number(location.pathname.split("/").slice(-1)[0])) - 1);
  const [installmentPrice, setInstallmentPrice] = React.useState(0);

  React.useEffect(() => {
    API.get("")
      .then((result) => {
        setProducts(result.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
      setInstallmentPrice((products[productID].price)/10);
  }, []);

  const onAddProductToCartClick = () => {
    countCartProducts(products[productID], "initial");
  };

  return (
    <Container>
      <Header/>
      <Body>
        <Image>
          <img src={products[productID].image} alt={"Image" + {productID}}/>
        </Image>
        <DetailsProduct>
          <Title>{products[productID].title}</Title>
          <Description>{products[productID].description}</Description>
          <Rate>
            <Rating readOnly value={products[productID].rating.rate} size="small"/>
            <Description>{products[productID].rating.count} {(products[productID].rating.count) == 1 ? "disponível" : "disponíveis"}</Description>
          </Rate>
          <Price>R$ {products[productID].price.toFixed(2)} ou 10x de R$ {installmentPrice.toFixed(2)}</Price>
          <Description>Categoria: {products[productID].category.charAt(0).toUpperCase()}{products[productID].category.substring(1)}</Description>
          <ButtonContainer>
            <Button onClick={onAddProductToCartClick}>Adicionar ao carrinho</Button>
          </ButtonContainer>
        </DetailsProduct>
      </Body>
      <Footer/>
    </Container>
  );
};
