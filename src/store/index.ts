import { configureStore } from '@reduxjs/toolkit'

import ProductsReducer from './products.slice'
import CartReducer from './cart.slice'
import UIReducer from './ui.slice'

const store = configureStore({
  reducer: {
    products: ProductsReducer,
    cart: CartReducer,
    ui: UIReducer,
  },
})

export default store
