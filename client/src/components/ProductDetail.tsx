import { Product } from '@/models/product';

function ProductDetail({ product }: { product: Product }) {
  return (
    <div
      className="row product-detail"
      key={product.id}>
      <div className="img-wrapper col-2">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
        />
      </div>
      <div className="col-10 product-detail-right">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic example">
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

export default ProductDetail;
