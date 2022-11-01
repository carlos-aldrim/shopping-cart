import { Box, Button, Typography } from "@mui/material";
import { ValueContext } from "contexts";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./ProductCart.styles";

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
  const styles = useStyles();
  const navigate = useNavigate();
  const {products, countCartProducts} = React.useContext(ValueContext);
  const productList = [...products];
  const findProduct = productList.find((item) => item.id === id);

  const onProductCartButtonClick = () => {
    navigate("/products/" + id);
  };
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
      <Box className={styles.container}>
        <Box onClick={onProductCartButtonClick} className={styles.productCartInfo}>
          <Box className={styles.image}>
            <img src={image} alt={image}/>
          </Box>
          <Box className={styles.texts}>
            <Typography className={styles.title}>{title}</Typography>
            <Typography className={styles.price}>R$ {price.toFixed(2)}</Typography>
          </Box>
        </Box>
        <Box className={styles.countButtons}>
          <Button onClick={onDecreaseCountButtonClick}>-</Button>
          <Typography>{count < 10 ? "0" : ""}{count}</Typography>
          <Button onClick={onIncreaseCountButtonClick}>+</Button>
        </Box>
        <Box className={styles.popButton}>
          <Button onClick={onPopProductButtonClick}>x</Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};