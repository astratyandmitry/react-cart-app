import React, { useState } from 'react'
import { Product } from '../../types/common'
import Counter from '../UI/Counter'
import { useDispatch } from 'react-redux'
import { CartActions } from '../../store/cart.slice'

interface ProductItemCartProps {
  product: Product;
}

function ProductItemCart ({ product }: ProductItemCartProps) {
  const [quantity, setQuantity] = useState(1)

  const decreaseHandler = () => {
    if (quantity > 1) {
      setQuantity((prevState => prevState - 1))
    }
  }

  const increaseHandler = () => {
    if (quantity < product.quantity) {
      setQuantity((prevState => prevState + 1))
    }
  }

  const dispatch = useDispatch()
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(CartActions.addItem({
      product: product,
      quantity: quantity,
    }))

    setQuantity(1)
  }

  return (
    <form onSubmit={submitHandler}>
      <Counter
        value={quantity}
        maxValue={product.quantity}
        onIncrease={increaseHandler}
        onDecrease={decreaseHandler}
      />

      <button
        className={'mt-2 bg-blue-500 hover:bg-blue-600 text-white rounded block p-1 w-full text-sm'}
        type="submit"
      >
        Add to Cart
      </button>
    </form>
  )
}

export default ProductItemCart
