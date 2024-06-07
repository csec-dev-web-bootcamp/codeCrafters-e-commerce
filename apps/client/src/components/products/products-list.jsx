import { getManyProducts } from "@app/client/data/product.data";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

import ProductCard from "./product-card";
import { ProductsCard } from "./productCard";

export default async function ProductsList() {
  const apidata = await getManyProducts();
  return <ProductsCard products={apidata} />;
}
