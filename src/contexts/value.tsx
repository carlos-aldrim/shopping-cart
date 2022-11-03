import React from "react";
import { ProductInfo } from "services/Interface";
import { ProductCartInfo } from "services/Interface";

interface ValueContext {
  products: ProductInfo[];
  setProducts: React.Dispatch<React.SetStateAction<ProductInfo[]>>;
  cart: ProductCartInfo[];
  setCart: React.Dispatch<React.SetStateAction<ProductCartInfo[]>>;
  countCartProducts: (product: ProductInfo | undefined, finality: "increase" | "decrease" | "initial" | "remove") => void;
  totalProductsCart: number;
  cartTotalValue: number;
};

interface ValueProviderProps {
  children: React.ReactNode;
};

export const ValueContext = React.createContext({} as (ValueContext));

export const ValueProvider: React.FC<ValueProviderProps> = ({children}) => {
  const [products, setProducts] = React.useState<ProductInfo[]>([]);
  const [cart, setCart] = React.useState<ProductCartInfo[]>([]);
  const totalProductsCart = cart.reduce((total, product) => total = total + product.count, 0);
  const cartTotalValue = parseFloat(cart.reduce((total, product) => total = total + (product.price * product.count), 0).toFixed(2));
  const [launcher, setLauncher] = React.useState(false);

  React.useEffect(() => {
    if(!launcher) {
      setLauncher(true);
      const cartString = localStorage.getItem("cart");
      if(cartString !== "[]" && cartString !== null) {
        const cartObj = JSON.parse(cartString);
        setCart(cartObj);
      }
    }
  });

  const countCartProducts = (product: ProductInfo | undefined, finality: "increase" | "decrease" | "initial" | "remove") => {
    const cartProducts = [...cart];
    if(product === undefined) {
      return undefined;
    }
    else {
      const findProduct = cartProducts.find((item) => item.id === product.id);
      switch(finality) {
        case "initial":
          if (!findProduct) {
            cartProducts.push({
              id: product.id,
              title: product.title,
              image: product.image,
              price: product.price,
              count: 1,
            });
            setCart(cartProducts);
            localStorage.setItem("cart", JSON.stringify(cartProducts));
          }
          break;
        case "increase":
          cartProducts.map((item) => {
            if((item.id === product.id) && (product.rating.count > item.count)) {
              item.count++;
            };
            setCart(cartProducts);
            localStorage.setItem("cart", JSON.stringify(cart));
          });
          break;
        case "decrease":
          cartProducts.map((item) => {
            if((item.id === product.id) && (item.count > 1)) {
              item.count--;
            };
            setCart(cartProducts);
            localStorage.setItem("cart", JSON.stringify(cart));
          });
          break;
        case "remove":
          const productToRemove = cartProducts.filter((item) => item.id !== product.id);
          setCart(productToRemove);
          localStorage.setItem("cart", JSON.stringify(productToRemove));
          break;
        default:
          break;
      }
    }
  };

  return (
    <ValueContext.Provider value={{
      products,
      setProducts,
      cart,
      setCart,
      countCartProducts,
      totalProductsCart,
      cartTotalValue
    }}>
      {children}
    </ValueContext.Provider>
  );
};