import React from 'react'
import ProductsTypes from '../../types/products-types'
import ProductCard from '../Card'
import { LatestBg } from './latest.elements'

interface LatestProductsProps {
  products: ProductsTypes[]
}

const LatestProducts: React.FC<LatestProductsProps> = ({ products }) => {
  return (
    <LatestBg>
      {products.slice(0, 6).map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          productImg={product.images[0].src}
          price={product.price}
        />
      ))}
    </LatestBg>
  )
}

export default LatestProducts