'use client';

import { cn } from '@/lib/utils';
import { type FC } from 'react';
import { Title } from '.';
import { Button } from '../ui';

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  onSubmit?: VoidFunction;
  loading?: boolean;
  className?: string;
}

export const ChooseProductForm: FC<Props> = ({
  imageUrl,
  name,
  price,
  onSubmit,
  loading,
  className,
}) => {
  return (
    <div className={cn('flex flex-1', className)}>
      <div className='flex flex-1 items-center justify-center relative w-full'>
        <img
          src={imageUrl}
          alt={name}
          className='relative left-2 top-2 transition-all duration-300 z-10 w-[400px] h-[400px] object-cover rounded-full'
        />
      </div>

      <div className='w-[490px] bg-[#f7f6f5] p-7'>
        <Title text={name} size='md' className='font-extrabold mb-1' />

        <Button
          loading={loading}
          className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
          onClick={() => onSubmit?.()}
        >
          Добавить в корзину за {price} р
        </Button>
      </div>
    </div>
  );
};
