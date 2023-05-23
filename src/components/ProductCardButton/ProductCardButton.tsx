import React from "react";
import { Button } from "@mui/material";
import { Description, Footer, Price, ProductInfoContent, SubContainer, Title, Container, Image } from "./ProductCardButton.styles";
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
      <Container>
        <SubContainer onClick={onProductButtonClick}>
          <Image>
            <img src={image} alt="image-product"/>
          </Image>
          <ProductInfoContent>
            <Title>{title.slice(0, 25)}{title.length > 25 ? "..." : ""}</Title>
            <Description>{description.slice(0, 100)}{description.length > 100 ? "..." : ""}</Description>
            <Price>R$ {price?.toFixed(2)} ou 10x de R$ {installmentPrice.toFixed(2)}</Price>
          </ProductInfoContent>
        </SubContainer>
        <Footer>
          <Button onClick={onAddProductToCartClick}>Adicionar ao carrinho</Button>
        </Footer>
      </Container>
    </React.Fragment>
  );
};
