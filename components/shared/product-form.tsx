'use client';

import { ProductWithRelations } from '@/@types/prisma';
import { useCartStore } from '@/store/cart';
import { type FC } from 'react';
import toast from 'react-hot-toast';
import { ChooseProductForm, ChooseProductWithItemsForm } from '.';

interface Props {
  product: ProductWithRelations;
  onSubmit?: VoidFunction;
}

export const ProductForm: FC<Props> = ({ product, onSubmit: _onSubmit }) => {
  const { addCartItem, loading } = useCartStore((state) => state);

  const firstItem = product.items[0];
  const isProductWithItems = Boolean(firstItem.productType);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({
        productItemId: itemId,
        ingredients,
      });

      toast.success(product.name + ' успешно добавлен в корзину');
      _onSubmit?.()
      // router.back();
    } catch (error) {
      toast.error('Не удаллось добавить продукт в корзину');
      console.log(error);
    }
  };

  if (isProductWithItems) {
    return (
      <ChooseProductWithItemsForm
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        items={product.items}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }

  return (
    <ChooseProductForm
      imageUrl={product.imageUrl}
      name={product.name}
      price={firstItem.productPrice}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};
