import Preloader from '@/components/Preloader';
import ProductList from '@/components/ProductList';
import { getProductList } from '@/services/productListService';
import { info, error } from '@/utils/logger';
import { useEffect, useState } from 'react';

export default function Demo() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    info('fetchData: Requesting for product list data');
    const res = await getProductList(8);
    setProducts(res);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (err: any) {
      error('Failed to fetch product list');
    }
  }, []);

  return (
    <>
      <main className="container">
        <h1>CSR - Client Side Rendering</h1>
        <hr />
        {products?.length ? <ProductList products={products} /> : <Preloader />}
      </main>
    </>
  );
}
