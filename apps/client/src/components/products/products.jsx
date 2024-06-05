import React from "react";

import PostsList from "../../components/products/products-list";
import ProductsList from "../../components/products/products-list";

import { Button } from "../ui/button";

export default function ProductPage() {
  return (
    <div>
      <div>
        {/* {apidata.map((category) => (
          <CategoryCard key={category.id} categories={category} />
        ))} */}

        {/* <CategoryCard />   */}
        <h1 className="text-xl font-semibold"> Categories</h1>
        <div className="mb-10 flex items-center justify-start gap-4 mt-3">
          <Button className="w-fit h-[50px] border border-bg-slate-400 rounded-lg py-2 px-3 flex items-center justify-center cursor-pointer">
            <div className="text-md font-semibold">Mobile</div>
          </Button>

          {/* <div className="w-[350px] h-[100px] border border-slate-500 rounded-md">
        <div className="card  ">Skate shop</div>
      </div> */}
        </div>
        <h1 className="text-xl font-semibold mb-2"> Products</h1>
      </div>
      <PostsList />
      {/* <ProductsList /> */}
    </div>
  );
}
