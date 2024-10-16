import { cn } from '@/lib/utils';
import { type FC } from 'react';

interface Props {
  className?: string;
}

export const CheckoutItemSkeleton: FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <div className='flex items-center gap-5'>
        <div className='w-[50px] h-[50px] bg-gray-200 rounded-full animate-pulse' />
        <h2 className='w-40 h-5 bg-gray-200 rounded animate-pulse' />
      </div>
      <div className='w-10 h-5 bg-gray-200 rounded animate-pulse' />
      <div className='w-[133px] h-8 bg-gray-200 rounded animate-pulse' />
    </div>
  );
};
