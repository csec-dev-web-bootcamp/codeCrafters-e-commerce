import { create } from "zustand";
import { useCheckout } from "./checkoutStore";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCart = create(
  persist(
    (set) => ({
      cartProducts: [],

      addToCart: (product) =>
        set((state) => {
          const currentState = JSON.parse(JSON.stringify(state));

          currentState.cartProducts.push({
            ...product,
            totalPrice: product.price,
            amount: 1,
          });

          return currentState;
        }),

      removeFromCart: (id) =>
        set((state) => {
          const currentState = JSON.parse(JSON.stringify(state));

          currentState.cartProducts = currentState.cartProducts.filter(
            (product) => product.id !== id
          );

          return currentState;
        }),

      addProductAmount: (id) =>
        set((state) => {
          const currentState = JSON.parse(JSON.stringify(state));

          currentState.cartProducts = currentState.cartProducts.map((product) =>
            product.id === id
              ? {
                  ...product,
                  amount: product.amount + 1,
                  totalPrice: product.price * (product.amount + 1),
                }
              : product
          );

          return currentState;
        }),

      minusProductAmount: (id) =>
        set((state) => {
          const currentState = JSON.parse(JSON.stringify(state));

          currentState.cartProducts = currentState.cartProducts.map((product) =>
            product.id === id && product.amount > 1
              ? {
                  ...product,
                  amount: product.amount - 1,
                  totalPrice: product.price * (product.amount - 1),
                }
              : product
          );

          return currentState;
        }),

      checkoutProduct: () =>
        set((state) => {
          const checkoutStore = useCheckout.getState();

          state.cartProducts.forEach((product) => {
            checkoutStore.addToCheckout(product);
          });

          return { ...state, cartProducts: [] };
        }),
    }),
    {
      name: "cartProducts",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
