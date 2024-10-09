import { CartDTO } from '@/services/dto/cart.dto';
import { calcCartItemTotalPrice } from './calc-cart-item-total-price';

export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  productPrice: number;
  productSize?: number | null;
  productType?: number | null;
  ingredients: Array<{ name: string; price: number }>;
  disabled?: boolean;
};

interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number;
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
  const items = data.items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productItem.product.name,
    imageUrl: item.productItem.product.imageUrl,
    productPrice: calcCartItemTotalPrice(item),
    productSize: item.productItem.productSize,
    productType: item.productItem.productType,
    disabled: false,
    ingredients: item.ingredients.map((el) => ({
      name: el.name,
      price: el.price,
    })),
  })) as CartStateItem[];

  return {
    items,
    totalAmount: data.totalAmount,
  };
};
