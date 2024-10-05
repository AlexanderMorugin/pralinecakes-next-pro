import { Variant } from '@/components/shared/variant-selector';
import { ProductSize, ProductType } from '@/constants/constants';
import { getAvialableProductSizes } from '@/lib';
import { ProductItem } from '@prisma/client';
import { useEffect, useState } from 'react';
import { useSet } from 'react-use';

interface ReturnProps {
  size: ProductSize;
  type: ProductType;
  setSize: (size: ProductSize) => void;
  setType: (type: ProductType) => void;
  selectedIngredients: Set<number>;
  addIngredient: (id: number) => void;
  avialableProductSizes: Variant[];
}

export const useProductOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = useState<ProductSize>(30);
  const [type, setType] = useState<ProductType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const avialableProductSizes = getAvialableProductSizes(type, items);

  useEffect(() => {
    const isAviabledSize = avialableProductSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const avialebleSize = avialableProductSizes?.find((item) => !item.disabled);

    if (!isAviabledSize && avialebleSize) {
      setSize(Number(avialebleSize.value) as ProductSize);
    }
  }, [type]);

  return {
    size,
    setSize,
    type,
    setType,
    selectedIngredients,
    addIngredient,
    avialableProductSizes,
  };
};
