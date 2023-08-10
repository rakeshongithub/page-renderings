import ProductDetail from '@/components/ProductDetail';
import { Product } from '@/models/product';
import { getProductDetail } from '@/services/productDetailService';
import { getProductList } from '@/services/productListService';
import { DD_MM_YYYY, REVALIDATE_TIME } from '@/utils/constants';
import { info } from '@/utils/logger';
import dayjs from 'dayjs';

export async function getStaticPaths() {
  info(`getStaticPaths: Creating page path`);
  const products: Product[] = await getProductList(8);
  const paths = products?.map((products: Product) => {
    return {
      params: { id: String(products.id) }
    };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }: any) {
  info(`getStaticProps: Requesting to fetch product detail for product id: ${params?.id}`);
  const generationTime = dayjs().format(DD_MM_YYYY);

  // redirect to 404 if product id not found
  if (!params?.id) {
    return {
      notFound: true
    };
  }

  // fetching product on server
  const product: Product = await getProductDetail(params?.id);

  // redirect to 404 if product not found
  if (!product) {
  info(`getStaticProps: Product not exist: ${params?.id}`);
  return {
      notFound: true,
      revalidate: 1 // In seconds
  };
  }

  return {
    props: {
      product,
      generationTime
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: REVALIDATE_TIME // In seconds
  };
}

export default function Home({ product, generationTime }: { product: Product; generationTime: string }) {
  return (
    <>
      <header className="page-header">{generationTime}</header>
      <main className="container">
        <h1>ISR - Incremental Static Regeneration</h1>
        <hr />
        <ProductDetail product={product} />
      </main>
    </>
  );
}
