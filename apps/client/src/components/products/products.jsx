import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@app/client/components/ui/card";

import PostsList from "../../components/products/products-list";
import ProductsList from "../../components/products/products-list";
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
          {/* <Card>
            <CardHeader>
              <CardTitle className="text-lg">Mobile</CardTitle>
            </CardHeader>
          </Card>
          <Card className="w-[200px] h-[50px]">
            <CardHeader>
              <CardTitle className="text-lg">Laptops</CardTitle>
            </CardHeader>
          </Card>
          <Card className="w-[200px]">
            <CardHeader>
              <CardTitle className="text-lg">Accessories</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-[200px]">
            <CardHeader>
              <CardTitle className="text-lg">Mobile</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
          </Card> */}

          <div className="w-fit h-[50px] border border-bg-slate-400 rounded-lg py-2 px-3 flex items-center justify-centers">
            <div className="text-md font-semibold"> Mobile</div>
          </div>
          <div className="w-fit h-[50px] border border-bg-slate-400 rounded-lg py-2 px-3 flex items-center justify-centers">
            <div className="text-md font-semibold"> Laptops</div>
          </div>
          <div className="w-fit h-[50px] border border-bg-slate-400 rounded-lg py-2 px-3 flex items-center justify-centers">
            <div className="text-md font-semibold"> Hard Drive</div>
          </div>
          <div className="w-fit h-[50px] border border-bg-slate-400 rounded-lg py-2 px-3 flex items-center justify-centers">
            <div className="text-md font-semibold"> Gaming Pcs</div>
          </div>
          <div className="w-fit h-[50px] border border-bg-slate-400 rounded-lg py-2 px-3 flex items-center justify-centers">
            <div className="text-md font-semibold"> HeadPhones</div>
          </div>
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
