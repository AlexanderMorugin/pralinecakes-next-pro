import { cn } from '@/lib/utils';
import { type FC } from 'react';

interface Props {
  imageUrl: string;
  size: 30 | 40 | 50;
  className?: string;
}

export const ProductImage: FC<Props> = ({ imageUrl, size, className }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center flex-1 relative w-full',
        className
      )}
    >
      <img
        src={imageUrl}
        alt='Cake'
        className={cn(
          'relative transition-all z-10 duration-300 rounded-full object-cover',
          {
            'w-[300px] h-[300px]': size === 30,
            'w-[400px] h-[400px]': size === 40,
            'w-[500px] h-[500px]': size === 50,
          }
        )}
      />
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[520px] h-[520px]' />
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-100 w-[420px] h-[420px]' />
    </div>
  );
};
