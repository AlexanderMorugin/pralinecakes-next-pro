'use client';

import {
  CheckoutItem,
  CheckoutSidebar,
  Container,
  Title,
  WhiteBlock,
} from '@/components/shared';
import { Input, Textarea } from '@/components/ui';
import { ProductSize, ProductType } from '@/constants/constants';
import { useCart } from '@/hooks';
import { getCartItemDetails } from '@/lib';

export default function CheckoutPage() {
  const { totalAmount, items, updateItemQuantity, removeCartItem } = useCart();

  const handleClickCountButton = (
    id: number,
    quantity: number,
    type: 'plus' | 'minus'
  ) => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className='pt-10'>
      <Title
        text='Оформление заказа'
        className='font-extrabold mb-8 text-[36px]'
      />
      <div className='flex gap-10'>
        {/** Левая сторона */}
        <div className='flex flex-col gap-10 flex-1 mb-20'>
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

          <WhiteBlock title='2. Персональные данные'>
            <div className='grid grid-cols-2 gap-5'>
              <Input name='firstName' className='text-base' placeholder='Имя' />
              <Input
                name='lastName'
                className='text-base'
                placeholder='Фамилия'
              />
              <Input name='email' className='text-base' placeholder='E-Mail' />
              <Input name='phone' className='text-base' placeholder='Телефон' />
            </div>
          </WhiteBlock>

          <WhiteBlock title='3. Адрес доставки'>
            <div className='flex flex-col gap-5'>
              <Input
                name='firstName'
                className='text-base'
                placeholder='Адрес доставки'
              />
              <Textarea
                className='text-base'
                rows={5}
                placeholder='Комментарии к заказу'
              />
            </div>
          </WhiteBlock>
        </div>

        {/** Правая сторона */}
        <CheckoutSidebar totalAmount={totalAmount} />
      </div>
    </Container>
  );
}
