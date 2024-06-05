"use client";

import * as React from "react";

import Link from "next/link";

import {
  CheckIcon,
  EyeOpenIcon,
  PlusIcon,
  ResetIcon,
} from "@radix-ui/react-icons";
import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@app/client/components/ui/card";
import { useCart } from "@app/client/stores/cart-store";
// import { Button } from "../ui/button";
import { useMemo } from "react";
import { Icons } from "@app/client/components/icons";
import { PlaceholderImage } from "@app/client/components/placeholder-image";
import { cn, catchError } from "@app/client/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { AspectRatio } from "../ui/aspect-ratio";
import { Image } from "lucide-react";
import ProductDetail from "./product-detail";
import { useState } from "react";

export function ProductsCard({ products, variant = "default" }) {
  const cart = useCart();
  const [isAddingToCart, startAddingToCart] = React.useTransition();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { name: "mobile" },
    { name: "laptops" },
    { name: "Laptop" },
    { name: "Hard Drive" },
    { name: "Gaming Pcs" },
    { name: "HeadPhones" },
    { name: "Gaming Console" },
    { name: "Gaming Laptops" },
    { name: "Gaming Monitors" },
  ];
  const isProductInCart = (productId) => {
    return cart.cartProducts.some(
      (cartProduct) => cartProduct.id === productId
    );
  };

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter(
      (product) => product.category.name === selectedCategory
    );
  }, [selectedCategory, products]);

  return (
    <div>
      <div className="mb-10">
        <Button
          variant="secondary"
          onClick={() => setSelectedCategory(null)}
          className={`mr-2 bg-[#f4f4f4] ${
            selectedCategory === null
              ? "bg-black text-white hover:bg-slate-800 hover:text-white"
              : ""
          }`}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            variant="secondary"
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`mr-2 bg-[#f8f8f8] ${
              selectedCategory === category.name
                ? "bg-black text-white hover:bg-slate-800 hover:text-white"
                : ""
            }`}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
        {filteredProducts.map((product) => (
          <Card className={cn("size-full  overflow-hidden rounded-sm")}>
            <CardHeader className="border-b p-0  overflow-hidden">
              <AspectRatio ratio={4 / 3}>
                {/* {product.image ? ( */}
                <img
                  src={product.image}
                  alt={"A product image"}
                  className="h-full w-full object-contain object-center"
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                  fill
                  loading="lazy"
                />
                {/* ) : (
              <PlaceholderImage className="rounded-none" asChild />
            )} */}
              </AspectRatio>
            </CardHeader>
            <span className="sr-only">{product.name}</span>

            <CardContent className="space-y-4 p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{product.name}</CardTitle>
              </div>
              {/* <CardDescription className="line-clamp-1 mb-5 text-sm">
                {product.description}
              </CardDescription> */}
              <div className="mt-10">
                <CardTitle className="line-clamp-1 text-lg">
                  {product.price}
                  <span className="text-sm ml-1 text-slate-400">Birr</span>
                </CardTitle>
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-1">
              {/* {variant === "default" ? ( */}
              <div className="flex w-full items-center space-x-2">
                <Button
                  aria-label={
                    isProductInCart(product.id)
                      ? "Remove from cart"
                      : "Add to cart"
                  }
                  size="lg"
                  className="h-8 w-full rounded-sm"
                  onClick={() =>
                    isProductInCart(product.id)
                      ? cart.removeFromCart(product.id)
                      : cart.addToCart(product)
                  }
                  disabled={isAddingToCart}
                >
                  {isProductInCart(product.id)
                    ? "Remove from cart"
                    : "Add to cart"}
                </Button>

                <ProductDetail product={product} />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
