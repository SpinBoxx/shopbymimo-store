import { Product } from "@/types/types";
import qs from "query-string";

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const _url = qs.stringifyUrl({
    url: url,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  console.log(_url);

  const res = await fetch(_url);
  return res.json();
};

export default getProducts;
