import { type FC } from 'react';
import { CheckoutItem, WhiteBlock } from '..';
import { ProductSize, ProductType } from '@/constants/constants';
import { getCartItemDetails } from '@/lib';
import { CartStateItem } from '@/lib/get-cart-details';

interface Props {
  items: CartStateItem[];
  handleClickCountButton: (
    id: number,
    quantity: number,
    type: 'plus' | 'minus'
  ) => void;
  removeCartItem: (id: number) => void;
}

export const CheckoutCart: FC<Props> = ({
  items,
  handleClickCountButton,
  removeCartItem,
}) => {
  return (
    <WhiteBlock title='1. Корзина' contentClassName='flex flex-col gap-5'>
      {items.map((item) => (
        <CheckoutItem
          key={item.id}
          id={item.id}
          imageUrl={item.imageUrl}
          details={getCartItemDetails(
            item.ingredients,
            item.productType as ProductType,
            item.productSize as ProductSize
          )}
          name={item.name}
          price={item.productPrice}
          quantity={item.quantity}
          disabled={item.disabled}
          handleClickCountButton={(type) =>
            handleClickCountButton(item.id, item.quantity, type)
          }
          onClickRemove={() => removeCartItem(item.id)}
        />
      ))}
    </WhiteBlock>
  );
};
