'use client';

import { PropsWithChildren, useState, type FC } from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { Button } from '../ui';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CartDrawerItem, Title } from '.';
import { getCartItemDetails } from '@/lib';
import { ProductSize, ProductType } from '@/constants/constants';
import ImageLogo from '@/public/logo-120.png';
import Image from 'next/image';
import { useCart } from '@/hooks';

export const CartDrawer: FC<PropsWithChildren> = ({ children }) => {
  const { totalAmount, items, updateItemQuantity, removeCartItem } = useCart();
  const [redirect, setRedirect] = useState(false);

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
            {totalAmount > 0 && (
              <>
                <span>В корзине</span>{' '}
                <span className='font-bold'>{items.length} товара</span>
              </>
            )}
          </SheetTitle>

          {/** Скрываем ошибку в консоли по поводу Дескрипшн */}
          <SheetDescription className='hidden' />
        </SheetHeader>
        {totalAmount > 0 && (
          <>
            <div className='-mx-6 mt-5 overflow-auto flex-1'>
              {items.map((item) => (
                <div key={item.id} className='mb-2'>
                  <CartDrawerItem
                    id={item.id}
                    imageUrl={item.imageUrl}
                    details={getCartItemDetails(
                      item.ingredients,
                      item.productType as ProductType,
                      item.productSize as ProductSize
                    )}
                    disabled={item.disabled}
                    name={item.name}
                    price={item.productPrice}
                    quantity={item.quantity}
                    handleClickCountButton={(type) =>
                      handleClickCountButton(item.id, item.quantity, type)
                    }
                    onClickRemove={() => removeCartItem(item.id)}
                  />
                </div>
              ))}
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

                <Link href='/checkout'>
                  <Button
                    loading={redirect}
                    onClick={() => setRedirect(true)}
                    type='submit'
                    className='w-full h-12 text-base'
                  >
                    Оформить заказ
                    <ArrowRight className='w-5 ml-2' />
                  </Button>
                </Link>
              </div>
            </SheetFooter>
          </>
        )}

        {!totalAmount && (
          <div className='flex flex-col items-center justify-center w-72 mx-auto my-auto'>
            <Image src={ImageLogo} alt='ImageLogo' width={120} height={120} />
            <Title
              size='sm'
              className='text-center font-bold my-2'
              text='Ваша корзина пуста'
            />
            <p className='text-center text-neutral-500 mb-5'>
              Добавьте продукт, чтобы совершить заказ.
            </p>
            <SheetClose>
              <div className='inline-flex items-center justify-center whitespace-nowrap rounded-md w-56 h-12 text-base bg-primary text-primary-foreground hover:bg-primary/90'>
                <ArrowLeft className='w-5 mr-2' />
                Вернуться назад
              </div>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
