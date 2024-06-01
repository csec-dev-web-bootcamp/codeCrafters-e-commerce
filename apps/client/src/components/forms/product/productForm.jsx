"use client";

import React from "react";
// import { Button } from "@app/client/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@app/client/components/ui/select";
import { Input } from "@app/client/components/ui/input";
import { Label } from "@app/client/components/ui/label";
import { Textarea } from "@app/client/components/ui/textarea";
import { Button } from "@app/client/components/ui/button";
import useMutation from "@app/client/hooks/use-mutation";

import { useState } from "react";
import { createProduct } from "@app/client/data/product.data";
import { PlusCircledIcon } from "@radix-ui/react-icons";

export default function ProductForm({ categories }) {
  console.log(typeof categories);
  const { isMutating, startMutation } = useMutation();
  const [formState, setFormState] = useState({
    name: "",
    price: "",
    description: "",
    categoryId: "",
    image: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [id]: id === "price" ? parseFloat(value) : value,
    }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    const submissionState = {
      ...formState,
      price: parseFloat(formState.price),
    };

    const response = await startMutation(async () => {
      try {
        const product = await createProduct(formState);
        console.log(product);
        return product;
      } catch (error) {
        console.error("Error creating product:", error);

        return { error: error.message + "Valhala" };
      }
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-3/12">
          <PlusCircledIcon />
          ADD Products
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Products</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col justify-center w-full">
              <Label htmlFor="name" className="text-left m-2">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Product Name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col justify-center w-full">
              <Label htmlFor="price" className="text-left m-2">
                Price
              </Label>
              <Input
                id="price"
                type="number"
                placeholder="Price"
                value={formState.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col justify-center w-full">
              <Label htmlFor="description" className="text-left m-2">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Description"
                value={formState.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full">
              <Label className="text-right ml-2">Category</Label>

              <Select
                id="categoryId"
                value={formState.categoryId}
                onValueChange={(value) =>
                  setFormState((prev) => ({
                    ...prev,
                    categoryId: value,
                  }))
                }
              >
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col justify-center w-full">
              <Label htmlFor="image" className="text-left m-2">
                Image URL
              </Label>
              <Input
                id="image"
                type="text"
                placeholder="Image URL"
                value={formState.image}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button className="mt-4" type="submit" disabled={isMutating}>
              Add Product
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
