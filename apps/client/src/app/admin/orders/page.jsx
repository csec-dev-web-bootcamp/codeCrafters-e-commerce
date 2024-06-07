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
import { cn } from "@app/client/lib/utils";
import OrderList from "@app/client/components/admin/orderList";
// import { cn } from "@/lib/utils";

export default function OrdersPage({}) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <OrderList />
    </div>
  );
}
