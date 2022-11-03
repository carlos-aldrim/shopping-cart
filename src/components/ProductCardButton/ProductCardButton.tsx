import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useStyles } from "./ProductCardButton.styles";
import StarIcon from "assets/icons/StarIcon.svg";
import { useNavigate } from "react-router-dom";
import { ProductInfo } from "services/Interface";
import { ValueContext } from "contexts/value";

interface ProductCardButtonProps {
  id: number;
  image: string;
  price: number;
  title: string;
  description: string;
  rate: number;
  product: ProductInfo;
};

export const ProductCardButton: React.FC<ProductCardButtonProps> = ({
  id,
  image,
  title,
  description,
  price,
  rate,
  product,
}) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [installmentPrice, setiInstallmentPrice] = React.useState(0);
  const {countCartProducts} = React.useContext(ValueContext);

  React.useEffect(() => {
    setiInstallmentPrice(price/10);
  });

  const onProductButtonClick = () => {
    navigate("/products/" + id);
  };

  const onAddProductToCartClick = () => {
    countCartProducts(product, "initial");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <React.Fragment>
      <Box className={styles.container}>
        <Box className={styles.subContainer} onClick={onProductButtonClick}>
          <Box className={styles.image}>
            <img src={image} alt="image-product"/>
          </Box>
          <Box className={styles.productInfo}>
            <Typography className={styles.title}>{title.slice(0, 25)}{title.length > 25 ? "..." : ""}</Typography>
            <Typography className={styles.description}>{description.slice(0, 100)}{description.length > 100 ? "..." : ""}</Typography>
            <Typography className={styles.price}>R$ {price?.toFixed(2)} ou 10x de R$ {installmentPrice.toFixed(2)}</Typography>
          </Box>
        </Box>
        <Box className={styles.footer}>
          <Button onClick={onAddProductToCartClick}>Adicionar ao carrinho</Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};
