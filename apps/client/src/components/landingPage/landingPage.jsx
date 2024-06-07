import React from "react";
import PostsList from "../../components/products/products-list";
import CategoryCard from "../../components/categories/categoryCard";

// const getData = async () => {
//   const res = await fetch("http://localhost:8000/categories");

//   if (!res.ok) {
//     throw new Error("failed to fetch user data");
//   }

//   return res.json();
// };

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@app/client/components/ui/card";
import ProductsList from "../../components/products/products-list";
import { getManyProducts } from "@app/client/data/product.data";

async function LandingPage() {
  return (
    <div>
      <div>
        <div className="mt-16 max-w-4xl mx-auto text-center relative z-10 p-10">
          <h1 className="md:text-5xl text-3xl font-extrabold mb-6 md:!leading-[75px]">
            Right place for your Electronics Needs
          </h1>
          <p className="text-base">
            Find your favorite electronics from our variety of electronics store
            and every category is available in this platform just search and you
            we hope you will find the product that you need
          </p>
          <div className="mt-10">
            {/* <button className="px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800">
              Get started today
            </button> */}
          </div>
        </div>
        {/* {apidata.map((category) => (
          <CategoryCard key={category.id} categories={category} />
        ))} */}
        <div className="mb-16 flex items-center justify-center gap-4">
          <Card className="w-[200px] hover:bg-slate-100">
            <CardHeader>
              <CardTitle className="text-lg">Mobile</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-[200px] hover:bg-slate-100">
            <CardHeader>
              <CardTitle className="text-lg">Laptops</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-[200px] hover:bg-slate-100">
            <CardHeader>
              <CardTitle className="text-lg">Gaming pcs</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-[200px] hover:bg-slate-100">
            <CardHeader>
              <CardTitle className="text-lg">HeadPhones</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
          </Card>
          {/* <div className="w-[350px] h-[100px] border border-slate-500 rounded-md">
        <div className="card  ">Skate shop</div>
      </div> */}
        </div>

        {/* <CategoryCard />   */}
      </div>
      <ProductsList />
    </div>
  );
}

export default LandingPage;
