'use client';

import { type FC } from 'react';
import { CartItemProps } from './cart-item-details/cart-item-details.types';
import { CountButton } from './count-button';
import { CartItemDetailsImage } from './cart-item-details/cart-item-details-image';
import { CartItemInfo } from './cart-item-details/cart-item-info';
import { CartItemDetailsPrice } from './cart-item-details/cart-item-details-price';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props extends CartItemProps {
  onClickRemove?: () => void;
  onClickCountButton?: (type: 'plus' | 'minus') => void;
  className?: string;
}

export const CheckoutItem: FC<Props> = ({
  name,
  price,
  imageUrl,
  quantity,
  details,
  onClickRemove,
  onClickCountButton,
  className,
}) => {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className='flex items-center gap-5 flex-1'>
        <CartItemDetailsImage src={imageUrl} />
        <CartItemInfo name={name} details={details} />
      </div>
      <CartItemDetailsPrice value={price} />
      <div className='flex items-center gap-5 ml-20'>
        <CountButton onClick={onClickCountButton} value={quantity} />
        <button onClick={onClickRemove}>
          <X
            size={20}
            className='text-gray-400 cursor-pointer hover:text-gray-600'
          />
        </button>
      </div>
    </div>
  );
};
