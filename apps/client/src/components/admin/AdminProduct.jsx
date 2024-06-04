"use client";
import React from "react";
import PageTitle from "../PageTitle";
import ProductForm from "../forms/product/productForm";
import { DataTable } from "../DataTable";
import { Icons } from "../icons";

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
          <p>{row.getValue("name")}</p>
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
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "",
    header: "Delete",
    cell: ({ row }) => {
      return <Icons.cart className="size-6" aria-hidden="true" />;
    },
  },
];

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
