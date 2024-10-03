import { ProductSize, ProductType } from '@/constants/constants';
import { Ingredient, ProductItem } from '@prisma/client';

/**
 * Функция подсчета общей стоимости выбранного товара
 *
 * @param type - тип продукта "Сладкий" или "Соленый"
 * @param size - размер продукта
 * @param items - список вариаций
 * @param ingredients - список ингредиентов
 * @param selectedIngredients - выбранные ингредиенты
 *
 * @returns number общую стоимость
 */

export const CalcTotalProductPrice = (
  type: ProductType,
  size: ProductSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const productPrice =
    items?.find(
      (item) => item.productType === type && item.productSize === size
    )?.productPrice || 0;

  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((aac, ingredient) => aac + ingredient.price, 0);

  return productPrice + totalIngredientsPrice;
};
