import { hashSync } from 'bcrypt';
import { prisma } from './prisma-clients';
import { categories, ingredients, products } from './constants';

// const randomNumber = (min: number, max: number) => {
//   return Math.floor(Math.random() * (max - min) + min);
// };

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User Test',
        email: 'user@mail.ru',
        password: hashSync('123', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin Test',
        email: 'admin@mail.ru',
        password: hashSync('123', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  // Сборные торты
  const cake1 = await prisma.product.create({
    data: {
      name: 'Пирожное "Муравейник"',
      imageUrl:
        'https://pralinecakes.ru/_next/static/media/pastry-muraveinik-m.39a37407.jpeg',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 10),
      },
    },
  });

  const cake2 = await prisma.product.create({
    data: {
      name: 'Торт "Лимонный"',
      imageUrl:
        'https://pralinecakes.ru/_next/static/media/cake-lemon-m-new.2662a0eb.jpeg',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 15),
      },
    },
  });

  const cake3 = await prisma.product.create({
    data: {
      name: 'Торт "Морковный"',
      imageUrl:
        'https://pralinecakes.ru/_next/static/media/cake-morkovniy-m-new.91bb4f1a.jpeg',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(4, 20),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      // Пирожное "Муравейник"
      {
        productId: cake1.id,
        // productPrice: randomNumber(150, 650),
        productPrice: 300,
        productType: 1,
        productSize: 30,
      },
      {
        productId: cake1.id,
        productPrice: 400,
        productType: 1,
        productSize: 40,
      },
      {
        productId: cake1.id,
        productPrice: 500,
        productType: 1,
        productSize: 50,
      },
      // {
      //   productId: cake1.id,
      //   productPrice: 530,
      //   productType: 2,
      //   productSize: 30,
      // },
      {
        productId: cake1.id,
        productPrice: 630,
        productType: 2,
        productSize: 40,
      },
      {
        productId: cake1.id,
        productPrice: 730,
        productType: 2,
        productSize: 50,
      },

      // Торт "Лимонный"
      {
        productId: cake2.id,
        productPrice: 250,
        productType: 1,
        productSize: 30,
      },
      {
        productId: cake2.id,
        productPrice: 350,
        productType: 1,
        productSize: 40,
      },
      {
        productId: cake2.id,
        productPrice: 450,
        productType: 1,
        productSize: 50,
      },
      {
        productId: cake2.id,
        productPrice: 570,
        productType: 2,
        productSize: 30,
      },
      {
        productId: cake2.id,
        productPrice: 670,
        productType: 2,
        productSize: 40,
      },
      {
        productId: cake2.id,
        productPrice: 770,
        productType: 2,
        productSize: 50,
      },

      // Торт "Морковный"
      {
        productId: cake3.id,
        productPrice: 1250,
        productType: 1,
        productSize: 30,
      },
      {
        productId: cake3.id,
        productPrice: 1350,
        productType: 1,
        productSize: 40,
      },
      {
        productId: cake3.id,
        productPrice: 1450,
        productType: 1,
        productSize: 50,
      },
      {
        productId: cake3.id,
        productPrice: 2550,
        productType: 2,
        productSize: 30,
      },
      {
        productId: cake3.id,
        productPrice: 3550,
        productType: 2,
        productSize: 40,
      },
      {
        productId: cake3.id,
        productPrice: 4550,
        productType: 2,
        productSize: 50,
      },

      // товары без вариации сборок
      {
        productId: 1,
        productPrice: 123,
      },
      {
        productId: 2,
        productPrice: 133,
      },
      {
        productId: 3,
        productPrice: 143,
      },
      {
        productId: 4,
        productPrice: 153,
      },
      {
        productId: 5,
        productPrice: 163,
      },
      {
        productId: 6,
        productPrice: 173,
      },
      {
        productId: 7,
        productPrice: 183,
      },
      {
        productId: 8,
        productPrice: 193,
      },
      {
        productId: 9,
        productPrice: 126,
      },
      {
        productId: 10,
        productPrice: 138,
      },
      {
        productId: 11,
        productPrice: 142,
      },
      {
        productId: 12,
        productPrice: 156,
      },
    ],
  });

  await prisma.cart.createMany({
    data: [
      { userId: 1, totalAmount: 0, token: '111' },
      { userId: 2, totalAmount: 0, token: '222' },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
