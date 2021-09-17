import React from 'react'
import ProductItemCart from './ProductItemCart'
import { Product } from '../../types/common'

interface ProductItemProps {
  product: Product;
}

function ProductItem ({ product }: ProductItemProps) {
  return (
    <div className={'bg-white rounded flex items-center justify-between p-4'}>
      <div className={'flex-grow'}>
        <div className={'text-lg font-medium'}>
          {product.name} for <span className={'text-green-600'}>${product.price}</span>
        </div>

        <div className={'text-sm text-gray-500'}>
          {product.description}
        </div>
      </div>

      <div className={'ml-4'}>
        {product.quantity > 0 && (
          <ProductItemCart product={product}/>
        )}

        {product.quantity === 0 && (
          <div className={'bg-yellow-100 text-yellow-700 text-center p-2 px-8 rounded leading-snug text-xs font-medium'}>
            No items <br/> in stock
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductItem
