import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@app/client/components/ui/custom-sheet";
import { useCart } from "@app/client/stores/cart-store";

import { useMemo } from "react";
import { ScrollArea } from "../ui/scroll-area";
function ProductDetail({ product }) {
    const cart = useCart();

    const isAdded = useMemo(() => {
      return cart.cartProducts.find((prod) => prod.id === product.id);
    }, [cart.cartProducts]);
  
  return (
    <Sheet>
      <SheetTrigger className="relative">detail</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <ScrollArea className="h-[calc(100vh_-_8rem)] pe-3">
            <div class="font-sans">
              <div class="p-6 lg:max-w-6xl max-w-2xl mx-auto">
                <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
                  <div class="w-full lg:sticky top-0 sm:flex gap-2">
                    <div class="sm:space-y-3 w-16 max-sm:flex max-sm:mb-4 max-sm:gap-4">
                      <img
                        src={product.url}
                        alt="Product1"
                        class="w-full cursor-pointer rounded-sm outline"
                      />
                      <img
                        src={product.url}
                        alt="Product1"
                        class="w-full cursor-pointer rounded-sm outline"
                      />
                      <img
                        src={product.url}
                        alt="Product1"
                        class="w-full cursor-pointer rounded-sm outline"
                      />
                      <img
                        src={product.url}
                        alt="Product1"
                        class="w-full cursor-pointer rounded-sm outline"
                      />
                      <img
                        src={product.url}
                        alt="Product1"
                        class="w-full cursor-pointer rounded-sm outline"
                      />
                      <img
                        src={product.url}
                        alt="Product1"
                        class="w-full cursor-pointer rounded-sm outline"
                      />
                    </div>
                    <img
                      src={product.url}
                      alt="Product"
                      class="w-4/5 rounded object-cover"
                    />
                  </div>

                  <div>
                    <h2 class="text-2xl font-extrabold text-gray-800">
                      {product.name}
                    </h2>
                    <div class="flex flex-wrap gap-4 mt-4">
                      <p class="text-gray-800 text-xl font-bold">
                        ${product.price - (2 * product.price) / 100}
                      </p>
                      <p class="text-gray-400 text-xl">
                        <strike>${product.price}</strike>{" "}
                        <span class="text-sm ml-1">Tax included</span>
                      </p>
                    </div>

                    <div class="flex space-x-2 mt-4">
                      <svg
                        class="w-5 fill-gray-800"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        class="w-5 fill-gray-800"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        class="w-5 fill-gray-800"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        class="w-5 fill-gray-800"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        class="w-5 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                    </div>

                    <div class="mt-8">
                      <h3 class="text-lg font-bold text-gray-800">Sizes</h3>
                      <div class="flex flex-wrap gap-4 mt-4">
                        <button
                          type="button"
                          class="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                        >
                          SM
                        </button>
                        <button
                          type="button"
                          class="w-12 h-12 border-2 hover:border-gray-800 border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                        >
                          MD
                        </button>
                        <button
                          type="button"
                          class="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                        >
                          LG
                        </button>
                        <button
                          type="button"
                          class="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                        >
                          XL
                        </button>
                      </div>
                      <button
                        type="button"
                        className="w-full mt-4 px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded"
                        onClick={() =>
                            isAdded
                              ? cart.removeFromCart(product.id)
                              : cart.addToCart(product)
                          }
                        >
                          {isAdded ? "remove from cart" : "add to cart"}
                      </button>
                      
                    </div>

                    <div class="mt-8">
                      <h3 class="text-lg font-bold text-gray-800">
                        About the item
                      </h3>
                      <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                        {product.description}
                      </ul>
                    </div>

                    <div class="mt-8 max-w-md">
                      <h3 class="text-lg font-bold text-gray-800">
                        Reviews(10)
                      </h3>
                      <div class="space-y-3 mt-4">
                        <div class="flex items-center">
                          <p class="text-sm text-gray-800 font-bold">5.0</p>
                          <svg
                            class="w-5 fill-gray-800 ml-1"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <div class="bg-gray-300 rounded w-full h-2 ml-3">
                            <div class="w-2/3 h-full rounded bg-gray-800"></div>
                          </div>
                          <p class="text-sm text-gray-800 font-bold ml-3">
                            66%
                          </p>
                        </div>

                        <div class="flex items-center">
                          <p class="text-sm text-gray-800 font-bold">4.0</p>
                          <svg
                            class="w-5 fill-gray-800 ml-1"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <div class="bg-gray-300 rounded w-full h-2 ml-3">
                            <div class="w-1/3 h-full rounded bg-gray-800"></div>
                          </div>
                          <p class="text-sm text-gray-800 font-bold ml-3">
                            33%
                          </p>
                        </div>

                        <div class="flex items-center">
                          <p class="text-sm text-gray-800 font-bold">3.0</p>
                          <svg
                            class="w-5 fill-gray-800 ml-1"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <div class="bg-gray-300 rounded w-full h-2 ml-3">
                            <div class="w-1/6 h-full rounded bg-gray-800"></div>
                          </div>
                          <p class="text-sm text-gray-800 font-bold ml-3">
                            16%
                          </p>
                        </div>

                        <div class="flex items-center">
                          <p class="text-sm text-gray-800 font-bold">2.0</p>
                          <svg
                            class="w-5 fill-gray-800 ml-1"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <div class="bg-gray-300 rounded w-full h-2 ml-3">
                            <div class="w-1/12 h-full rounded bg-gray-800"></div>
                          </div>
                          <p class="text-sm text-gray-800 font-bold ml-3">8%</p>
                        </div>

                        <div class="flex items-center">
                          <p class="text-sm text-gray-800 font-bold">1.0</p>
                          <svg
                            class="w-5 fill-gray-800 ml-1"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                          </svg>
                          <div class="bg-gray-300 rounded w-full h-2 ml-3">
                            <div class="w-[6%] h-full rounded bg-gray-800"></div>
                          </div>
                          <p class="text-sm text-gray-800 font-bold ml-3">6%</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        class="w-full mt-8 px-4 py-2 bg-transparent border-2 border-gray-800 text-gray-800 font-bold rounded"
                      >
                        Read all reviews
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
          <div className="">
            <SheetTrigger className="relative" asChild></SheetTrigger>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default ProductDetail;
