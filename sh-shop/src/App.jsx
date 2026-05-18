import { useState } from 'react'
import './App.css'
import ProductBoard from './components/ProductBoard'
import ProductForm from './components/ProductForm'

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Ноутбук',
      price: 45000,
      description: 'Мощный ноутбук для работы и игр',
      image: 'https://images.unsplash.com/photo-1588072911519-a4ec620cfddd?w=300&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Смартфон',
      price: 25000,
      description: 'Современный смартфон с отличной камерой',
      image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=300&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Наушники',
      price: 8000,
      description: 'Беспроводные наушники с шумоподавлением',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop'
    }
  ])

  const addProduct = (newProduct) => {
    const product = {
      id: Date.now(),
      ...newProduct
    }
    setProducts([product, ...products])
  }

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id))
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🛍️ Магазин товаров</h1>
        <p>Доска объявлений</p>
      </header>
      <main>
        <ProductForm onAddProduct={addProduct} />
        <ProductBoard products={products} onDeleteProduct={deleteProduct} />
      </main>
    </div>
  )
}

export default App
