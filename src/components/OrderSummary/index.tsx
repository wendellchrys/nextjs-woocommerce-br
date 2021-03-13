import * as OrderSummaryStyles from './styled'
import React, { useContext } from 'react'

import { CartContext } from '../../context/cart'
import { CartItem } from '../../types'

interface OrderSummaryProps {
  items: CartItem[]
  total: number
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, total }) => {
  return (
    <OrderSummaryStyles.Wrapper>
      <OrderSummaryStyles.SummaryGrid>
        <OrderSummaryStyles.SumItemDesc>Product</OrderSummaryStyles.SumItemDesc>
        <OrderSummaryStyles.SumItemDesc>Subtotal</OrderSummaryStyles.SumItemDesc>
        {items.length > 0 &&
          items.map((item: CartItem) => (
            <React.Fragment key={item.product_id}>
              <OrderSummaryStyles.SumItemName>
                {item.product_name} x {item.quantity}
              </OrderSummaryStyles.SumItemName>
              <OrderSummaryStyles.SumItemTotal>
                ${item.line_total!.toFixed(2)}
              </OrderSummaryStyles.SumItemTotal>
            </React.Fragment>
          ))}
        <OrderSummaryStyles.SumItemDesc>Subtotal</OrderSummaryStyles.SumItemDesc>
        {/*for design purposes duplicate this */}
        <OrderSummaryStyles.SumItemDescWhite>
          ${total.toFixed(2)}
        </OrderSummaryStyles.SumItemDescWhite>
        <OrderSummaryStyles.SumItemDesc>Total</OrderSummaryStyles.SumItemDesc>
        <OrderSummaryStyles.SumItemDescWhite>
          ${total.toFixed(2)}
        </OrderSummaryStyles.SumItemDescWhite>
      </OrderSummaryStyles.SummaryGrid>
    </OrderSummaryStyles.Wrapper>
  )
}

export default OrderSummary
