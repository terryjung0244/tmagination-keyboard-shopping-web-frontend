export interface IProduct {
  category: string;
  createdAt: string;
  desc: string;
  discountRate: string;
  features: {
    color: string[];
    switch: string[];
  };
  id: string;
  cartId: string;
  imagePath: string;
  imageUrl: string;
  name: string;
  quantity?: string | number;
  price: string;
  stock: string;
  updatedAt: string;
}

export interface IProductResponse {
  message: string;
  result: IProduct[];
}
