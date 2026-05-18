import ProductCard from './ProductCard'
import '../styles/ProductBoard.css'

function ProductBoard({ products, onDeleteProduct }) {
  return (
    <section className="product-board">
      <h2>📌 Объявления о товарах</h2>
      {products.length === 0 ? (
        <p className="empty-message">Нет товаров. Добавьте первый товар!</p>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={onDeleteProduct}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default ProductBoard
