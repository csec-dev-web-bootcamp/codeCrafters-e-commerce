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
import { Input } from "@app/client/components/ui/input";
import { Label } from "@app/client/components/ui/label";
import { Textarea } from "@app/client/components/ui/textarea";
import { Button } from "@app/client/components/ui/button";
import useMutation from "@app/client/hooks/use-mutation";

import { useState } from "react";
import { createProduct } from "@app/client/data/product.data";

export default function ProductForm() {
  //   const { isMutating, startMutation } = useMutation();
  const [formState, setFormState] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await fetch("http://localhost:8000/products", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formState),
  //     });

  //     if (res.ok) {
  //       console.log("Successfully registered", res);
  //     } else {
  //       console.error("Error registering product", res);
  //     }
  //   } catch (error) {
  //     console.error("Error adding product:", error);
  //   }
  // };

  function onSubmit(formState) {
    startMutation(async () => {
      const result = await createProduct(formState);
      form.reset();
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-3/12">ADD Products</Button>
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
            <div className="flex flex-col justify-center w-full">
              <Label htmlFor="category" className="text-left m-2">
                Category
              </Label>
              <Input
                id="category"
                type="text"
                placeholder="Category"
                value={formState.category}
                onChange={handleChange}
                required
              />
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
            <Button type="submit">Add Product</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}