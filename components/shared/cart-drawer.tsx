'use client';

import { PropsWithChildren, useEffect, type FC } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { Button } from '../ui';
import { ArrowRight } from 'lucide-react';
import { CartDrawerItem } from '.';
import { getCartItemDetails } from '@/lib';
import { useCartStore } from '@/store/cart';
import { ProductSize, ProductType } from '@/constants/constants';

export const CartDrawer: FC<PropsWithChildren> = ({ children }) => {
  const {
    totalAmount,
    items,
    fetchCartItems,
    updateItemQuantity,
    removeCartItem,
  } = useCartStore((state) => state);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleClickCountButton = (
    id: number,
    quantity: number,
    type: 'plus' | 'minus'
  ) => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className='flex flex-col justify-between pb-0 bg-[#f4f1ee]'>
        <SheetHeader>
          <SheetTitle>
            В корзине <span className='font-bold'>{items.length} товара</span>
          </SheetTitle>

          {/** Скрываем ошибку в консоли по поводу Дескрипшн */}
          <SheetDescription className='hidden' />
        </SheetHeader>

        <div className='-mx-6 mt-5 overflow-auto flex-1'>
          <div className='mb-2'>
            {items.map((item) => (
              <CartDrawerItem
                key={item.id}
                id={item.id}
                imageUrl={item.imageUrl}
                details={
                  item.productSize && item.productType
                    ? getCartItemDetails(
                        item.ingredients,
                        item.productType as ProductType,
                        item.productSize as ProductSize
                      )
                    : ''
                }
                name={item.name}
                price={item.productPrice}
                quantity={item.quantity}
                handleClickCountButton={(type) =>
                  handleClickCountButton(item.id, item.quantity, type)
                }
                onClickRemove={() => removeCartItem(item.id)}
              />
            ))}
          </div>
        </div>

        <SheetFooter className='-mx-6 bg-white p-8'>
          <div className='w-full'>
            <div className='flex mb-4'>
              <span className='flex flex-1 text-lg text-neutral-500'>
                Итого
                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
              </span>
              <span className='font-bold text-lg'>{totalAmount} руб</span>
            </div>

            <Link href='/cart'>
              <Button type='submit' className='w-full h-12 text-base'>
                Оформить заказ
                <ArrowRight className='w-5 ml-2' />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
