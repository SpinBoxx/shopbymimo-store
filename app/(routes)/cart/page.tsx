"use client";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-card";
import { useEffect, useState } from "react";
import CartProduct from "./components/cart-product";
import Summary from "./components/summary";

export default function CartPage() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const cart = useCart();
  if (!isMounted) return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping cart</h1>
          <div className="mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              {cart.products.length === 0 && (
                <p className="text-neutral-500">
                  No products added to your cart
                </p>
              )}
              <ul>
                {cart.products.map((product) => (
                  <CartProduct product={product} key={product.id} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
}
