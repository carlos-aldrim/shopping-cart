import { Box, Skeleton } from "@mui/material";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { PageContainer } from "components/PageContainer/PageContainer";
import { ProductCardButton } from "components/ProductCardButton";
import { ValueContext } from "contexts/value";
import React from "react";
import { API } from "services/API";
import { useStyles } from "./Products.styles";

export const Products: React.FC = () => {
  const styles = useStyles();
  const { products, setProducts } = React.useContext(ValueContext);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    API.get("")
      .then((result) => {
        setProducts(result.data);
        setLoading(true);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <PageContainer className={styles.container}>
      <Header/>
      {
        loading ? (
          <Box className={styles.productsList}>
            {products.map((item) => (
              <ProductCardButton
                product={item}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                id={item.id}
                rate={item.rating.rate}
              />
            ))}
          </Box>
        ) : (
          <Box className={styles.loading}>
            <Skeleton className={styles.skeleton} variant="rectangular" width={"100%"} height={444}/>
            <Skeleton className={styles.skeleton} variant="rectangular" width={"100%"} height={444}/>
            <Skeleton className={styles.skeleton} variant="rectangular" width={"100%"} height={444}/>
            <Skeleton className={styles.skeleton} variant="rectangular" width={"100%"} height={444}/>
          </Box>
        )
      }
      <Footer/>
    </PageContainer>
  );
};
