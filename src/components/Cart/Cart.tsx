import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../types/redux'
import CartTable from './CartTable'
import Empty from '../UI/Empty'

function Cart () {
  const countProducts = useSelector((state: AppState) => state.cart.totalQuantity)

  return (
    <div>
      {countProducts > 0 && (
        <CartTable/>
      )}

      {countProducts === 0 && (
        <Empty>Your Cart is empty</Empty>
      )}
    </div>
  )
}

export default Cart
