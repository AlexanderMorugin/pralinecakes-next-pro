'use client';

import { useState, type FC } from 'react';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/public/logo-120.png';
import {
  AuthModal,
  CartButton,
  Container,
  ProfileButton,
  SearchInput,
} from '.';
import { Button } from '../ui';
import { useSession, signIn } from 'next-auth/react';

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: FC<Props> = ({
  hasSearch = true,
  hasCart = true,
  className,
}) => {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  // const { data: session } = useSession();

  return (
    <header className={cn('border-b', className)}>
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
        {hasSearch && (
          <div className='mx-10 flex-1'>
            <SearchInput />
          </div>
        )}

        {/** Правая часть */}
        <div className='flex items-center gap-3'>
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />

          <ProfileButton handleClickSignIn={() => setOpenAuthModal(true)} />

          {/* <Button
            onClick={() =>
              signIn('github', { callbackUrl: '/', redirect: true })
            }
            variant='outline'
            className='flex items-center gap-1'
          >
            <User size={16} />
            Войти
          </Button> */}

          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
