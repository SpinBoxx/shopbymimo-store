"use client";

import { Product } from "@/types/types";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import { Button } from "./button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-moda";
import useCart from "@/hooks/use-card";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();
  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    previewModal.onOpen(product);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addProduct(product);
  };

  return (
    <div
      className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3"
      onClick={handleClick}
    >
      <div className="relative aspect-square rounded-xl bg-gray-300">
        <Image
          src={product.images?.[0]?.url}
          alt="Image"
          fill
          className="aspect-square rounded-md object-cover"
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <Button
              variant="outline"
              className="rounded-full"
              size="icon"
              onClick={onPreview}
            >
              <Expand className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full"
              size="icon"
              onClick={onAddToCart}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold">{product.name}</p>
        <p className="text-sm text-gray-500">{product.category.name} </p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={product.price} />
      </div>
    </div>
  );
}
