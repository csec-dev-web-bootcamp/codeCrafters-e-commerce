import React from "react";

import PostsList from "../../components/products/products-list";
import ProductsList from "../../components/products/products-list";

import { Button } from "../ui/button";

import { Icons } from "../icons";

export default function ProductPage() {
  return (
    <div>
      <div>
        <div className="banner w-full h-[300px] mb-16 mt-10 rounded-2xl bg-[#FAFAFA] overflow-hidden border">
          <div className="w-full h-full flex items-center overflow-hidden justify-between">
            <div className="px-16">
              <div className="flex items-center justify-center w-fit mb-5">
                <Icons.bot className="size-6" aria-hidden="true" />
                <p className="ml-2 text-base font-bold">TechShop</p>
              </div>
              <h1 className="text-3xl font-semibold">
                <span className="font-bold leading-6">LIMITED TIME OFFER</span>{" "}
                <br></br>
                From Our Stocks
              </h1>
            </div>
            <img
              src="https://photographylife.com/cdn-cgi/imagedelivery/GrQZt6ZFhE4jsKqjDEtqRA/photographylife.com/2022/06/Apple_MacBook-Pro_14-16-inch_10182021-1.jpg/w=1960,h=1274"
              alt={"A product image"}
              className="h-full w-[500px] object-cover object-center pr-10"
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              fill
              loading="lazy"
            />
          </div>
        </div>
        <h1 className="text-2xl font-semibold mb-4"> Categories</h1>
      </div>
      <PostsList />
      {/* <ProductsList /> */}
    </div>
  );
}
