'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { type FC } from 'react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { ChooseProductForm, ChooseProductWithItemsForm } from '..';
import { ProductWithRelations } from '@/@types/prisma';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const isProductWithItems = Boolean(product.items[0].productType);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-full max-w-[1060px] min-h-[560px] bg-white overflow-hidden',
          className
        )}
      >
        {isProductWithItems ? (
          <ChooseProductWithItemsForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
          />
        ) : (
          <ChooseProductForm imageUrl={product.imageUrl} name={product.name} />
        )}
      </DialogContent>
    </Dialog>
  );
};
