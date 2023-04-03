import { Product } from '@/models/product';

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card col-3">
      <div className="img-wrapper">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic example">
          <a
            href={`/${product.id}`}
            className="btn btn-secondary">
            View Detail
          </a>
          <a
            href="#"
            className="btn btn-primary active">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
