"use client";

import Cart from "@app/client/components/global/cart";
import { Icons } from "@app/client/components/icons";
import { Button } from "@app/client/components/ui/button";
import { Input } from "@app/client/components/ui/input";
import { ScrollArea, ScrollBar } from "@app/client/components/ui/scroll-area";

import { useCheckout } from "@app/client/stores/checkoutStore";

export const works = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

export default function Checkout() {
  const check = useCheckout();
  const totalSum = check.checkoutProducts.reduce((total, product) => {
    return total + product.totalPrice;
  }, 0);

  return (
    <div class="font-[sans-serif] bg-white p-4 h-[800px] flex items-center">
      <div class="md:max-w-5xl max-w-xl mx-auto">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
          <div class="lg:col-span-2 max-md:order-1">
            <div className="flex items-center justify-start mb-5">
              <Icons.bot className="size-7" />
              <span className="font-bold ">TechShop</span>
            </div>
            <h2 class="text-3xl font-extrabold text-gray-800">
              Make a payment
            </h2>
            <p class="text-gray-800 text-sm mt-4">
              Complete your transaction swiftly with chapa
            </p>

            <form class="mt-8 max-w-lg">
              <div class="grid gap-4">
                <Input
                  type="text"
                  placeholder="Address"
                  class="px-4 py-3.5  rounded-xl border  text-gray-800 w-full  focus:bg-transparent "
                />

                <div class="flex  rounded-md overflow-hidden">
                  <Input
                    type="number"
                    placeholder="Card Number"
                    class="px-4 py-3.5  rounded-xl border text-gray-800 w-full text-sm outline-none bg-transparent"
                  />
                </div>

                <div class="grid grid-cols-2 gap-6">
                  <Input
                    type="number"
                    placeholder="EXP."
                    class="px-4 py-3.5  rounded-xl border  text-gray-800 w-full  focus:bg-transparent "
                  />
                  <Input
                    type="number"
                    placeholder="CVV"
                    class="px-4 py-3.5  rounded-xl border  text-gray-800 w-full  focus:bg-transparent "
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-4/12 mt-4 px-4 py-3.5"
                // type="button"
                // class="mt-4 w-40 py-3.5 text-sm text-white rounded-md  tracking-wide"
              >
                Pay{" "}
              </Button>
            </form>
          </div>

          <div class="border p-6 rounded-md w-[500px]">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">Over View</span>
              <span className="text-gray-800 text-sm ml-2">
                {check.checkoutProducts.length} items
              </span>
            </div>
            <ScrollArea className="w-full whitespace-nowrap rounded-md ">
              <div className="flex w-max space-x-4 p-4 mr-3">
                {check.checkoutProducts.map((product) => (
                  <div
                    key={product.id}
                    className="shrink-0 border rounded-xl bg-gray-200 overflow-hidden py-2 px-2"
                  >
                    <div className="overflow-hidden rounded-lg w-full h-[200px] border-b">
                      <img
                        src={product.image}
                        alt={`Photo by ${product.name}`}
                        className=" h-full w-full object-cover"
                        width={300}
                        height={400}
                      />
                    </div>
                    {/* <figcaption className="pt-2 text-xs text-muted-foreground">
                      Photo by{" "}
                      <span className="font-semibold text-foreground">
                        {product.name}
                      </span>
                    </figcaption> */}
                    <div className="px-2 py-2">
                      <h1 className="text-xl  font-bold mt-4 ">
                        {product.name}
                      </h1>
                      <div className="mt-3">
                        <h1 className="text-lg font-semibold ">
                          {product.price}
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <h2 class="text-3xl font-extrabold text-gray-800">
              {totalSum}
              <span className="text-sm text-gray-400 font-light ml-2">
                Birr
              </span>
            </h2>

            <ul class="text-gray-800 mt-6 space-y-3">
              {/* <li class="flex flex-wrap gap-4 text-sm">
                Split Sneakers <span class="ml-auto font-bold">$150.00</span>
              </li>
              <li class="flex flex-wrap gap-4 text-sm">
                Echo Elegance <span class="ml-auto font-bold">$90.00</span>
              </li>
              <li class="flex flex-wrap gap-4 text-sm">
                Tax <span class="ml-auto font-bold">$10.00</span>
              </li> */}

              <li class="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">
                Total <span class="ml-auto">{totalSum} Birr</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
