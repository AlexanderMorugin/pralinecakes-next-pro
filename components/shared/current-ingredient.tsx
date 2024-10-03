import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';
import { type FC } from 'react';

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const CurrentIngredient: FC<Props> = ({
  imageUrl,
  name,
  price,
  active,
  onClick,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white border border-transparent',
        { 'border border-primary': active },
        className
      )}
      onClick={onClick}
    >
      {active && (
        <CircleCheck className='absolute top-2 right-2 text-primary' />
      )}
      <img src={imageUrl} width={110} height={110} />
      <span className='text-xs mb-1'>{name}</span>
      <span className='font-bold'>{price} р</span>
    </div>
  );
};
