"use client";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-card";
import { Product } from "@/types/types";
import { X, icons } from "lucide-react";
import Image from "next/image";

interface Props {
  product: Product;
}

export default function CartProduct({ product }: Props) {
  const cart = useCart();
  const onRemove = () => {
    cart.removeProduct(product.id);
  };

  return (
    <li className="flex border-b py-6">
      <div className="relative h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
        <Image
          fill
          src={product.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute right-0 top-0 z-10">
          <Button size="icon" variant="outline" onClick={onRemove}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{product.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{product.color.name}</p>
            <p className="bordergray-200 ml-4 border-l pl-4 text-gray-500">
              {product.size.name}
            </p>
          </div>
          <Currency value={product.price} />
        </div>
      </div>
    </li>
  );
}
