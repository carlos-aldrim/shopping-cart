import { Box, Button, Typography } from "@mui/material";
import { Header } from "components/Header";
import { PageContainer } from "components/PageContainer/PageContainer";
import { ProductCart } from "components/ProductCart";
import { ValueContext } from "contexts";
import React from "react";
import { Definitions, PurchaseInformation, Strong, TextGroupSeparator, TextsRow, Title, ValueContainer, CartContent, CardProduct, TitleIndividual } from "./Cart.styles";
import { useNavigate } from "react-router-dom";
import { Footer } from "components/Footer";

export const Cart: React.FC = () => {
  const navigate = useNavigate();
  const {cart, cartTotalValue, totalProductsCart} = React.useContext(ValueContext);

  const onMakePurchaseButtonClick = () => {
    navigate("#");
  };

  return (
    <PageContainer>
      <Header />
      {
        cart.length !== 0 ? (
          <Box>
            <Title>Seu carrinho</Title>
            <CartContent>
              <CardProduct>
                {cart.map((item) => (
                  <ProductCart
                    id={item.id}
                    image={item.image}
                    price={item.price}
                    title={item.title}
                    count={item.count}
                  />
                ))}
              </CardProduct>
              {cart.length === 0 ? "" : (
                <PurchaseInformation>
                  <TextGroupSeparator>
                    <Box>
                      <TextsRow>
                        <Definitions>Desconto:</Definitions>
                        <Strong>R$ 0.00</Strong>
                      </TextsRow>
                      <TextsRow>
                        <Definitions>Frete:</Definitions>
                        <Strong>- R$ 0.00</Strong>
                      </TextsRow>
                    </Box>
                    <ValueContainer>
                      <TextsRow>
                        <Definitions>Quantidade:</Definitions>
                        <Strong>{totalProductsCart < 10 ? "0" : ""}{totalProductsCart}</Strong>
                      </TextsRow>
                      <TextsRow>
                        <Definitions>Total:</Definitions>
                        <Strong>R$ {cartTotalValue.toFixed(2)}</Strong>
                      </TextsRow>
                      <Button onClick={onMakePurchaseButtonClick}>Realizar compra</Button>
                    </ValueContainer>
                  </TextGroupSeparator>
                </PurchaseInformation>
              )}
            </CartContent>
          </Box>
        ) : (
          <TitleIndividual>
            <Typography>Seu carrinho</Typography>
          </TitleIndividual>
        )
      }
      <Footer/>
    </PageContainer>
  );
};