import { Variant } from '@/components/shared/variant-selector';
import { productSizes, ProductType } from '@/constants/constants';
import { ProductItem } from '@prisma/client';

/**
 *
 *
 * @param type
 * @param items
 * @returns
 */

export const getAvialableProductSizes = (
  type: ProductType,
  items: ProductItem[]
): Variant[] => {
  const filteredProductbyType = items?.filter(
    (item) => item.productType === type
  );

  return productSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredProductbyType.some(
      (product) => Number(product.productSize) === Number(item.value)
    ),
  }));
};
