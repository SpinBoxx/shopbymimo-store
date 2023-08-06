import { Product } from "@/types/types";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  products: Product[];
  addProduct: (data: Product) => void;
  removeProduct: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      products: [],
      addProduct: (data: Product) => {
        const currentProducts = get().products;
        const existingProduct = currentProducts.find(
          (product) => product.id === data.id
        );
        if (existingProduct) {
          return toast.error("Product already in your cart.");
        }
        set({ products: [...get().products, data] });
        toast.success("Product added to your cart.");
      },
      removeProduct: (id: string) => {
        set({
          products: [...get().products.filter((product) => product.id !== id)],
        });
        toast.success("Product removed from your cart.");
      },
      removeAll: () => {
        set({
          products: [],
        });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
