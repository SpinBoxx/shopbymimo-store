"use client";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-card";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

export default function Summary() {
  const searchParams = useSearchParams();
  const products = useCart((state) => state.products);
  const removeAll = useCart((state) => state.removeAll);

  const totalPrice = products.reduce((total, product) => {
    return total + Number(product.price);
  }, 0);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: products.map((product) => product.id),
      }
    );

    window.location = response.data.url;
  };

  return (
    <div className="pg:p-8 mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-4 lg:mt-0">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        disabled={products.length === 0}
        className="mt-6 w-full rounded-full"
        onClick={onCheckout}
      >
        Checkout
      </Button>
    </div>
  );
}
