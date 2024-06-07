/** @format */

// import PageTitle from "@app/components/PageTitle";
import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
// import Card, { CardContent, CardProps } from "@app/components/Card";
// import BarChart from "@app/client/components/BarChart";
// import SalesCard, { SalesProps } from "@app/components/SalesCard";
import BarChart from "@app/client/components/BarChart";
import PageTitle from "@app/client/components/PageTitle";
import Card, { CardContent } from "@app/client/components/Card";
import SalesCard from "@app/client/components/SalesCard";
import AdminHeader from "@app/client/components/admin/AdminHeader";
import { getAllUsers, getMe } from "@app/client/data/user.data";
import { User } from "lucide-react";
import { BoxIcon } from "lucide-react";
import { List } from "lucide-react";
import { ListOrdered } from "lucide-react";
// import { getMe } from "@app/client/data/users.data";

const cardData = [
  {
    label: "Total Users",
    amount: "+6",

    icon: Users,
  },
  {
    label: "Products",
    amount: "+9",

    icon: BoxIcon,
  },
  {
    label: "Categories",
    amount: "+10",

    icon: List,
  },
  {
    label: "Ordered Items",
    amount: "+3",

    icon: CreditCard,
  },
];

const uesrSalesData = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00",
  },
];

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("failed to fetch the users");
  }
  return res.json();
};

export default async function Home() {
  const data = await getData();
  const user = await getMe();
  const users = await getAllUsers();

  const usersArray = Object.keys(users).map((key) => ({
    id: key,
    ...users[key],
  }));

  return (
    <div className="flex flex-col gap-5  w-full">
      <AdminHeader user={user} />

      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>

          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Customers</p>
            <p className="text-sm text-gray-400"></p>
          </section>
          {usersArray.map((d, i) => (
            <SalesCard key={i} email={d.email} name={d.firstName} />
          ))}
        </CardContent>

        {/*  */}
      </section>
    </div>
  );
}
