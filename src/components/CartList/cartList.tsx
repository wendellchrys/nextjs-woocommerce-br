import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button } from '@/components/Button';
import { Empty } from '@/components/Empty';
import { ProductItem } from '@/components/ProductItem';
import { useCart } from '@/hooks/use-cart';
import { convertPriceToNumber } from '@/utils/convertPriceToNumber';
import { formatPrice } from '@/utils/formatPrice';

import { sendOrderWhatsApp } from '@/components/SendOrderWhatsapp';

import * as CartListStyles from './styles';

// import items from './mock';


export const CartList = () => {
  const items = useCart((state) => state.items);
  const [total, setTotal] = useState('0');

  useEffect(() => {
    const newTotal = items.reduce(
      (acc, item) => acc + Number(item.productVariation ? item.productVariation.price : item.price) * Number(item.quantity),
      0
    );
    setTotal(String(newTotal));
  }, [items]);

  return (
    <CartListStyles.Container>
      {items.length ? (
        <>
          <ul className="divide-y divide-gray-200">
            {items.map((item) => (
              <ProductItem key={item.id} {...item} />
            ))}
          </ul>
          <CartListStyles.Total>
            <span>Total:</span>
            <span>{formatPrice(convertPriceToNumber(total))}</span>
          </CartListStyles.Total>

          <div className="mt-6">
            {items.length > 0 && (
              <CartListStyles.Button>
                <Button onClick={() => sendOrderWhatsApp(items, total)} fullWidth>
                  Finalizar Pedido
                </Button>
              </CartListStyles.Button>
            )}
          </div>
        </>
      ) : (
        <Empty
          title="Seu carrinho está vazio"
          description="Adicione produtos ao carrinho!"
        />
      )}
    </CartListStyles.Container>
  );
};
