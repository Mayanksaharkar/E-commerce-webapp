export type CartItem = {
  product: product;
  qty: number;
  _id: string;
  createdAt: "string";
  updatedAt: "string";
};
export type product = {
  _id: string;
  title: string;
  price: "string";
  cover_img: string;
};

export type CartItems = CartItem[];
