import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProductById, calculatePrice } from '../utils/products'
import { useCart } from '../utils/cartContext'

export default function ProdutoDetalhe() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()
  
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '')
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '')
  const [quantity, setQuantity] = useState(1)
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-3xl font-bold mb-4">Produto não encontrado</h2>
          <Link to="/produtos" className="btn btn-primary">
            Ver Todos os Produtos
          </Link>
        </div>
      </div>
    )
  }
  
  const allImages = [...product.images, ...(product.images3d || [])]
  const totalPrice = calculatePrice(product, quantity)
  
  const handleAddToCart = () => {
    addItem({
      ...product,
      selectedSize,
      selectedColor
    }, quantity)
    
    // Show toast or notification (simplified)
    alert(`${quantity}x ${product.name} adicionado ao carrinho!`)
  }
  
  const handleBuyNow = () => {
    handleAddToCart()
    navigate('/carrinho')
  }
  
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8 animate-in">
          <Link to="/" className="text-white/60 hover:text-white transition-colors">Início</Link>
          <span className="text-white/40">/</span>
          <Link to="/produtos" className="text-white/60 hover:text-white transition-colors">Produtos</Link>
          <span className="text-white/40">/</span>
          <span className="text-white">{product.name}</span>
        </nav>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4 animate-in">
            {/* Main Image */}
            <div className="glass rounded-2xl p-4 overflow-hidden group">
              <img
                src={allImages[selectedImage]}
                alt={product.name}
                className="w-full h-[500px] object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`glass rounded-xl p-2 overflow-hidden transition-all duration-300 ${
                      selectedImage === index
                        ? 'ring-2 ring-primary-500 scale-105'
                        : 'hover:scale-105'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - ${index + 1}`}
                      className="w-full h-20 object-cover rounded-lg"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div className="space-y-6 animate-in" style={{ animationDelay: '200ms' }}>
            {/* Title and Price */}
            <div>
              <h1 className="text-4xl font-display font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-baseline gap-3 mb-4">
                {product.originalPrice > product.price && (
                  <span className="text-2xl text-white/40 line-through">
                    R$ {product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-4xl font-bold gradient-text">
                  R$ {product.price.toFixed(2)}
                </span>
                {product.originalPrice > product.price && (
                  <span className="glass px-3 py-1 rounded-full text-sm font-bold">
                    Economize {Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>
              
              {/* Bulk Pricing */}
              {product.bulkPricing && (
                <div className="glass rounded-xl p-4 space-y-2">
                  <div className="font-semibold text-sm text-primary-400">Preços por Quantidade:</div>
                  {product.bulkPricing.map((tier, index) => (
                    <div key={index} className="text-sm text-white/70">
                      A partir de {tier.minQty} unidades: <span className="font-bold text-white">R$ {tier.price.toFixed(2)}</span> cada
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Description */}
            <div className="glass rounded-xl p-6">
              <h3 className="font-bold mb-2">Sobre o Produto</h3>
              <p className="text-white/70 leading-relaxed">{product.description}</p>
            </div>
            
            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <label className="block font-semibold mb-3">Tamanho:</label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        selectedSize === size
                          ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
                          : 'glass glass-hover'
                      }`}
                    >
                      {size}
                      {product.sizeDimensions && product.sizeDimensions[size] && (
                        <span className="block text-xs opacity-60">{product.sizeDimensions[size]}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Colors */}
            {product.colors && product.colors.length > 1 && (
              <div>
                <label className="block font-semibold mb-3">Cor:</label>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        selectedColor === color
                          ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
                          : 'glass glass-hover'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity */}
            <div>
              <label className="block font-semibold mb-3">Quantidade:</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center glass rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-white/10 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center bg-transparent border-none outline-none text-lg font-bold"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-white/10 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex-1">
                  <div className="text-sm text-white/60">Total:</div>
                  <div className="text-2xl font-bold gradient-text">
                    R$ {totalPrice.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleBuyNow}
                className="btn btn-primary w-full text-lg py-4"
              >
                Comprar Agora
              </button>
              
              <button
                onClick={handleAddToCart}
                className="btn btn-outline w-full text-lg py-4"
              >
                Adicionar ao Carrinho
              </button>
              
              {product.customizable && (
                <Link
                  to={`/personalizar?produto=${product.id}`}
                  className="btn btn-ghost w-full text-lg py-4"
                >
                  🎨 Personalizar Este Produto
                </Link>
              )}
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">⚡</div>
                <div>
                  <div className="font-semibold text-sm">Entrega Rápida</div>
                  <div className="text-xs text-white/60">Até 7 dias úteis</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🎨</div>
                <div>
                  <div className="font-semibold text-sm">Personalização</div>
                  <div className="text-xs text-white/60">Sublimação de qualidade</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">💬</div>
                <div>
                  <div className="font-semibold text-sm">Atendimento</div>
                  <div className="text-xs text-white/60">Direto com a proprietária</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">⭐</div>
                <div>
                  <div className="font-semibold text-sm">Qualidade</div>
                  <div className="text-xs text-white/60">+10 anos de experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
