export interface ProductInfo {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
  rating: {
    count: number;
    rate: number;
  };
};

export interface ProductCartInfo {
  id: number;
  title: string;
  image: string;
  price: number;
  count: number;
};