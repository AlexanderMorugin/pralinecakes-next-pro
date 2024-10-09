import { prisma } from '@/prisma/prisma-clients';

export interface GetSearchParams {
  query?: string;
  sortBy?: string;
  sizes?: string;
  productTypes?: string;
  selectedIngredients?: string;
  priceFrom?: string;
  priceTo?: string;
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 1000;

export const findProducts = async (params: GetSearchParams) => {
  const sizes = params.sizes?.split(',').map(Number);
  const productTypes = params.productTypes?.split(',').map(Number);
  const ingredientsIdArr = params.selectedIngredients?.split(',').map(Number);

  const minPrice = Number(params.priceFrom) || DEFAULT_MIN_PRICE;
  const maxPrice = Number(params.priceTo) || DEFAULT_MAX_PRICE;

  const categories = await prisma.category.findMany({
    include: {
      products: {
        orderBy: {
          id: 'asc',
        },
        where: {
          ingredients: ingredientsIdArr
            ? {
                some: {
                  id: {
                    in: ingredientsIdArr,
                  },
                },
              }
            : undefined,
          items: {
            some: {
              productSize: {
                in: sizes,
              },
              productType: {
                in: productTypes,
              },
              productPrice: {
                gte: minPrice, // >=
                lte: maxPrice, // <=
              },
            },
          },
        },
        include: {
          ingredients: true,
          items: {
            where: {
              productPrice: {
                gte: minPrice,
                lte: maxPrice,
              },
            },
            orderBy: {
              productPrice: 'asc',
            },
          },
        },
      },
    },
  });

  return categories;
};