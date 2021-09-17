import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../types/redux'
import { CartItem } from '../../types/common'
import CartTableItem from './CartTableItem'
import _ from 'lodash'

function CartTable () {
  const items = useSelector((state: AppState) => state.cart.items)

  const htmlThClasses = 'text-left text-gray-500 text-sm font-medium uppercase px-4 py-2'

  const itemsTotalAmount = _.sum(items.map((item: CartItem) => {
    return item.quantity * item.product.price
  }))

  return (
    <table className={'table bg-white w-full mb-8 rounded'}>
      <thead>
      <tr>
        <th className={htmlThClasses}>Product</th>
        <th className={`${htmlThClasses} w-56`}>Count</th>
      </tr>
      </thead>
      <tbody>
      {items.map((item: CartItem) => (
        <CartTableItem key={item.id} item={item}/>
      ))}
      </tbody>
      <tfoot>
      <tr>
        <th colSpan={2} className={`${htmlThClasses} border-t`}>
          Total {items.length} items for ${itemsTotalAmount}
        </th>
      </tr>
      </tfoot>
    </table>
  )
}

export default CartTable
