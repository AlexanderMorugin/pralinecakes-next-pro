import { getCartDetails } from '@/lib';
import { CartStateItem } from '@/lib/get-cart-details';
import { Api } from '@/services/api-client';
import { create } from 'zustand';

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];

  /** Получение товаров из корзины */
  fetchCartItems: () => Promise<void>;

  /** Запрос на обновление количества товара */
  // updateItemQuantity: (id: number, quantity: number) => Promise<void>;

  /** Запрос на добавление товара */
  // TODO: Типизировать values
  // addCartItem: (values: any) => Promise<void>;

  /** Запрос на удаление товара */
  // removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set) => ({
  loading: true,
  error: false,
  totalAmount: 0,
  items: [],

  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.fetchCart();
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },

  // updateItemQuantity: async (id: number, quantity: number) => {},

  // addCartItem: async (values: any) => {},

  // removeCartItem: async (id: number) => {},
}));
