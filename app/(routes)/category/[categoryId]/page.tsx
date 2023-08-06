import getProducts from "@/actions/get-products";

export const revalidate = 0;

interface Props {
  params: {
    categoryId: string;
  };
  searchParams: { colorId: string; sizeId: string };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  return <div>CategoryPage</div>;
}
