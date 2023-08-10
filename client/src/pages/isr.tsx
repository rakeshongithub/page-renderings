import ProductList from '@/components/ProductList';
import { Product } from '@/models/product';
import { getProductList } from '@/services/productListService';
import { DD_MM_YYYY, REVALIDATE_TIME } from '@/utils/constants';
import { info } from '@/utils/logger';
import dayjs from 'dayjs';


export async function getStaticProps() {
  info('getStaticProps: Requesting for product list data');

  // fetching product on server
  const products: Product[] = await getProductList(8);
  const generationTime = dayjs().format(DD_MM_YYYY);

  // redirect to 404 if product not found
  if (!products?.length) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      products,
      generationTime
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: REVALIDATE_TIME // In seconds
  };
}

export default function Home({ products, generationTime }: { products: Product[], generationTime: string }) {
  return (
    <>
      <header className="page-header">{generationTime}</header>
      <main className="container">
        <h1>ISR - Incremental Static Regeneration</h1>
        <hr />
        <ProductList products={products} />
      </main>
    </>
  );
}
