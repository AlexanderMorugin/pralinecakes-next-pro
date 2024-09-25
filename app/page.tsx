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
        <div className='flex gap-[60px]'>
          {/** Фильтрация */}
          <div className='w-[250px]'>
            <Filters />
          </div>

          {/** Список тортов */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title='Торты'
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
                    id: 1,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 1,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 1,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 1,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 1,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 1,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 1,
                    name: 'Торт Наполеон',
                    imageUrl:
                      'https://pralinecakes.ru/_next/static/media/cake-praga-s-new.c118800e.jpeg',
                    price: 500,
                    items: [{ price: 300 }],
                  },
                ]}
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
