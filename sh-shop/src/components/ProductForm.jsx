import { useState } from 'react'
import '../styles/ProductForm.css'

function ProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.price || !formData.image) {
      alert('Пожалуйста, заполните название, цену и URL фото')
      return
    }

    onAddProduct({
      name: formData.name,
      price: Number(formData.price),
      description: formData.description || 'Нет описания',
      image: formData.image
    })

    setFormData({
      name: '',
      price: '',
      description: '',
      image: ''
    })
  }

  return (
    <section className="product-form-section">
      <div className="form-container">
        <h2>➕ Добавить товар</h2>
        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-group">
            <label htmlFor="name">Название товара *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Например: Ноутбук, Смартфон..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Цена (₽) *</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="5000"
              required
              min="0"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Описание</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Опишите товар, его характеристики..."
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">URL фото товара *</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://..."
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            📌 Добавить объявление
          </button>
        </form>
      </div>
    </section>
  )
}

export default ProductForm
