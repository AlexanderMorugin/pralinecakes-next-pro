import { cn } from '@/lib/utils';
import { type FC } from 'react';
import * as CartItemDetails from './cart-item-details';
import { CartItemProps } from './cart-item-details/cart-item-details.types';
import { Trash2Icon } from 'lucide-react';
import { CountButton } from '.';

interface Props extends CartItemProps {
  className?: string;
}

export const CartDrawerItem: FC<Props> = ({
  id,
  imageUrl,
  details,
  name,
  price,
  quantity,
  disabled,
  className,
}) => {
  return (
    <div className={cn('flex bg-white p-5 gap-6', className)}>
      <CartItemDetails.Image src={imageUrl} />
      <div className='flex-1'>
        <CartItemDetails.Info name={name} details={details} />
        <hr className='my-3' />
        <div className='flex items-center justify-between'>
          <CountButton
            onClick={(type: any) => console.log(type)}
            value={quantity}
          />
          <div className='flex items-center gap-3'>
            <CartItemDetails.Price value={price} />
            <Trash2Icon
              className='text-gray-400 cursor-pointer hover:text-gray-600'
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};