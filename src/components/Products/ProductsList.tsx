import React from 'react'
import ProductItem from './ProductItem'
import { Product } from '../../types/common'
import { useSelector } from 'react-redux'
import { AppState } from '../../types/redux'
import Empty from '../UI/Empty'

function ProductsList () {
  const products = useSelector((state: AppState) => state.products.items)

  return (
    <div className={'space-y-4'}>
      {products.length > 0 && products.map((product: Product) => (
        <ProductItem key={product.id} product={product}/>
      ))}

      {products.length === 0 && (
        <Empty>No available items</Empty>
      )}
    </div>
  )
}

export default ProductsList
