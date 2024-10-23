'use client';

import { type FC } from 'react';
import { AddressInput, ErrorText, FormTextarea, WhiteBlock } from '..';
import { Controller, useFormContext } from 'react-hook-form';

interface Props {
  className?: string;
}

export const CheckoutAddressForm: FC<Props> = ({ className }) => {
  const { control } = useFormContext();

  return (
    <WhiteBlock title='3. Адрес доставки' className={className}>
      <div className='flex flex-col gap-5'>
        <Controller
          control={control}
          name='address'
          render={({ field, fieldState }) => (
            <>
              <AddressInput onChange={field.onChange} />
              {fieldState.error && (
                <ErrorText text={fieldState.error.message} />
              )}
            </>
          )}
        />

        <FormTextarea
          name='comment'
          className='text-base'
          rows={5}
          placeholder='Комментарии к заказу'
        />
      </div>
    </WhiteBlock>
  );
};
