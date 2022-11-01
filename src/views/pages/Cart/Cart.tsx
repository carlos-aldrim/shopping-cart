import { Box, Button, Typography, Skeleton } from "@mui/material";
import { Header } from "components/Header";
import { PageContainer } from "components/PageContainer/PageContainer";
import { ProductCart } from "components/ProductCart";
import { ValueContext } from "contexts";
import React from "react";
import { useStyles } from "./Cart.styles";
import { useNavigate } from "react-router-dom";
import { Footer } from "components/Footer";

export const Cart: React.FC = () => {
  const styles = useStyles();
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
            <Typography className={styles.title}>Seu carrinho</Typography>
            <Box className={styles.cart}>
              <Box className={styles.productCard}>
                {cart.map((item) => (
                    <ProductCart
                      id={item.id}
                      image={item.image}
                      price={item.price}
                      title={item.title}
                      count={item.count}
                    />
                ))}
              </Box>
              {cart.length === 0 ? "" : (
                <Box className={styles.purchaseInformation}>
                    <Box className={styles.textGroupSeparator}>
                      <Box>
                        <Box className={styles.textsRow}>
                          <Typography className={styles.definitions}>Desconto:</Typography>
                          <Typography className={styles.strong}>R$ 0.00</Typography>
                        </Box>
                        <Box className={styles.textsRow}>
                          <Typography className={styles.definitions}>Frete:</Typography>
                          <Typography className={styles.strong}>- R$ 0.00</Typography>
                        </Box>
                      </Box>
                      <Box className={styles.valueContainer}>
                        <Box className={styles.textsRow}>
                          <Typography className={styles.definitions}>Quantidade:</Typography>
                          <Typography className={styles.strong}>{totalProductsCart}</Typography>
                        </Box>
                        <Box className={styles.textsRow}>
                          <Typography className={styles.definitions}>Total:</Typography>
                          <Typography className={styles.strong}>R$ {cartTotalValue.toFixed(2)}</Typography>
                        </Box>
                        <Button onClick={onMakePurchaseButtonClick}>Realizar compra</Button>
                      </Box>
                    </Box>
                </Box>
              )}
            </Box>
          </Box>
        ) : (
          <Box className={styles.titleIndividual}>
            <Typography>Seu carrinho</Typography>
          </Box>
        )
      }
      <Footer/>
    </PageContainer>
  );
};