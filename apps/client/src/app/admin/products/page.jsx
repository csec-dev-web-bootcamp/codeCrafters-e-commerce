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

  {
    accessorKey: "category.name",
    header: "Category",
  },
];

const getData = async () => {
  const res = await fetch("http://localhost:8000/products");

  if (!res.ok) {
    throw new Error("failed to fetch user data");
  }

  return res.json();
};

export default async function SettingsPage({}) {
  const apidata = await getData();

  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Settings" />
      <Button className="w-3/12">ADD Products</Button>
      <DataTable columns={columns} data={apidata} />
    </div>
  );
}
