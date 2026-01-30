import { useState } from 'react'
import { Link } from 'react-router-dom'
import { products, categories } from '../utils/products'
import { useCart } from '../utils/cartContext'

export default function Produtos() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [searchTerm, setSearchTerm] = useState('')
  const { addItem } = useCart()
  
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })
  
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 animate-in">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Nossos <span className="gradient-text">Produtos</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore nossa coleção completa de produtos personalizáveis
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto animate-in" style={{ animationDelay: '100ms' }}>
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pl-12"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center animate-in" style={{ animationDelay: '200ms' }}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
                    : 'glass glass-hover text-white/80'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Results Count */}
        <div className="mb-6 text-center text-white/60 animate-in" style={{ animationDelay: '300ms' }}>
          Mostrando {filteredProducts.length} {filteredProducts.length === 1 ? 'produto' : 'produtos'}
        </div>
        
        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="card card-hover group animate-in"
                style={{ animationDelay: `${(index % 12) * 50}ms` }}
              >
                <Link to={`/produto/${product.slug}`} className="block">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                      {product.originalPrice > product.price && (
                        <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                          -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </div>
                      )}
                      {product.customizable && (
                        <div className="glass text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-xl">
                          Personalizável
                        </div>
                      )}
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="glass px-3 py-1 rounded-full text-xs font-medium backdrop-blur-xl">
                        {categories.find(c => c.id === product.category)?.name || product.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-400 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  
                  <p className="text-white/60 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Sizes/Colors */}
                  {(product.sizes || product.colors) && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {product.sizes && product.sizes.length > 0 && (
                        <div className="flex items-center gap-1 text-xs text-white/40">
                          <span>Tamanhos:</span>
                          <span className="font-medium">{product.sizes.join(', ')}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4">
                    {product.originalPrice > product.price && (
                      <span className="text-white/40 line-through text-sm">
                        R$ {product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-2xl font-bold gradient-text">
                      R$ {product.price.toFixed(2)}
                    </span>
                  </div>
                  
                  {/* Bulk Pricing Info */}
                  {product.bulkPricing && (
                    <div className="text-xs text-primary-400 mb-4">
                      A partir de {product.bulkPricing[0].minQty} unidades: R$ {product.bulkPricing[0].price.toFixed(2)}
                    </div>
                  )}
                </Link>
                
                <button
                  onClick={() => addItem(product)}
                  className="btn btn-primary w-full"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">Nenhum produto encontrado</h3>
            <p className="text-white/60">Tente buscar por outro termo ou categoria</p>
          </div>
        )}
      </div>
    </div>
  )
}
