import { Product } from '@/models/product';
import ProductCard from './ProductCard';

function ProductList({ products }: { products: Product[] }) {
  return (
    <section className="product-wrapper row">
      {products?.map((product: Product) => {
        return (
          <ProductCard
            product={product}
            key={product.title}
          />
        );
      })}
    </section>
  );
}

export default ProductList;
