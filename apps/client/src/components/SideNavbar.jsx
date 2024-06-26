"use client";
import React, { useState } from "react";
import { Nav } from "./ui/nav";
import {
  LayoutDashboard,
  Settings,
  ShoppingCart,
  ChevronRight,
  UsersRound,
  Package,
} from "lucide-react";
import { Button } from "./ui/button";
import { LineChart } from "lucide-react";
import { useWindowWidth } from "@react-hook/window-size";
export default function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}

      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/admin",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "User",
            href: "/admin/users",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/admin/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Products",
            href: "/admin/products",
            icon: Package,
            variant: "ghost",
          },

          {
            title: "Setting",
            href: "/admin/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
