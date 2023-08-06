import { Product } from "@/types/types";
import { create } from "zustand";

interface PreviewModalStore {
  data?: Product;
  open: boolean;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  data: undefined,
  open: false,
  onOpen: (data: Product) => set({ data, open: true }),
  onClose: () => set({ open: false }),
}));

export default usePreviewModal;
