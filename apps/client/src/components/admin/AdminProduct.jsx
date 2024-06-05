"use client";
import React from "react";
import PageTitle from "../PageTitle";
import ProductForm from "../forms/product/productForm";
import { DataTable } from "../DataTable";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Icons } from "../icons";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { deleteProduct } from "@app/client/data/product.data";
// import { Icons } from "@app/client/components/icons";

const columns = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center rounded-full">
          <img
            className="h-[50px] w-[50px] object-cover object-center rounded-xl"
            src={row.getValue("image")}
            alt={row.getValue("name")}
          />
          <p className="">{row.getValue("name")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Products",
    cell: ({ row }) => {
      return <p className="font-bold">{row.getValue("name")}</p>;
    },
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              {/* <Icons.MoreHorizontal className="h-4 w-4" /> */}
              <DotsHorizontalIcon className=""></DotsHorizontalIcon>
              <span className="sr-only">Toggle Actions Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => handleEdit(row)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleDelete(row)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const handleEdit = (row) => {
  console.log("Edit", row.original);
};

const handleDelete = async (row) => {
  try {
    await deleteProduct(row.original.id);
    console.log("Delete", row.original.name + " deleted");
  } catch (e) {
    console.log(e);
    console.log("Delete", row.original.name + " not deleted");
  }
};

export default function AdminProduct({ categories, products }) {
  return (
    <div>
      <div className="flex flex-col gap-5  w-full">
        <PageTitle title="Products" />
        {/* <ProductsForm /> */}
        <ProductForm categories={categories} />
        <DataTable columns={columns} data={products} />
      </div>
    </div>
  );
}
