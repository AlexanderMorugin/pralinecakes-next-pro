'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { type FC } from 'react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { ChooseProductForm, ChooseProductWithItemsForm } from '..';
import { ProductWithRelations } from '@/@types/prisma';
import { useCartStore } from '@/store/cart';
import toast from 'react-hot-toast';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isProductWithItems = Boolean(firstItem.productType);
  const { addCartItem, loading } = useCartStore((state) => state);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({
        productItemId: itemId,
        ingredients,
      });

      toast.success(product.name + ' успешно добавлен в корзину');
      router.back();
    } catch (error) {
      toast.error('Не удаллось добавить продукт в корзину');
      console.log(error);
    }
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'overflow-hidden p-0 w-full max-w-[1060px] min-h-[560px] bg-white',
          className
        )}
      >
        {/** Скрываем в консоли ошибки по поводу Титла и Дескрипшн */}
        <DialogTitle className='hidden' />
        <DialogDescription className='hidden' />

        {isProductWithItems ? (
          <ChooseProductWithItemsForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
            onSubmit={onSubmit}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            price={firstItem.productPrice}
            onSubmit={onSubmit}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
