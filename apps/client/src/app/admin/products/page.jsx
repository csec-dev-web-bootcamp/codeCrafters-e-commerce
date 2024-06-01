/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */

import { DataTable } from "../../../components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "../../../components/PageTitle";
import { Button } from "@app/client/components/ui/button";
import { getRequestMeta } from "next/dist/server/request-meta";
import Image from "next/image";
import ProductForm from "@app/client/components/forms/product/productForm";
import { getManyProducts } from "@app/client/data/product.data";
import getCategories from "@app/client/data/category.data";
import AdminProduct from "@app/client/components/admin/AdminProduct";

const columns = [
  {
    accessorKey: "image",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center rounded-full">
          <img
            className="h-[100px] w-[100px] object-cover object-center rounded-xl"
            src={`https://st3.depositphotos.com/9998432/13335/v/380/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    },
  },
  {
    accessorKey: "",
    header: "Products",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },

  // {
  //   accessorKey: "category.name",
  //   header: "Category",
  // },
];

export default async function Products({}) {
  const products = await getManyProducts();
  const categories = await getCategories();
  console.log(categories);

  const categoryArray = Object.keys(categories).map((key) => ({
    id: key,
    ...categories[key],
  }));

  return <AdminProduct categories={categoryArray} products={products} />;
}
