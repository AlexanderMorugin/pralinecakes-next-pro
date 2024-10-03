export const mapProductSize = {
  30: 'Маленький',
  40: 'Средний',
  50: 'Большой',
} as const;

export const mapProductType = {
  1: 'Соленый',
  2: 'Сладкий',
} as const;

export const productSizes = Object.entries(mapProductSize).map(
  ([value, name]) => ({ name, value })
);

export const productTypes = Object.entries(mapProductType).map(
  ([value, name]) => ({ name, value })
);

export type ProductSize = keyof typeof mapProductSize;
export type ProductType = keyof typeof mapProductType;
