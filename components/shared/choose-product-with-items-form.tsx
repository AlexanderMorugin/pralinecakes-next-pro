'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState, type FC } from 'react';
import { CurrentIngredient, ProductImage, Title, VariantSelector } from '.';
import { Button } from '../ui';
import {
  mapProductType,
  ProductSize,
  productSizes,
  ProductType,
  productTypes,
} from '@/constants/constants';
import { Ingredient } from '@prisma/client';
import { useSet } from 'react-use';
import { ProductWithRelations } from '@/@types/prisma';
import { CalcTotalProductPrice } from '@/lib';

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
  const [size, setSize] = useState<ProductSize>(30);
  const [type, setType] = useState<ProductType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  // const productPrice =
  //   items?.find(
  //     (item) => item.productType === type && item.productSize === size
  //   )?.productPrice || 0;

  // const totalIngredientsPrice = ingredients
  //   .filter((ingredient) => selectedIngredients.has(ingredient.id))
  //   .reduce((aac, ingredient) => aac + ingredient.price, 0);

  const totalPrice = CalcTotalProductPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

  const textDetails = `${size} cm, ${mapProductType[type]} taste`;

  const filteredProductbyType = items?.filter(
    (item) => item.productType === type
  );
  const avialableProductSizes = productSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredProductbyType.some(
      (product) => Number(product.productSize) === Number(item.value)
    ),
  }));

  useEffect(() => {
    const isAviabledSize = avialableProductSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const avialebleSize = avialableProductSizes?.find((item) => !item.disabled);

    if (!isAviabledSize && avialebleSize) {
      setSize(Number(avialebleSize.value) as ProductSize);
    }
  }, [type]);

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
