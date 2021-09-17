import { createSlice } from '@reduxjs/toolkit'
import { ProductsState } from '../types/redux'

const STATE: ProductsState = {
  items: [
    {
      id: 'p1',
      name: 'First product',
      description: 'About first product',
      price: 36.50,
      quantity: 10
    },
    {
      id: 'p2',
      name: 'Second product',
      description: 'About second product',
      price: 1000.00,
      quantity: 0
    },
    {
      id: 'p3',
      name: 'Third product',
      description: 'About third product',
      price: 125.50,
      quantity: 100
    },
    {
      id: 'p4',
      name: 'Fourth product',
      description: 'About fourth product',
      price: 9.99,
      quantity: 3,
    },
  ]
}

const productsSlice = createSlice({
  name: 'products',
  initialState: STATE,
  reducers: {},
})

export default productsSlice.reducer
