export const categories = [
  { name: 'Шоколадные' },
  { name: 'Бисквитные' },
  { name: 'Ореховые' },
  { name: 'Кремовые' },
  { name: 'Сырные' },
];

export const ingredients = [
  {
    name: 'Бисквитное тесто',
    price: 100,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/pastry-strawberry-basket-s.dd9769ca.jpeg',
  },
  {
    name: 'Песочное тесто',
    price: 150,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/pastry-tri-shokolada-s.c92131ff.jpeg',
  },
  {
    name: 'Сливки',
    price: 130,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/pastry-maraquya-s.27074c3f.jpeg',
  },
  {
    name: 'Сыр',
    price: 160,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/pastry-kievskoe-s.5036f56d.jpeg',
  },
  {
    name: 'Ягоды',
    price: 170,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-cocos-s-new.98972d53.jpeg',
  },
  {
    name: 'Фрукты',
    price: 180,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-esterhazi-s-new.5afa1f8e.jpeg',
  },
  {
    name: 'Орехи',
    price: 120,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-banana-s-new.18fbacbb.jpeg',
  },
  {
    name: 'Яйцо',
    price: 110,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-med-moloko-s-new.f09800fd.jpeg',
  },
  {
    name: 'Сахар',
    price: 90,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-medoviy-s-new.47c69ab5.jpeg',
  },
  {
    name: 'Масло',
    price: 80,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-trufelniy-s-new.1eeb4609.jpeg',
  },
  {
    name: 'Агар',
    price: 70,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-ptichie-moloko-s-new.47b2f897.jpeg',
  },
  {
    name: 'Шоколад',
    price: 200,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-bavarskiy-s-new.a338c45b.jpeg',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: 'Пирожное "Картошка"',
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/pastry-kartoshka-m.30790b41.jpeg',
    categoryId: 2,
  },
  {
    name: 'Пирожное "Тарталетка с лесными ягодами"',
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/pastry-wild-berry-basket-m.eafaaba7.jpeg',
    categoryId: 2,
  },
  {
    name: 'Пирожное "Макаруни"',
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/pastry-macarons-m.e5953b0e.jpeg',
    categoryId: 2,
  },
  {
    name: 'Пирожное "Миндальное"',
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/pastry-mindalnoe-m.5d43a258.jpeg',
    categoryId: 2,
  },
];
