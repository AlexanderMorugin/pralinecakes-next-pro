import {
  mapProductType,
  ProductSize,
  ProductType,
} from '@/constants/constants';
import { CartStateItem } from './get-cart-details';

export const getCartItemDetails = (
  ingredients: CartStateItem['ingredients'],
  productType: ProductType,
  productSize: ProductSize
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
