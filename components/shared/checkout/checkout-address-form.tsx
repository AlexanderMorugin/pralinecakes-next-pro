import { type FC } from 'react';
import { WhiteBlock } from '..';
import { Input, Textarea } from '@/components/ui';

export const CheckoutAddressForm: FC = () => {
  return (
    <WhiteBlock title='3. Адрес доставки'>
      <div className='flex flex-col gap-5'>
        <Input
          name='firstName'
          className='text-base'
          placeholder='Адрес доставки'
        />
        <Textarea
          className='text-base'
          rows={5}
          placeholder='Комментарии к заказу'
        />
      </div>
    </WhiteBlock>
  );
};
