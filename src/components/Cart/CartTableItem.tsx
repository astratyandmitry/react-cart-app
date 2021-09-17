import React from 'react'
import { CartItem } from '../../types/common'
import Counter from '../UI/Counter'
import { useDispatch } from 'react-redux'
import { CartActions } from '../../store/cart.slice'

interface CartTableItemProps {
  item: CartItem;
}

function CartTableItem ({ item }: CartTableItemProps) {
  const dispatch = useDispatch()

  const decreaseHandler = () => {
    dispatch(CartActions.decreaseCount({
      cartItemId: item.id,
    }))
  }

  const increaseHandler = () => {
    dispatch(CartActions.increaseCount({
      cartItemId: item.id,
    }))
  }

  const removeHandler = () => {
    dispatch(CartActions.removeItem({
      cartItemId: item.id,
    }))
  }

  return (
    <tr className={'border-t group'}>
      <td className={'p-4'}>
        <div className={'font-medium'}>
          {item.product.name}
        </div>
        <div className={'text-sm'}>
          ${item.product.price * item.quantity}

          <span className={'ml-2 italic text-gray-500'}>
            (${item.product.price} per item)
          </span>
        </div>
      </td>
      <td>
        <Counter
          value={item.quantity}
          maxValue={item.product.quantity}
          onDecrease={decreaseHandler}
          onIncrease={increaseHandler}
        />

        <button
          className={'opacity-0 group-hover:opacity-100 text-gray-400 text-xs hover:text-red-600'}
          onClick={removeHandler}
        >
          Remove item
        </button>
      </td>
    </tr>
  )
}

export default CartTableItem
