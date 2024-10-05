import {
  mapProductType,
  ProductSize,
  ProductType,
} from '@/constants/constants';
import { Ingredient, ProductItem } from '@prisma/client';
import { calcTotalProductPrice } from '.';

export const getProductDetails = (
  type: ProductType,
  size: ProductSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = calcTotalProductPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

  const textDetails = `${size} cm, ${mapProductType[type]} taste`;

  return { totalPrice, textDetails };
};
