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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* {products.map((product) => (
        <HoverCard>
          <HoverCardTrigger className="bg-slate-300">
            {<ProductCard key={product.id} product={product} />}
          </HoverCardTrigger>
          <HoverCardContent className="bg-slate-50 bg-opacity-95">
            <header className="font-bold text-slate-700">product detail</header>
            <p className="text-slate-500">{product.description}</p>
          </HoverCardContent>
        </HoverCard>
      ))} */}

      {apidata.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
}
