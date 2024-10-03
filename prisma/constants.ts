export const categories = [
  { name: 'Сборные' },
  { name: 'Бисквитные' },
  { name: 'Ореховые' },
  { name: 'Кремовые' },
  { name: 'Сырные' },
];

export const ingredients = [
  {
    name: 'Сырный бортик',
    price: 179,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
  },
  {
    name: 'Сливочная моцарелла',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
  },
  {
    name: 'Сыры чеддер и пармезан',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
  },
  {
    name: 'Острый перец халапеньо',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
  },
  {
    name: 'Нежный цыпленок',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
  },
  {
    name: 'Шампиньоны',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
  },
  {
    name: 'Бекон',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
  },
  {
    name: 'Ветчина',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
  },
  {
    name: 'Пикантная пепперони',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
  },
  {
    name: 'Острая чоризо',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
  },
  {
    name: 'Маринованные огурчики',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
  },
  {
    name: 'Свежие томаты',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
  },
  {
    name: 'Красный лук',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
  },
  {
    name: 'Сочные ананасы',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
  },
  {
    name: 'Итальянские травы',
    price: 39,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
  },
  {
    name: 'Сладкий перец',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
  },
  {
    name: 'Кубики брынзы',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
  },
  {
    name: 'Митболы',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
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
  // {
  //   name: 'Пирожное "Миндальное"',
  //   imageUrl:
  //     'https://pralinecakes.ru/_next/static/media/pastry-mindalnoe-m.5d43a258.jpeg',
  //   categoryId: 2,
  // },
  {
    name: 'Торт "Баварский мусс"',
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-bavarskiy-m-new.e4965072.jpeg',
    categoryId: 3,
  },
  {
    name: 'Торт "Карамельно-Ореховый"',
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-orekhoviy-m-new.88082a08.jpeg',
    categoryId: 3,
  },
  {
    name: 'Торт "Киевский"',
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-kievskiy-m-new.2d4bed77.jpeg',
    categoryId: 3,
  },
  // {
  //   name: 'Торт "Птичье молоко"',
  //   imageUrl:
  //     'https://pralinecakes.ru/_next/static/media/cake-ptichie-moloko-m-new.27768748.jpeg',
  //   categoryId: 3,
  // },

  {
    name: 'Пирожное "Трюфельное"',
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/pastry-trufelnoe-m.e005af23.jpeg',
    categoryId: 4,
  },
  {
    name: 'Пирожное "Прага"',
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/pastry-praga-m.ca22d406.jpeg',
    categoryId: 4,
  },
  {
    name: 'Пирожное "Эстерхази"',
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/pastry-estaerhazi-m.7ee537b5.jpeg',
    categoryId: 4,
  },
  // {
  //   name: 'Пирожное "Маковое"',
  //   imageUrl:
  //     'https://pralinecakes.ru/_next/static/media/pastry-makovoe-m.98ea6ca9.jpeg',
  //   categoryId: 4,
  // },

  {
    name: 'Торт "Мед и молоко"',
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-med-moloko-m-new.a2ccaed4.jpeg',
    categoryId: 5,
  },
  {
    name: 'Торт "Медовый"',
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-medoviy-m-new.26d2bdf5.jpeg',
    categoryId: 5,
  },
  {
    name: 'Торт "Тирамису"',
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-tiramisu-m-new.bb58686b.jpeg',
    categoryId: 5,
  },
  // {
  //   name: 'Торт "Три шоколада"',
  //   imageUrl:
  //     'https://pralinecakes.ru/_next/static/media/cake-tri-chokolada-m-new.736c8463.jpeg',
  //   categoryId: 5,
  // },
];
