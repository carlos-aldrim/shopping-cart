import { Button, Typography } from "@mui/material";
import { ValueContext } from "contexts";
import React from "react";
import { CountButtons, PopButton, Price, ProductCartInfo, Texts, Title, Container, Image } from "./ProductCart.styles";

interface ProductCartProps {
  id: number;
  image: string;
  price: number;
  title: string;
  count: number;
};

export const ProductCart: React.FC<ProductCartProps> = ({
  id,
  image,
  price,
  title,
  count,
}) => {
  const {products, countCartProducts} = React.useContext(ValueContext);
  const productList = [...products];
  const findProduct = productList.find((item) => item.id === id);

  const onIncreaseCountButtonClick = () => {
    countCartProducts(findProduct, "increase");
  };
  const onDecreaseCountButtonClick = () => {
    countCartProducts(findProduct, "decrease");
  };
  const onPopProductButtonClick = () => {
    countCartProducts(findProduct, "remove");
  };

  return (
    <React.Fragment>
      <Container>
        <ProductCartInfo>
          <Image>
            <img src={image} alt={image}/>
          </Image>
          <Texts>
            <Title>{title}</Title>
            <Price>R$ {price.toFixed(2)}</Price>
          </Texts>
        </ProductCartInfo>
        <CountButtons>
          <Button onClick={onDecreaseCountButtonClick}>-</Button>
          <Typography>{count < 10 ? "0" : ""}{count}</Typography>
          <Button onClick={onIncreaseCountButtonClick}>+</Button>
        </CountButtons>
        <PopButton>
          <Button onClick={onPopProductButtonClick}>x</Button>
        </PopButton>
      </Container>
    </React.Fragment>
  );
};