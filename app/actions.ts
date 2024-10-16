'use server';

import { PayOrderTemplate } from '@/components/shared';
import { CheckoutFormValues } from '@/components/shared/checkout/checkout-form-schema';
import { sendEmail } from '@/lib';
import { prisma } from '@/prisma/prisma-clients';
import { OrderStatus } from '@prisma/client';
import { cookies } from 'next/headers';

export async function createOrder(data: CheckoutFormValues) {
  try {
    const cookieStore = cookies();
    const cartToken = cookieStore.get('cartToken')?.value;

    if (!cartToken) {
      throw new Error('Token not found');
    }

    /** Находим корзину по токену */
    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        items: {
          include: {
            ingredients: true,
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
      where: {
        token: cartToken,
      },
    });

    if (!userCart) {
      throw new Error('Cart is not found');
    }

    if (userCart?.totalAmount === 0) {
      throw new Error('Cart is empty');
    }

    /** Создаем заказ */
    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: data.firstName + ' ' + data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comments: data.comment,
        totalAmount: userCart.totalAmount,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.items),
      },
    });

    /** Очищаем корзину */
    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    });

    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    });

    // TODO: Сделать создание ссылки оплаты

    await sendEmail(
      data.email,
      'Praline-next-pro Оплатите заказ #' + order.id,
      PayOrderTemplate({
        orderId: order.id,
        totalAmount: order.totalAmount,
        paymentUrl: 'https://resend.com/docs/send-with-nextjs',
      })
    );
  } catch (error) {
    console.log('[CreateOrder] Server error ', error);
  }

  // Временная ссылка, чтобы не использовать никакие платежные системы
  return 'http://localhost:3000/';
}
