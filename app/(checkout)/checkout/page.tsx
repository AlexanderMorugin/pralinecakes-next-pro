'use client';

import {
  CheckoutItem,
  CheckoutItemDetails,
  Container,
  Title,
  WhiteBlock,
} from '@/components/shared';
import { Button, Input, Textarea } from '@/components/ui';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';

export default function CheckoutPage() {
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
            <CheckoutItem
              id={1}
              imageUrl={
                'https://pralinecakes.ru/_next/static/media/cake-lemon-m-new.2662a0eb.jpeg'
              }
              details={
                'Шампиньоны, Бекон, Ветчина, Пикантная пепперони, Острая чоризо,'
              }
              name={'Ветчина'}
              price={470}
              quantity={2}
            />

            <CheckoutItem
              id={1}
              imageUrl={
                'https://pralinecakes.ru/_next/static/media/cake-lemon-m-new.2662a0eb.jpeg'
              }
              details={
                'Шампиньоны, Бекон, Ветчина, Пикантная пепперони, Острая чоризо,'
              }
              name={'Ветчина'}
              price={470}
              quantity={2}
            />
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
        <div className='w-[450px]'>
          <WhiteBlock className='p-6 sticky top-4'>
            <div className='flex flex-col gap-1'>
              <span className='text-xl'>Итого:</span>
              <span className='text-[32px] font-extrabold'>7000 р</span>
            </div>

            <CheckoutItemDetails
              title={
                <div className='flex items-center'>
                  <Package size={18} className='mr-2 text-gray-400' />
                  Стоимость товаров:
                </div>
              }
              value='3000'
            />
            <CheckoutItemDetails
              title={
                <div className='flex items-center'>
                  <Percent size={18} className='mr-2 text-gray-400' />
                  Налоги:
                </div>
              }
              value='3000'
            />
            <CheckoutItemDetails
              title={
                <div className='flex items-center'>
                  <Truck size={18} className='mr-2 text-gray-400' />
                  Доставка:
                </div>
              }
              value='3000'
            />

            <Button
              type='submit'
              className='w-full h-14 rounded-2xl mt-6 text-base font-bold'
            >
              Перейти к оплате
              <ArrowRight className='w-5 ml-2' />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
