import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { ProductCardButton } from "components/ProductCardButton";
import { ValueContext } from "contexts/value";
import React from "react";
import { API } from "services/API";
import { Container, ProductsList, Loading, CardLoading } from "./Products.styles";

export const Products: React.FC = () => {
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
    <Container>
      <Header/>
      {
        loading ? (
          <ProductsList>
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
          </ProductsList>
        ) : (
          <Loading>
            <CardLoading variant="rectangular" width={"100%"} height={444}/>
            <CardLoading variant="rectangular" width={"100%"} height={444}/>
            <CardLoading variant="rectangular" width={"100%"} height={444}/>
            <CardLoading variant="rectangular" width={"100%"} height={444}/>
          </Loading>
        )
      }
      <Footer/>
    </Container>
  );
};
