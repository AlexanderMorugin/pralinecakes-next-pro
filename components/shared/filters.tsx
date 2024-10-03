'use client';

import { type FC } from 'react';
import { useFilters, useIngredients, useQueryFilters } from '@/hooks';

import { Title } from './title';
import { FilterCheckboxGroup, RangeSlider } from '.';
import { Input } from '../ui';

interface Props {
  className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
  const { ingredients, isLoading } = useIngredients();
  const filters = useFilters();
  useQueryFilters(filters);

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  };

  return (
    <div className={className}>
      <Title className='mb-5 font-bold' text='Фильтрация' size='sm' />

      {/** Верхние чекбоксы */}
      <FilterCheckboxGroup
        title='Тип теста'
        name='productTypes'
        className='mb-5'
        onClickCheckbox={filters.setProductTypes}
        selectedIngredients={filters.productTypes}
        items={[
          { text: 'Бисквитное', value: '1' },
          { text: 'Песочное', value: '2' },
          { text: 'Ореховое', value: '3' },
        ]}
      />

      {/** Фильтр размеров */}
      <FilterCheckboxGroup
        title='Размеры'
        name='sizes'
        className='mb-5'
        onClickCheckbox={filters.setSizes}
        selectedIngredients={filters.sizes}
        items={[
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' },
          { text: '50 см', value: '50' },
        ]}
      />

      {/** Фильтр цены */}
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={1000}
            value={String(filters.prices.priceFrom)}
            onChange={(e) =>
              filters.setPrices('priceFrom', Number(e.target.value))
            }
          />
          <Input
            type='number'
            placeholder='3000'
            min={1000}
            max={3000}
            value={String(filters.prices.priceTo)}
            onChange={(e) =>
              filters.setPrices('priceTo', Number(e.target.value))
            }
          />
        </div>
        <RangeSlider
          min={0}
          max={3000}
          step={10}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 3000,
          ]}
          onValueChange={updatePrices}
        />

        {/** Фильтр ингредиентов */}
        <FilterCheckboxGroup
          title='Ингредиенты'
          limit={6}
          defaultItems={items.slice(0, 6)}
          items={items}
          isLoading={isLoading}
          onClickCheckbox={filters.setSelectedIngredients}
          selectedIngredients={filters.selectedIngredients}
          name='ingredients'
          className='mt-5'
        />
      </div>
    </div>
  );
};
