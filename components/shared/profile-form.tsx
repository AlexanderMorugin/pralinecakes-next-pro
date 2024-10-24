'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { User } from '@prisma/client';
import { type FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  formLoginShema,
  TFormRegisterValues,
} from './modals/auth-modal/forms/schemas';
import toast from 'react-hot-toast';
import { signOut } from 'next-auth/react';
import { Container } from './container';
import { Title } from './title';
import { FormInput } from './form';
import { Button } from '../ui';
import { updateUserInfo } from '@/app/actions';

interface Props {
  data: User;
}

export const ProfileForm: FC<Props> = ({ data }) => {
  const form = useForm({
    resolver: zodResolver(formLoginShema),
    defaultValues: {
      fullNane: data.fullName,
      email: data.email,
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await updateUserInfo({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });
      toast.success('Данные успешно оновлены');
    } catch (error) {
      console.log('Error [PROFILE_FORM] ', error);
      return toast.error('Ошибка при обновлении данных');
    }
  };

  const onClickSignOut = () => {
    signOut({
      callbackUrl: '/',
    });
  };

  return (
    <Container className='my-10'>
      <Title
        text={`Личные данные | #${data.id}`}
        size='md'
        className='font-bold'
      />
      <FormProvider {...form}>
        <form
          className='flex flex-col gap-5 w-96 mt-10'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormInput name='email' label='Email' required />
          <FormInput name='fullname' label='Полное имя' required />
          <FormInput
            type='password'
            name='password'
            label='Новый пароль'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            label='Подтвердите пароль'
            required
          />

          <Button
            type='submit'
            disabled={form.formState.isSubmitting}
            className='text-base mt-10'
          >
            Сохранить
          </Button>

          <Button
            type='button'
            disabled={form.formState.isSubmitting}
            variant='secondary'
            className='text-base'
            onClick={onClickSignOut}
          >
            Выйти
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
};
