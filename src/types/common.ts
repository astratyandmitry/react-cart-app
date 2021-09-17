export interface Model {
  id: string;
}

export interface Product extends Model {
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export interface CartItem extends Model {
  product: Product;
  quantity: number;
}
