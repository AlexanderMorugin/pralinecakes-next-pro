import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все торты' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />
      <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
          {/** Фильтрация */}
          <div className='w-[250px]'>
            <Filters />
          </div>

          {/** Список тортов */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title='Медовые'
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 2,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 3,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 4,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 5,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 6,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 7,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 8,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                ]}
              />
            </div>

            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title='Сырные'
                categoryId={2}
                items={[
                  {
                    id: 10,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 11,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 12,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 13,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 14,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 15,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 16,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 17,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
