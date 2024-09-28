'use client';

import { useEffect, useState, type FC } from 'react';
import { Title } from './title';

import {
  // FilterCheckbox,
  FilterCheckboxGroup,
  RangeSlider,
} from '.';
import { Input } from '../ui';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';
import qs from 'qs';
import { useRouter } from 'next/navigation';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: FC<Props> = ({ className }) => {
  const router = useRouter();
  const { ingredients, isLoading, onAddId, selectedIngredients } =
    useFilterIngredients();

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [productTypes, { toggle: toggleProductTypes }] = useSet(
    new Set<string>([])
  );

  const [prices, setPrice] = useState<PriceProps>({
    priceFrom: 0,
    priceTo: 3000,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };

  useEffect(() => {
    const filters = {
      ...prices,
      productTypes: Array.from(productTypes),
      sizes: Array.from(sizes),
      selectedIngredients: Array.from(selectedIngredients),
    };

    const query = qs.stringify(filters, { arrayFormat: 'comma' });

    router.push(`?${query}`);
  }, [prices, productTypes, sizes, selectedIngredients]);

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  return (
    <div className={className}>
      <Title className='mb-5 font-bold' text='Фильтрация' size='sm' />

      {/** Верхние чекбоксы */}
      <FilterCheckboxGroup
        title='Тип теста'
        name='productTypes'
        className='mb-5'
        onClickCheckbox={toggleProductTypes}
        selectedIngredients={productTypes}
        items={[
          { text: 'Бисквитное', value: '1' },
          { text: 'Песочное', value: '2' },
          { text: 'Ореховое', value: '3' },
        ]}
      />

      <FilterCheckboxGroup
        title='Размеры'
        name='sizes'
        className='mb-5'
        onClickCheckbox={toggleSizes}
        selectedIngredients={sizes}
        items={[
          { text: '20 см', value: '20' },
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' },
        ]}
      />
      {/* <div className='flex flex-col gap-4'>
        <FilterCheckbox name='hits' text='Хиты продаж' value='1' />
        <FilterCheckbox name='news' text='Новинки' value='2' />
      </div> */}

      {/** Фильтр цены */}
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={3000}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type='number'
            placeholder='30000'
            min={100}
            max={3000}
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={3000}
          step={10}
          value={[prices.priceFrom, prices.priceTo]}
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
          selectedIngredients={selectedIngredients}
          name='ingredients'
          className='mt-5'
        />
      </div>
    </div>
  );
};
