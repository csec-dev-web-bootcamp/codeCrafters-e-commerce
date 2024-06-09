import { getManyProducts } from "@app/client/data/product.data";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

import ProductCard from "./product-card";
import { ProductsCard } from "./productCard";
import { getMe } from "@app/client/data/user.data";

export default async function ProductsList() {
  const userData = await getMe();
  console.log({ this: userData });
  const apidata = await getManyProducts();
  console.log({ apidata });
  return <ProductsCard products={apidata} user={userData} />;
}
