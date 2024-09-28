import { ReactNode, type FC } from 'react';
import { Checkbox } from '../ui';

export interface FilterChecboxProps {
  text: string;
  value: string;
  endAdornment?: ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string
}

export const FilterCheckbox: FC<FilterChecboxProps> = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
  name,
}) => {
  return (
    <div className='flex items-center space-x-2'>
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className='rounded-[8px] w-6 h-6'
        // id={`checkbox-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className='leading-none cursor-pointer flex-1'
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
