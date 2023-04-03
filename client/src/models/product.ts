export type Rating = {
  rate: string;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};
