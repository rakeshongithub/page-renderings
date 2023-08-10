import ProductList from '@/components/ProductList';
import { Product } from '@/models/product';
import { getProductList } from '@/services/productListService';
import { info } from '@/utils/logger';
import { NextApiResponse } from 'next';

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  info('getServerSideProps: Requesting for product list data');

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
        <h1>SSR - Server Side Rendering</h1>
        <hr />
        <ProductList products={products} />
      </main>
    </>
  );
}
