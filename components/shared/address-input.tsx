'use client';

import { type FC } from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token='9a2f40faad8a7819e6a52a4c878e26af151f474e'
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
