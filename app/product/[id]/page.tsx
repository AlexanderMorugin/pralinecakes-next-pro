import {
  Container,
  ProductImage,
  Title,
  VariantSelector,
} from '@/components/shared';
import { prisma } from '@/prisma/prisma-clients';
import { notFound } from 'next/navigation';

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }

  return (
    <Container className='flex flex-col my-10'>
      <div className='flex flex-1'>
        <ProductImage imageUrl={product.imageUrl} size={50} />

        <div className='w-[490px] bg-[#F7F6F5] p-7'>
          <Title
            text={product.name}
            size='md'
            className='font-extrabold mb-1'
          />
          <p className='text-gray-400'>sdfasdfasdfasdfasdfasdfasdfasdf</p>
          <VariantSelector
            selectedValue='2'
            items={[
              {
                name: 'Маленький',
                value: '1',
              },
              {
                name: 'Средний',
                value: '2',
              },
              {
                name: 'Большой',
                value: '3',
                disabled: true,
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
