"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export default function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="rounded-full">
        <ShoppingBag className="mr-2 h-4 w-4" />
        <span className="text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
}
