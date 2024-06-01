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

const getData = async () => {
  const res = await fetch(`http://localhost:8000/products`);

  if (!res.ok) {
    throw new Error("failed to fetch user data");
  }

  return res.json();
};
async function LandingPage() {
  const apidata = await getData();
  return (
    <div>
      <div>
        <div className="mt-16 max-w-4xl mx-auto text-center relative z-10 p-10">
          <h1 className="md:text-5xl text-4xl font-extrabold mb-6 md:!leading-[75px]">
            Foundation for your commerce platform
          </h1>
          <p className="text-base">
            Embark on a gastronomic journey with our curated dishes, delivered
            promptly to your doorstep. Elevate your dining experience today.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
        <div className="mb-10 flex items-center justify-center gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Mobile</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-[200px]">
            <CardHeader>
              <CardTitle className="text-lg">Laptops</CardTitle>
              <CardDescription></CardDescription>
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
          </Card>
          {/* <div className="w-[350px] h-[100px] border border-slate-500 rounded-md">
        <div className="card  ">Skate shop</div>
      </div> */}
        </div>

        {/* <CategoryCard />   */}
      </div>
      <PostsList />
    </div>
  );
}

export default LandingPage;
