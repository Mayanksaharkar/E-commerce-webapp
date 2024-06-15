export type desc = {
  title: string;
  description: string;
};
export type specInfo = {
  spec_title: string;
  spec_body: string;
};

export type spec = {
  title: string;
  spec_row_list: specInfo[];
};

export type Product = {
  _id: string;
  title: string;
  category: string;
  brand: string;
  link: string;
  price: number;
  rating: number;
  desc_short: string[];
  cover_img: string;
  img_list: string[];
  desc_long: desc[];
  specification: spec[];
};

export type Products = Product[];
