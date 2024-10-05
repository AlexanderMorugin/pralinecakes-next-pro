'use client';

import { cn } from '@/lib/utils';
import { type FC } from 'react';
import { CurrentIngredient, ProductImage, Title, VariantSelector } from '.';
import { Button } from '../ui';
import { ProductSize, ProductType, productTypes } from '@/constants/constants';
import { Ingredient } from '@prisma/client';
import { ProductWithRelations } from '@/@types/prisma';
import { getProductDetails } from '@/lib';
import { useProductOptions } from '@/hooks';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductWithRelations['items'];
  onClickAddCart?: VoidFunction;
  className?: string;
}

export const ChooseProductWithItemsForm: FC<Props> = ({
  imageUrl,
  name,
  ingredients,
  items,
  onClickAddCart,
  className,
}) => {
  const {
    size,
    setSize,
    type,
    setType,
    selectedIngredients,
    addIngredient,
    avialableProductSizes,
  } = useProductOptions(items);

  const { totalPrice, textDetails } = getProductDetails(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );
  const handleClickAdd = () => {
    onClickAddCart?.();
    console.log({
      size,
      type,
      ingredients: selectedIngredients,
    });
  };

  return (
    <div className={cn('flex flex-1', className)}>
      <ProductImage imageUrl={imageUrl} size={size} />
      <div className='w-[490px] bg-[#f7f6f5] p-7'>
        <Title text={name} size='md' className='font-extrabold mb-1' />
        <p className='text-gray-400'>{textDetails}</p>

        <VariantSelector
          items={avialableProductSizes}
          value={String(size)}
          onClick={(value) => setSize(Number(value) as ProductSize)}
        />
        <VariantSelector
          items={productTypes}
          value={String(type)}
          onClick={(value) => setType(Number(value) as ProductType)}
        />

        <div className='bg-gray-50 p-5 mt-5 rounded-md h-[420px] overflow-auto scrollbar'>
          <div className='grid grid-cols-3 gap-3'>
            {ingredients.map((ingredient) => (
              <CurrentIngredient
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
          onClick={handleClickAdd}
        >
          Добавить в корзину за {totalPrice} р
        </Button>
      </div>
    </div>
  );
};
