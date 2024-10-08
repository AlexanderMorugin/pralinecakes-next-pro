'use client';

import { ArrowRight, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CartDrawer } from '.';
import { type FC } from 'react';
import { useCartStore } from '@/store/cart';

interface Props {
  className?: string;
}

export const CartButton: FC<Props> = ({ className }) => {
  const { totalAmount, items } = useCartStore((state) => state);

  return (
    <CartDrawer>
      <div
        className={cn(
          'group relative bg-primary text-primary-foreground inline-flex items-center justify-center rounded-md h-10 px-4 py-2',
          className
        )}
      >
        <b>{totalAmount} p</b>
        <span className='h-full w-[1px] bg-white/30 mx-3' />
        <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
          <ShoppingCart size={16} className='relative' strokeWidth={2} />
          <b>{items.length}</b>
        </div>
        <ArrowRight
          size={20}
          className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
        />
      </div>
    </CartDrawer>
  );
};
