"use client";

import { Product } from "@/types/types";
import Currency from "@/components/ui/currency";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface Props {
  product: Product;
}
export default function Info({ product }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={product.price} />
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size :</h3>
          <div>{product.size.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color :</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-500"
            style={{ backgroundColor: product.color.value }}
          ></div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          <ShoppingCart />
          Add to cart
        </Button>
      </div>
    </div>
  );
}
