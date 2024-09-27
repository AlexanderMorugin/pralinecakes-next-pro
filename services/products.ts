import { Product } from '@prisma/client';
import { axiosInstance } from './axios-instance';
import { ApiRoutes } from './api-routes';

export const search = async (query: string): Promise<Product[]> => {
  const { data } = await axiosInstance.get<Product[]>(
    ApiRoutes.PRODUCTS_SEARCH,
    {
      params: { query },
    }
  );

  return data;
};
