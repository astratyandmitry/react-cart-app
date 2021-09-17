import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UIActions } from '../../store/ui.slice'
import { AppState } from '../../types/redux'

function HeaderBasketButton () {
  const countProducts = useSelector((state: AppState) => state.cart.totalQuantity)

  const dispatch = useDispatch()
  const toggleHandler = () => dispatch(UIActions.toggleCardVisibility())

  return (
    <button
      type="button" onClick={toggleHandler}
      className={'border border-blue-500 text-blue-500 px-3 py-1 rounded inline-flex items-center hover:bg-blue-600 hover:border-blue-600 hover:text-white'}
    >
      <span>My Cart</span>
      <span
        className={'w-5 h-5 ml-2 bg-red-500 text-xs font-medium inline-flex items-center justify-center rounded-full text-white'}>
        {countProducts}
      </span>
    </button>
  )
}

export default HeaderBasketButton
