import React from "react";
import NoResult from "@/components/ui/no-results";
import { Product } from "@/types/types";
import ProductCard from "./ui/product-card";

interface Props {
  title: string;
  products: Product[];
}

export default function ProductList({ title, products }: Props) {
  return (
    <div className="space-y-5">
      <h3 className="text-3xl font-bold">{title}</h3>

      {products.length === 0 && <NoResult />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
