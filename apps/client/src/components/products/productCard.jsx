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

export function ProductsCard({ product, variant = "default" }) {
  const cart = useCart();
  const [isAddingToCart, startAddingToCart] = React.useTransition();
  const isAdded = useMemo(() => {
    return cart.cartProducts.find((prod) => prod.id === product.id);
  }, [cart.cartProducts]);

  return (
    <div>
      <Card className={cn("size-full overflow-hidden rounded-sm")}>
        <CardHeader className="border-b p-0">
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
            <CardTitle className=" ">{product.name}</CardTitle>
          </div>
          <CardDescription className="line-clamp-1 mb-5">
            {product.description}
          </CardDescription>
          <div className="mt-10">
            <CardTitle className="line-clamp-1 text-xl">
              {product.price}
              <span className="text-sm ml-1 text-slate-400">Birr</span>
            </CardTitle>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-1">
          {/* {variant === "default" ? ( */}
          <div className="flex w-full items-center space-x-2">
            {/* <Button
            aria-label="Add to cart"
            size="sm"
            className="h-8 w-full rounded-sm"
            onClick={() => {
              startAddingToCart(async () => {
                try {
                  await addToCart({
                    productId: product.id,
                    quantity: 1,
                  });
                  toast.success("Added to cart.");
                } catch (err) {
                  catchError(err);
                }
              });
            }}
            disabled={isAddingToCart}
          >
            {isAddingToCart && (
              <Icons.spinner
                className="mr-2 size-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Add to cart
          </Button> */}
            <Button
              aria-label={isAdded ? "Remove from cart" : "Add to cart"}
              size="lg"
              className="h-8 w-full rounded-sm"
              onClick={() =>
                isAdded
                  ? cart.removeFromCart(product.id)
                  : cart.addToCart(product)
              }
              disabled={isAddingToCart}
            >
              {isAdded ? (
                <ResetIcon className="mr-2 size-4" aria-hidden="true" />
              ) : (
                <PlusIcon className="mr-2 size-4" aria-hidden="true" />
              )}
              {isAdded ? "Remove From Cart" : "Add To Cart"}
            </Button>

            <ProductDetail product={product} />
          </div>
          {/* // ) : ( */}
          {/*  <Button
          aria-label={isAdded ? "Remove from cart" : "Add to cart"}
          size="sm"
          className="h-8 w-full rounded-sm"
          onClick={() =>
            isAdded ? cart.removeFromCart(product.id) : cart.addToCart(product)
          }
          disabled={isAddingToCart}
        >
          {isAdded ? (
            <Icons.spinner
              className="mr-2 size-4 animate-spin"
              aria-hidden="true"
            />
          ) : isAdded ? (
            <CheckIcon className="mr-2 size-4" aria-hidden="true" />
          ) : (
            <PlusIcon className="mr-2 size-4" aria-hidden="true" />
          )}
          {isAdded ? "Added" : "Add to cart"}
        </Button> */}
          {/* )} */}
        </CardFooter>
      </Card>
    </div>
  );
}
