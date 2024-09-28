'use client';

import { useState, type FC } from 'react';
import { Title } from './title';

import { FilterCheckbox, FilterCheckboxGroup, RangeSlider } from '.';
import { Input } from '../ui';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: FC<Props> = ({ className }) => {
  const { ingredients, isLoading, onAddId, selectedIds } =
    useFilterIngredients();
  const [price, setPrice] = useState<PriceProps>({
    priceFrom: 0,
    priceTo: 3000,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...price,
      [name]: value,
    });
  };

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  return (
    <div className={className}>
      <Title className='mb-5 font-bold' text='Фильтрация' size='sm' />

      {/** Верхние чекбоксы */}
      <div className='flex flex-col gap-4'>
        <FilterCheckbox name='hits' text='Хиты продаж' value='1' />
        <FilterCheckbox name='news' text='Новинки' value='2' />
      </div>

      {/** Фильтр цены */}
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={3000}
            value={String(price.priceFrom)}
            onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type='number'
            placeholder='30000'
            min={100}
            max={3000}
            value={String(price.priceTo)}
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={3000}
          step={10}
          value={[price.priceFrom, price.priceTo]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrice({ priceFrom, priceTo })
          }
        />

        {/** Фильтр ингредиентов */}
        <FilterCheckboxGroup
          title='Ингредиенты'
          limit={6}
          defaultItems={items.slice(0, 6)}
          items={items}
          isLoading={isLoading}
          onClickCheckbox={onAddId}
          selectedIds={selectedIds}
          name='ingredients'
          className='mt-5'
        />
      </div>
    </div>
  );
};
