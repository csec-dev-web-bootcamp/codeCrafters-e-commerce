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
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@app/client/lib/utils";
import { EyeNoneIcon, EyeOpenIcon, ResetIcon } from "@radix-ui/react-icons";
import { EyeIcon } from "lucide-react";
function ProductDetail({ product }) {
  const cart = useCart();

  const isAdded = useMemo(() => {
    return cart.cartProducts.find((prod) => prod.id === product.id);
  }, [cart.cartProducts]);

  return (
    <Sheet>
      <SheetTrigger className="relative">
        <Button
          href={`/preview/product/${product.id}`}
          title="Preview"
          className={cn(
            buttonVariants({
              variant: "secondary",
              size: "icon",
              className: "h-8 w-8 shrink-0",
            })
          )}
        >
          <EyeOpenIcon className="size-4" aria-hidden="true" />
          <span className="sr-only">Preview</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <ScrollArea className="h-[calc(100vh_-_8rem)] pe-3">
            <div class="font-sans">
              <div class="p-6 lg:max-w-6xl max-w-2xl mx-auto">
                <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
                  <div class="w-full lg:sticky top-0 sm:flex gap-2">
                    <div class="sm:space-y-3 w-16 max-sm:flex max-sm:mb-4 max-sm:gap-4"></div>
                    <img
                      src={product.image}
                      alt="Product"
                      class="w-4/5 rounded object-cover"
                    />
                  </div>

                  <div>
                    <div class="lg:col-span-2">
                      <h2 class="text-2xl font-extrabold text-[#333]">
                        {product.name}
                      </h2>
                      <div class="flex flex-wrap gap-4 mt-4">
                        <p class="text-[#333] text-3xl font-bold">
                          {product.price}{" "}
                          <span className="text-slate-400 text-base font-thin">
                            Birr
                          </span>
                        </p>
                      </div>

                      {/* <div class="flex space-x-2 mt-4">
                        <svg
                          class="w-5 fill-[#333]"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg
                          class="w-5 fill-[#333]"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg
                          class="w-5 fill-[#333]"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg
                          class="w-5 fill-[#333]"
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
                        <h4 class="text-[#333] text-base">500 Reviews</h4>
                      </div> */}
                    </div>

                    <div class="mt-8">
                      <div class="mt-10">
                        <h3 class="text-lg font-bold text-gray-800">
                          Description
                        </h3>
                        <p class="mt-2 text-base text-gray-600 mb-10">
                          {product.description}
                        </p>
                        <h3 class="text-lg font-bold text-gray-800">
                          Choose a Color
                        </h3>
                        <div class="flex flex-wrap gap-3 mt-4">
                          <button
                            type="button"
                            class="w-10 h-10 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                          ></button>
                          <button
                            type="button"
                            class="w-10 h-10 bg-gray-300 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                          ></button>
                          <button
                            type="button"
                            class="w-10 h-10 bg-gray-100 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                          ></button>
                          <button
                            type="button"
                            class="w-10 h-10 bg-blue-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                          ></button>
                        </div>
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
