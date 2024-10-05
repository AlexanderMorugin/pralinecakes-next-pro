import {
  mapProductType,
  ProductSize,
  ProductType,
} from '@/constants/constants';
import { Ingredient } from '@prisma/client';

export const getCartItemDetails = (
  productType: ProductType,
  productSize: ProductSize,
  ingredients: Ingredient[]
): string => {
  const details = [];

  if (productSize && productType) {
    const typeName = mapProductType[productType];
    details.push(`${typeName} ${productSize} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map((item) => item.name));
  }

  return details.join(', ');
};
