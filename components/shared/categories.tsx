'use client';

import { type FC } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useCategoryStore } from '@/store/category';

interface Props {
  className?: string;
}

const categories = [
  { id: 1, name: 'Медовые' },
  { id: 2, name: 'Сырные' },
  { id: 3, name: 'Шоколадные' },
  { id: 4, name: 'Бисквитные' },
  { id: 5, name: 'Кремовые' },
  { id: 6, name: 'Ореховые' },
];
// const activeIndex = 0;

export const Categories: FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {categories.map(({ name, id }, index) => (
        <Link
          key={index}
          href={`#${name}`}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id &&
              'bg-white shadow-md shadow-gray-200 text-primary'
          )}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};
