import { Container, ProductForm } from '@/components/shared';
import { prisma } from '@/prisma/prisma-clients';

import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className='flex flex-col my-10'>
      <Suspense>
        <ProductForm product={product} />
      </Suspense>
    </Container>
  );
}
