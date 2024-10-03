'use client';

import { cn } from '@/lib/utils';
import { type FC } from 'react';

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface Props {
  items: readonly Variant[];
  // defaultValue?: string;
  onClick?: (value: Variant['value']) => void;
  value?: Variant['value'];
  className?: string;
}

export const VariantSelector: FC<Props> = ({
  items,
  onClick,
  value,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex justify-between bg-[#f3f3f7] rounded-3xl p-1 select-none',
        className
      )}
    >
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            'flex flex-1 items-center justify-center h-[30px] px-5 rounded-3xl transition-all duration-400 text-sm',
            {
              'bg-white shadow': item.value === value,
              'text-gray-500 opacity-50 pointer-events-none': item.disabled,
            }
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
