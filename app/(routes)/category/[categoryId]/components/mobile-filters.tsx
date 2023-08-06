"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Color, Size } from "@/types/types";
import Filter from "./filter";

interface Props {
  sizes: Size[];
  colors: Color[];
}

export default function MobileFilter({ colors, sizes }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild className="lg:hidden">
        <Button variant="outline">Filter products</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="start">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Filter name="Sizes" data={sizes} valueKey="sizeId" />
            <Filter name="Colors" data={colors} valueKey="colorId" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
