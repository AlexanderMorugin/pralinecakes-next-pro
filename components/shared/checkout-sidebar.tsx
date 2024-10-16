import { type FC } from 'react';
import { CheckoutItemDetails, WhiteBlock } from '.';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import { Button } from '../ui';

const VAT = 15;
const DELIVERY_PRICE = 350;

interface Props {
  totalAmount: number;
}

export const CheckoutSidebar: FC<Props> = ({ totalAmount }) => {
  const vatPrice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE;

  return (
    <div className='w-[450px]'>
      <WhiteBlock className='p-6 sticky top-4'>
        <div className='flex flex-col gap-1'>
          <span className='text-xl'>Итого:</span>
          <span className='text-[32px] font-extrabold'>{totalPrice} р</span>
        </div>

        <CheckoutItemDetails
          title={
            <div className='flex items-center'>
              <Package size={18} className='mr-2 text-gray-400' />
              Стоимость товаров:
            </div>
          }
          value={`${totalAmount}`}
        />
        <CheckoutItemDetails
          title={
            <div className='flex items-center'>
              <Percent size={18} className='mr-2 text-gray-400' />
              Налоги:
            </div>
          }
          value={`${vatPrice}`}
        />
        <CheckoutItemDetails
          title={
            <div className='flex items-center'>
              <Truck size={18} className='mr-2 text-gray-400' />
              Доставка:
            </div>
          }
          value={`${DELIVERY_PRICE}`}
        />

        <Button
          type='submit'
          className='w-full h-14 rounded-2xl mt-6 text-base font-bold'
        >
          Перейти к оплате
          <ArrowRight className='w-5 ml-2' />
        </Button>
      </WhiteBlock>
    </div>
  );
};
