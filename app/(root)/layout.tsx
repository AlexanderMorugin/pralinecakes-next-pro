import type { Metadata } from 'next';

import { Header } from '@/components/shared';

export const metadata: Metadata = {
  title: 'Pralinecakes Next Pro',
  description: 'Generated by create next app',
};

export default function HomeLayout({
  modal,
  children,
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className='min-h-screen'>
        {modal}
        {children}
      </main>
    </>
  );
}
