import { createSlice } from '@reduxjs/toolkit'
import { CartAddItemAction, CartDefaultAction, CartState } from '../types/redux'
import { CartItem } from '../types/common'

const STATE: CartState = {
  totalQuantity: 1,
  items: [
    {
      id: 'c1',
      quantity: 10,
      product: {
        id: 'p3',
        name: 'Third product',
        description: 'About third product',
        price: 125.50,
        quantity: 100
      },
    }
  ],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: STATE,
  reducers: {
    addItem (state: CartState, action: CartAddItemAction): CartState {
      let existedItem = state.items.find((item: CartItem) => item.product.id === action.payload.product.id)

      if (existedItem) {
        const updatedQuantity = existedItem.quantity + action.payload.quantity

        existedItem.quantity = updatedQuantity > action.payload.product.quantity
          ? action.payload.product.quantity
          : updatedQuantity
      } else {
        state.items.push({
          id: `c-${Math.random()}`,
          ...action.payload,
        })

        state.totalQuantity++
      }

      return state
    },
    removeItem (state: CartState, action: CartDefaultAction): CartState {
      state.items = state.items.filter((item: CartItem) => item.id !== action.payload.cartItemId)

      state.totalQuantity--

      return state
    },
    decreaseCount (state: CartState, action: CartDefaultAction): CartState {
      let existedItem = state.items.find((item: CartItem) => item.id === action.payload.cartItemId)

      if (existedItem) {
        if (existedItem.quantity > 1) {
          existedItem.quantity--
        }
      }

      return state
    },
    increaseCount (state: CartState, action: CartDefaultAction): CartState {
      let existedItem = state.items.find((item: CartItem) => item.id === action.payload.cartItemId)

      if (existedItem && existedItem.quantity < existedItem.product.quantity) {
        existedItem.quantity++
      }

      return state
    },
  }
})

export const CartActions = cartSlice.actions

export default cartSlice.reducer
