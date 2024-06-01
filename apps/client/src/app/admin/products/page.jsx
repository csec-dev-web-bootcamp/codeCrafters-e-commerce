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

const columns = [
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
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Products" />
      {/* <ProductsForm /> */}
      <ProductForm />
      <DataTable columns={columns} data={products} />
    </div>
  );
}
