import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import ProductList from "@/components/product-list";
import getProducts from "@/actions/get-products";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("41f4d82f-9ba1-42e8-89d0-ccebf0908a85");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-8 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured products" products={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
