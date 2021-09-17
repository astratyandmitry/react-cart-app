import { CartItem, Product } from './common'

export interface AppState {
  products: ProductsState;
  cart: CartState;
  ui: UIState;
}

// CartTable

export interface CartState {
  items: CartItem[];
  totalQuantity: number;
}

export interface CartAddItemAction {
  payload: {
    product: Product,
    quantity: number;
  }
}

export interface CartDefaultAction {
  payload: {
    cartItemId: string;
  }
}

// Products

export interface ProductsState {
  items: Product[];
}

// UI

export interface UIState {
  cartIsVisible: boolean;
}
