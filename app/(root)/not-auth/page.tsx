import { InfoBlock } from '@/components/shared';
import Image from '@/public/logo-120.png'

export default function UnauthorizedPage() {
  return (
    <div className='flex flex-col items-center justify-center mt-40'>
      <InfoBlock
        title='Доступ запрещен'
        text='Данную страницу могут просматривать только авторизованные пользователи'
        imageUrl={Image}
      />
    </div>
  );
}
