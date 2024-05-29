/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "../../../components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "../../../components/PageTitle";

const columns = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center rounded-full">
          <img
            className="h-10 w-10 object-cover object-center rounded-full"
            src={`https://cdn.imgbin.com/8/20/20/imgbin-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-pvE7Qhr6Zk7kLJpGiWZ9FFRVf.jpg`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
];

const getData = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("failed to fetch user data");
  }

  return res.json();
};

export default async function UsersPage({}) {
  const apidata = await getData();

  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Users" />
      <DataTable columns={columns} data={apidata} />
    </div>
  );
}
