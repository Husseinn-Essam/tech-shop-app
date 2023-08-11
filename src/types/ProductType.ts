interface ProductType {
  _id: string;
  name: string;
  description?: string;
  price: number;
  rating: number;
  stock: number;
  categories?: string[];
  images?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export default ProductType;
