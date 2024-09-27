import { hashSync } from 'bcrypt';
import { prisma } from './prisma-clients';
import { categories, ingredients, products } from './constants';

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User',
        email: 'user@mail.ru',
        password: hashSync('123', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin',
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

  const cake1 = await prisma.product.create({
    data: {
      name: 'Пирожное "Муравейник"',
      imageUrl:
        'https://pralinecakes.ru/_next/static/media/pastry-muraveinik-m.39a37407.jpeg',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });

  const cake2 = await prisma.product.create({
    data: {
      name: 'Пирожное "Эклер"',
      imageUrl:
        'https://pralinecakes.ru/_next/static/media/pastry-eclery-m.3f1bdeba.jpeg',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      // Пирожное "Муравейник"
      {
        productId: cake1.id,
        productPrice: randomNumber(150, 650),
        productType: 1,
        productSize: 30,
      },
      {
        productId: cake1.id,
        productPrice: randomNumber(150, 650),
        productType: 2,
        productSize: 40,
      },
      {
        productId: cake1.id,
        productPrice: randomNumber(150, 650),
        productType: 2,
        productSize: 50,
      },

      // Пирожное "Эклер"
      {
        productId: cake2.id,
        productPrice: randomNumber(150, 650),
        productType: 1,
        productSize: 50,
      },
      {
        productId: cake2.id,
        productPrice: randomNumber(150, 650),
        productType: 1,
        productSize: 50,
      },
      {
        productId: cake2.id,
        productPrice: randomNumber(150, 650),
        productType: 2,
        productSize: 50,
      },
      {
        productId: cake2.id,
        productPrice: randomNumber(150, 650),
        productType: 2,
        productSize: 50,
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
