import { create } from "zustand";
import { persist } from "zustand/middleware";
import { productProps } from "../types/products";

type productCart = {
  quantity: number;
} & productProps;

type cartProps = {
  cart: productCart[];
  showCart: boolean;
  addNewProduct: (newProduct: productProps) => void;
  removeOneProduct: (productId: number) => void;
  removeProduct: (productId: number) => void;
  handleShowCart: () => void;
};

export const productStore = create<cartProps>()(
  persist(
    (set) => ({
      cart: [],

      addNewProduct: (newProduct: productProps) =>
        set((state) => {
          const item = state.cart.find(
            (product) => product?.id === newProduct.id
          );
          if (item) {
            const updatedCart = state.cart.map((i) => {
              if (i.id === item.id) {
                return { ...i, quantity: i.quantity + 1 };
              }
              return i;
            });
            return { cart: updatedCart };
          } else {
            return { cart: [...state.cart, { ...newProduct, quantity: 1 }] };
          }
        }),

      removeOneProduct: (productId: number) =>
        set((state) => {
          const updatedCart = state.cart.map((i) => {
            if (i.id === productId) {
              return { ...i, quantity: i.quantity - 1 };
            }
            return i;
          });
          return { cart: updatedCart };
        }),

      removeProduct: (productId: number) =>
        set((state) => {
          const updatedCart = state.cart.filter(
            (item) => item.id !== productId
          );
          return { cart: updatedCart };
        }),

      showCart: false,
      handleShowCart: () => set((state) => ({ showCart: !state.showCart })),
    }),
    {
      name: "cart-storage",
    }
  )
);
