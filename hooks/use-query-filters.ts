import { useRouter } from 'next/navigation';
import qs from 'qs';
import { useEffect } from 'react';
import { Filters } from './use-filters';

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();

  useEffect(() => {
    const params = {
      ...filters.prices,
      productTypes: Array.from(filters.productTypes),
      sizes: Array.from(filters.sizes),
      selectedIngredients: Array.from(filters.selectedIngredients),
    };

    const query = qs.stringify(params, { arrayFormat: 'comma' });

    router.push(`?${query}`, { scroll: false });
  }, [filters, router]);
};