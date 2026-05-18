import '../styles/ProductCard.css'

function ProductCard({ product, onDelete }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <p className="product-price">{product.price.toLocaleString('ru-RU')} ₽</p>
          <button
            className="delete-btn"
            onClick={() => onDelete(product.id)}
            title="Удалить объявление"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
