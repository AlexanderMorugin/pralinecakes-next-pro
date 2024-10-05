'use client';

import { PropsWithChildren, type FC } from 'react';
import {
  Sheet,
  SheetContent,
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

interface Props {
  className?: string;
}

export const CartDrawer: FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className='flex flex-col justify-between pb-0 bg-[#f4f1ee]'>
        <SheetHeader>
          <SheetTitle>
            В корзине <span className='font-bold'>3 товара</span>
          </SheetTitle>
        </SheetHeader>

        <div className='-mx-6 mt-5 overflow-auto flex-1'>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={
                'https://pralinecakes.ru/_next/static/media/cake-morkovniy-m-new.91bb4f1a.jpeg'
              }
              details={getCartItemDetails(2, 30, [
                {
                  name: 'Пирожное приготовлено из трех слоев бисквита',
                  name: 'отпекается из пшеничной муки',
                },
              ])}
              name={'Napoleon'}
              price={700}
              quantity={1}
            />
          </div>

          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={
                'https://pralinecakes.ru/_next/static/media/cake-morkovniy-m-new.91bb4f1a.jpeg'
              }
              details={getCartItemDetails(2, 30, [
                {
                  name: 'Пирожное приготовлено из трех слоев бисквита',
                  name: 'отпекается из пшеничной муки',
                },
              ])}
              name={'Napoleon'}
              price={700}
              quantity={1}
            />
          </div>

          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={
                'https://pralinecakes.ru/_next/static/media/cake-morkovniy-m-new.91bb4f1a.jpeg'
              }
              details={getCartItemDetails(2, 30, [
                {
                  name: 'Пирожное приготовлено из трех слоев бисквита',
                  name: 'отпекается из пшеничной муки',
                },
              ])}
              name={'Napoleon'}
              price={700}
              quantity={1}
            />
          </div>

          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={
                'https://pralinecakes.ru/_next/static/media/cake-morkovniy-m-new.91bb4f1a.jpeg'
              }
              details={getCartItemDetails(2, 30, [
                {
                  name: 'Пирожное приготовлено из трех слоев бисквита',
                  name: 'отпекается из пшеничной муки',
                },
              ])}
              name={'Napoleon'}
              price={700}
              quantity={1}
            />
          </div>

          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={
                'https://pralinecakes.ru/_next/static/media/cake-morkovniy-m-new.91bb4f1a.jpeg'
              }
              details={getCartItemDetails(2, 30, [
                {
                  name: 'Пирожное приготовлено из трех слоев бисквита',
                  name: 'отпекается из пшеничной муки',
                },
              ])}
              name={'Napoleon'}
              price={700}
              quantity={1}
            />
          </div>

          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={
                'https://pralinecakes.ru/_next/static/media/cake-morkovniy-m-new.91bb4f1a.jpeg'
              }
              details={getCartItemDetails(2, 30, [
                {
                  name: 'Пирожное приготовлено из трех слоев бисквита',
                  name: 'отпекается из пшеничной муки',
                },
              ])}
              name={'Napoleon'}
              price={700}
              quantity={1}
            />
          </div>

          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={
                'https://pralinecakes.ru/_next/static/media/cake-morkovniy-m-new.91bb4f1a.jpeg'
              }
              details={getCartItemDetails(2, 30, [
                {
                  name: 'Пирожное приготовлено из трех слоев бисквита',
                  name: 'отпекается из пшеничной муки',
                },
              ])}
              name={'Napoleon'}
              price={700}
              quantity={1}
            />
          </div>

          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={
                'https://pralinecakes.ru/_next/static/media/cake-morkovniy-m-new.91bb4f1a.jpeg'
              }
              details={getCartItemDetails(2, 30, [
                {
                  name: 'Пирожное приготовлено из трех слоев бисквита',
                  name: 'отпекается из пшеничной муки',
                },
              ])}
              name={'Napoleon'}
              price={700}
              quantity={1}
            />
          </div>
        </div>

        <SheetFooter className='-mx-6 bg-white p-8'>
          <div className='w-full'>
            <div className='flex mb-4'>
              <span className='flex flex-1 text-lg text-neutral-500'>
                Итого
                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
              </span>
              <span className='font-bold text-lg'>500 rub</span>
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
