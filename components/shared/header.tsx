import { type FC } from 'react';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/public/logo-120.png';
import { CartButton, Container, SearchInput } from '.';
import { Button } from '../ui';

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className='flex items-center justify-between py-8'>
        {/** Левая часть */}
        <Link href='/' className='flex items-center gap-4'>
          <Image src={Logo} alt='logo' width={35} height={35} />
          <div>
            <h3 className='text-2xl uppercase font-black'>Пралине</h3>
            <p className='text-sm text-gray-400 leading-3'>кондитерская</p>
          </div>
        </Link>

        {/** Средняя часть */}
        <div className='mx-10 flex-1'>
          <SearchInput />
        </div>

        {/** Правая часть */}
        <div className='flex items-center gap-3'>
          <Button variant='outline' className='flex items-center gap-1'>
            <User size={16} />
            Войти
          </Button>

          <CartButton />
        </div>
      </Container>
    </header>
  );
};
