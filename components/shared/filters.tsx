import { type FC } from 'react';
import { Title } from './title';

import { FilterCheckbox, FilterCheckboxGroup, RangeSlider } from '.';
import { Input } from '../ui';

const ingredients = [
  {
    text: 'Бисквит',
    value: '1',
  },
  {
    text: 'Песочное',
    value: '2',
  },
  {
    text: 'Сливки',
    value: '3',
  },
  {
    text: 'Сыр',
    value: '4',
  },
  {
    text: 'Ягоды',
    value: '5',
  },
  {
    text: 'Фрукты',
    value: '6',
  },
  {
    text: 'Орехи',
    value: '7',
  },
  {
    text: 'Яйцо',
    value: '8',
  },
  {
    text: 'Сахар',
    value: '9',
  },
  {
    text: 'Масло',
    value: '10',
  },
  {
    text: 'Агар',
    value: '11',
  },
  {
    text: 'Шоколад',
    value: '12',
  },
];

interface Props {
  className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
  return (
    <div>
      <Title className='mb-5 font-bold' text='Фильтрация' size='sm' />

      {/** Верхние чекбоксы */}
      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Хиты продаж' value='1' />
        <FilterCheckbox text='Новинки' value='2' />
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
            defaultValue={0}
          />
          <Input
            type='number'
            placeholder='30000'
            min={100}
            max={3000}
            defaultValue={3000}
          />
        </div>
        <RangeSlider min={0} max={3000} step={10} value={[0, 3000]} />

        {/** Фильтр ингредиентов */}
        <FilterCheckboxGroup
          title='Ингредиенты'
          limit={6}
          defaultItems={ingredients}
          items={ingredients}
          className='mt-5'
        />
      </div>
    </div>
  );
};
