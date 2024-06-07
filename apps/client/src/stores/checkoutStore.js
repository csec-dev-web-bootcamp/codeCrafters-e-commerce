import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";
import { create } from "zustand";
import { useCart } from "./cart-store";
import { jsx } from "react/jsx-runtime";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCheckout = create(
  persist(
    (set) => ({
      checkoutProducts: [],

      addToCheckout: (product) =>
        set((state) => {
          const currentState = { ...state };

          currentState.checkoutProducts.push(product);

          return currentState;
        }),

      revertToCart: (id) =>
        set((state) => {
          const cartStore = useCart.getState();

          const product = state.checkoutProducts.find(
            (product) => product.id === id
          );

          if (product) {
            const updatedCheckout = state.checkoutProducts.filter(
              (product) => product.id !== id
            );

            cartStore.addToCart(product);

            return { ...state, checkoutProducts: updatedCheckout };
          }

          return state;
        }),

      removeFromCheckout: (id) =>
        set((state) => {
          const currentState = JSON.parse(JSON.stringify(state));

          currentState.checkoutProducts = currentState.checkoutProducts.filter(
            (product) => product.id !== id
          );

          return currentState;
        }),

      clearCheckout: () =>
        set(() => ({
          checkoutProducts: [],
        })),
    }),
    {
      name: "checkoutProducts",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
