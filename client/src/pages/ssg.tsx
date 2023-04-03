import ProductList from '@/components/ProductList';
import { Product } from '@/models/product';
import { getProductList } from '@/services/productListService';
import { info } from '@/utils/logger';

export async function getStaticProps() {
  info('getStaticProps: Requesting for product list data');

  // fetching product on server
  const products: Product[] = await getProductList(8);

  // redirect to 404 if product not found
  if (!products?.length) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      products
    }
  };
}

export default function Home({ products }: { products: Product[] }) {
  return (
    <>
      <main className="container">
        <h1>SSG - Product List</h1>
        <hr />
        <ProductList products={products} />
      </main>
    </>
  );
}
