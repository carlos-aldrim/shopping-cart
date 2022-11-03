import { Box, Button, Rating, Typography } from "@mui/material";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { PageContainer } from "components/PageContainer/PageContainer";
import { ValueContext } from "contexts";
import React from "react";
import { useLocation } from "react-router-dom";
import { API } from "services/API";
import { useStyles } from "./Details.styles";

export const Details: React.FC = () => {
  const styles = useStyles();
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
    <PageContainer className={styles.container}>
      <Header/>
      <Box className={styles.body}>
        <Box className={styles.image}>
          <img src={products[productID].image} alt={"Image" + {productID}}/>
        </Box>
        <Box className={styles.detailsProduct}>
          <Typography className={styles.title}>{products[productID].title}</Typography>
          <Typography className={styles.description}>{products[productID].description}</Typography>
          <Box className={styles.rating}>
            <Rating readOnly value={products[productID].rating.rate} size="small"/>
            <Typography className={styles.description}>{products[productID].rating.count} {(products[productID].rating.count) == 1 ? "disponível" : "disponíveis"}</Typography>
          </Box>
          <Typography className={styles.price}>R$ {products[productID].price.toFixed(2)} ou 10x de R$ {installmentPrice.toFixed(2)}</Typography>
          <Typography className={styles.description}>Categoria: {products[productID].category.charAt(0).toUpperCase()}{products[productID].category.substring(1)}</Typography>
          <Box className={styles.button}>
            <Button onClick={onAddProductToCartClick}>Adicionar ao carrinho</Button>
          </Box>
        </Box>
      </Box>
      <Footer/>
    </PageContainer>
  );
};
