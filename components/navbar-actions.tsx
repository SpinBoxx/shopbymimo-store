"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-card";
import { useRouter } from "next/navigation";

export default function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  const router = useRouter();

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="rounded-full" onClick={() => router.push("/cart")}>
        <ShoppingBag className="mr-2 h-4 w-4" />
        <span className="text-sm font-medium text-white">
          {cart.products.length}
        </span>
      </Button>
    </div>
  );
}
